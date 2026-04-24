export type Product = {
  name: string;
  repo: string;
  url: string;
  language?: "TypeScript" | "Go" | "Python" | "Shell" | "CSS" | null;
  stars?: number;
  pitch: string;
  pitchZh?: string;
  group: "agents" | "devtools" | "fun";
  featured?: boolean;
};

export const products: Product[] = [
  {
    name: "CodexClaw",
    repo: "MackDing/CodexClaw",
    url: "https://github.com/MackDing/CodexClaw",
    language: "TypeScript",
    stars: 24,
    pitch:
      "Remote access to CodeX over Telegram — interact with your projects from anywhere with full AI assistance and session persistence.",
    group: "agents",
    featured: true,
  },
  {
    name: "openclaw-installer-skill",
    repo: "Claws-ZH/openclaw-installer-skill",
    url: "https://github.com/Claws-ZH/openclaw-installer-skill",
    language: "Shell",
    stars: 8,
    pitch:
      "Robust OpenClaw installer for Chinese users — handles network proxies, dependencies, and builds.",
    group: "devtools",
  },
  {
    name: "claws-shield",
    repo: "Claws-ZH/claws-shield",
    url: "https://github.com/Claws-ZH/claws-shield",
    language: "TypeScript",
    stars: 7,
    pitch: "Security / guard layer for the Claws ecosystem. Work in progress.",
    group: "devtools",
  },
  {
    name: "awesome-ai-api",
    repo: "MackDing/awesome-ai-api",
    url: "https://github.com/MackDing/awesome-ai-api",
    language: "Python",
    stars: 1,
    pitch:
      "The world's largest open-source leaderboard of 200+ AI API gateways and relays — daily /v1/models probe, bilingual.",
    pitchZh: "最大的开源 AI API 网关榜单,每日探测 /v1/models,中英双语。",
    group: "agents",
  },
  {
    name: "opc-daily-signal",
    repo: "MackDing/opc-daily-signal",
    url: "https://github.com/MackDing/opc-daily-signal",
    language: "CSS",
    stars: 2,
    pitch:
      "Daily decision intelligence for one-person companies — AI-powered morning brief.",
    pitchZh: "一人公司的每日决策情报 —— AI 驱动的晨报。",
    group: "fun",
  },
  {
    name: "hermes-manager",
    repo: "MackDing/hermes-manager",
    url: "https://github.com/MackDing/hermes-manager",
    language: "Go",
    stars: 1,
    pitch:
      "K8s-native control plane for Hermes Agent fleets — 5-minute helm install to a working fleet.",
    group: "agents",
  },
  {
    name: "doc-preprocess-hub",
    repo: "MackDing/doc-preprocess-hub",
    url: "https://github.com/MackDing/doc-preprocess-hub",
    language: "Python",
    stars: 1,
    pitch:
      "Enterprise document preprocessing platform — MinerU + docling, with audit, PII redaction, and operator console.",
    group: "agents",
  },
  {
    name: "claude-context-health",
    repo: "MackDing/claude-context-health",
    url: "https://github.com/MackDing/claude-context-health",
    language: null,
    stars: 1,
    pitch:
      "Claude Code context-health diagnosis guide — spot and fix context degradation in long sessions.",
    pitchZh: "Claude Code 上下文健康诊断指南,定位并修复长会话中的上下文退化。",
    group: "devtools",
  },
  {
    name: "claude-cli-session-monitor",
    repo: "MackDing/claude-cli-session-monitor",
    url: "https://github.com/MackDing/claude-cli-session-monitor",
    language: "Shell",
    pitch: "Monitor and observe Claude CLI sessions — usage, health, anomalies.",
    group: "devtools",
  },
  {
    name: "network-egress-doctor",
    repo: "MackDing/network-egress-doctor",
    url: "https://github.com/MackDing/network-egress-doctor",
    language: "Shell",
    pitch:
      "Diagnose outbound network issues on Linux servers fast — DNS, TLS, proxy, IPv6, MTU.",
    group: "devtools",
  },
  {
    name: "OnePC",
    repo: "MackDing/OnePC",
    url: "https://github.com/MackDing/OnePC",
    language: null,
    pitch: "One-person company playbook and toolkit. Running a whole business solo.",
    pitchZh: "一人公司 —— 一个人把一家公司跑起来。",
    group: "fun",
  },
  {
    name: "five-in-a-row",
    repo: "MackDing/five-in-a-row",
    url: "https://github.com/MackDing/five-in-a-row",
    language: null,
    pitch: "Classic Gomoku — weekend fun project.",
    pitchZh: "经典五子棋 —— 周末项目。",
    group: "fun",
  },
];

export const groupMeta: Record<Product["group"], { title: string; hint: string }> = {
  agents: {
    title: "Agents & LLM infra",
    hint: "Where most of my time goes — tools around autonomous agents and LLM gateways.",
  },
  devtools: {
    title: "Developer tools",
    hint: "Small, sharp utilities for the terminal and the long-running dev loop.",
  },
  fun: {
    title: "For fun",
    hint: "Weekend projects and the occasional toolkit I wish existed.",
  },
};
