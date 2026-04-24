import fs from "node:fs";
import path from "node:path";

const CACHE_DIR = path.resolve("node_modules/.cache/mack-portal");
const CACHE_FILE = path.join(CACHE_DIR, "github.json");
const CACHE_TTL_MS = 60 * 60 * 1000;
const FETCH_TIMEOUT_MS = 4000;

export type GitHubUser = {
  followers: number;
  public_repos: number;
};

export type GitHubData = {
  updatedAt: number;
  user: GitHubUser | null;
  stars: Record<string, number>;
};

const HEADERS: Record<string, string> = {
  "User-Agent": "mack-portal-build",
  Accept: "application/vnd.github+json",
};
if (process.env.GITHUB_TOKEN) {
  HEADERS.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

async function fetchJson(url: string): Promise<any | null> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: ctrl.signal, headers: HEADERS });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function readCache(): GitHubData | null {
  try {
    const raw = fs.readFileSync(CACHE_FILE, "utf8");
    const parsed = JSON.parse(raw) as GitHubData;
    if (typeof parsed?.updatedAt === "number") return parsed;
  } catch {}
  return null;
}

function writeCache(data: GitHubData): void {
  try {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    fs.writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2));
  } catch {}
}

let memo: Promise<GitHubData> | null = null;

export function getGitHubData(repos: string[]): Promise<GitHubData> {
  if (memo) return memo;
  memo = (async () => {
    const cached = readCache();
    if (cached && Date.now() - cached.updatedAt < CACHE_TTL_MS) {
      return cached;
    }

    const [userRaw, ...repoRaws] = await Promise.all([
      fetchJson("https://api.github.com/users/MackDing"),
      ...repos.map((r) => fetchJson(`https://api.github.com/repos/${r}`)),
    ]);

    const user: GitHubUser | null =
      userRaw &&
      typeof userRaw.followers === "number" &&
      typeof userRaw.public_repos === "number"
        ? { followers: userRaw.followers, public_repos: userRaw.public_repos }
        : cached?.user ?? null;

    const stars: Record<string, number> = { ...(cached?.stars ?? {}) };
    repoRaws.forEach((data, i) => {
      if (data && typeof data.stargazers_count === "number") {
        stars[repos[i]] = data.stargazers_count;
      }
    });

    const fresh: GitHubData = { updatedAt: Date.now(), user, stars };
    writeCache(fresh);
    return fresh;
  })();
  return memo;
}
