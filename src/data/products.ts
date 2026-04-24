export type Product = {
  name: string;
  repo: string;
  url: string;
  language?: "TypeScript" | "Go" | "Python" | "Shell" | "CSS" | null;
  stars?: number;
  pitch: { en: string; zh: string };
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
    pitch: {
      en: "Remote access to CodeX over Telegram — interact with your projects from anywhere with full AI assistance and session persistence.",
      zh: "用 Telegram 远程操控 CodeX —— 随时随地接管项目,带完整 AI 协同,会话还能续着跑。",
    },
    group: "agents",
    featured: true,
  },
  {
    name: "openclaw-installer-skill",
    repo: "Claws-ZH/openclaw-installer-skill",
    url: "https://github.com/Claws-ZH/openclaw-installer-skill",
    language: "Shell",
    stars: 8,
    pitch: {
      en: "Robust OpenClaw installer for Chinese users — handles network proxies, dependencies, and builds.",
      zh: "给国内用户用得顺手的 OpenClaw 安装脚本 —— 代理、依赖、构建,一次到位。",
    },
    group: "devtools",
  },
  {
    name: "claws-shield",
    repo: "Claws-ZH/claws-shield",
    url: "https://github.com/Claws-ZH/claws-shield",
    language: "TypeScript",
    stars: 7,
    pitch: {
      en: "Security / guard layer for the Claws ecosystem. Work in progress.",
      zh: "Claws 生态的安全与防护层。仍在推进中,尚未成熟。",
    },
    group: "devtools",
  },
  {
    name: "awesome-ai-api",
    repo: "MackDing/awesome-ai-api",
    url: "https://github.com/MackDing/awesome-ai-api",
    language: "Python",
    stars: 1,
    pitch: {
      en: "The world's largest open-source leaderboard of 200+ AI API gateways and relays — daily /v1/models probe, bilingual.",
      zh: "目前最大的开源 AI API 网关与中转榜单,每天探一次 /v1/models,中英双语。",
    },
    group: "agents",
  },
  {
    name: "opc-daily-signal",
    repo: "MackDing/opc-daily-signal",
    url: "https://github.com/MackDing/opc-daily-signal",
    language: "CSS",
    stars: 2,
    pitch: {
      en: "Daily decision intelligence for one-person companies — AI-powered morning brief.",
      zh: "一人公司的每日决策情报 —— AI 驱动的晨间简报。",
    },
    group: "fun",
  },
  {
    name: "hermes-manager",
    repo: "MackDing/hermes-manager",
    url: "https://github.com/MackDing/hermes-manager",
    language: "Go",
    stars: 1,
    pitch: {
      en: "K8s-native control plane for Hermes Agent fleets — 5-minute helm install to a working fleet.",
      zh: "为 Hermes 智能体集群准备的 K8s 原生控制面 —— 一次 helm 安装,五分钟跑起来。",
    },
    group: "agents",
  },
  {
    name: "doc-preprocess-hub",
    repo: "MackDing/doc-preprocess-hub",
    url: "https://github.com/MackDing/doc-preprocess-hub",
    language: "Python",
    stars: 1,
    pitch: {
      en: "Enterprise document preprocessing platform — MinerU + docling, with audit, PII redaction, and operator console.",
      zh: "企业级文档预处理平台 —— MinerU + docling,内置审计、PII 脱敏与操作台。",
    },
    group: "agents",
  },
  {
    name: "claude-context-health",
    repo: "MackDing/claude-context-health",
    url: "https://github.com/MackDing/claude-context-health",
    language: null,
    stars: 1,
    pitch: {
      en: "Claude Code context-health diagnosis guide — spot and fix context degradation in long sessions.",
      zh: "Claude Code 上下文健康诊断指南 —— 在长会话里发现并修复上下文退化。",
    },
    group: "devtools",
  },
  {
    name: "claude-cli-session-monitor",
    repo: "MackDing/claude-cli-session-monitor",
    url: "https://github.com/MackDing/claude-cli-session-monitor",
    language: "Shell",
    pitch: {
      en: "Monitor and observe Claude CLI sessions — usage, health, anomalies.",
      zh: "观察 Claude CLI 会话 —— 用量、健康度、异常行为,一目了然。",
    },
    group: "devtools",
  },
  {
    name: "network-egress-doctor",
    repo: "MackDing/network-egress-doctor",
    url: "https://github.com/MackDing/network-egress-doctor",
    language: "Shell",
    pitch: {
      en: "Diagnose outbound network issues on Linux servers fast — DNS, TLS, proxy, IPv6, MTU.",
      zh: "在 Linux 服务器上快速定位出网问题 —— DNS、TLS、代理、IPv6、MTU,一把梳清楚。",
    },
    group: "devtools",
  },
  {
    name: "OnePC",
    repo: "MackDing/OnePC",
    url: "https://github.com/MackDing/OnePC",
    language: null,
    pitch: {
      en: "One-person company playbook and toolkit. Running a whole business solo.",
      zh: "一人公司手册与工具包 —— 一个人把一家公司跑起来。",
    },
    group: "fun",
  },
  {
    name: "five-in-a-row",
    repo: "MackDing/five-in-a-row",
    url: "https://github.com/MackDing/five-in-a-row",
    language: null,
    pitch: {
      en: "Classic Gomoku — weekend fun project.",
      zh: "经典五子棋 —— 周末随手写的小项目。",
    },
    group: "fun",
  },
];
