export type LiveLabelKey = "exploreList" | "dailySignals";

export type Product = {
  name: string;
  repo: string;
  url: string;
  language?: "TypeScript" | "Go" | "Python" | "Shell" | "CSS" | null;
  stars?: number;
  pitch: { en: string; zh: string };
  group: "agents" | "devtools" | "fun";
  featured?: boolean;
  liveUrl?: string;
  liveLabel?: LiveLabelKey;
  status?: "alpha" | "beta" | "stable";
};

export const products: Product[] = [
  {
    name: "create-opc-wiki",
    repo: "Claws-ZH/create-opc-wiki",
    url: "https://github.com/Claws-ZH/create-opc-wiki",
    language: "TypeScript",
    stars: 0,
    pitch: {
      en: "Build your own local LLM Wiki in 30 seconds. Multi-agent native (Claude/Codex/Cursor/Trae), MCP server built-in, Astro static site publishing.",
      zh: "30 秒搭你自己的本地 LLM Wiki。多 Agent 原生（Claude/Codex/Cursor/Trae），内置 MCP server，Astro 静态站点发布。",
    },
    group: "agents",
    featured: true,
    status: "alpha",
  },
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
    name: "awesome-ai-api",
    repo: "Claws-ZH/awesome-ai-api",
    url: "https://github.com/Claws-ZH/awesome-ai-api",
    language: "Python",
    stars: 1,
    pitch: {
      en: "The world's largest open-source leaderboard of 200+ AI API gateways and relays — daily /v1/models probe, bilingual.",
      zh: "目前最大的开源 AI API 网关与中转榜单,每天探一次 /v1/models,中英双语。",
    },
    group: "agents",
    liveUrl: "https://Claws-ZH.github.io/awesome-ai-api/",
    liveLabel: "exploreList",
  },
  {
    name: "hermes-manager",
    repo: "Claws-ZH/hermes-manager",
    url: "https://github.com/Claws-ZH/hermes-manager",
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
    name: "ai-agents",
    repo: "Claws-ZH/ai-agents",
    url: "https://github.com/Claws-ZH/ai-agents",
    language: "Python",
    stars: 1,
    pitch: {
      en: "AI agent fleet — devops, finance, media, office, social. Shared Anthropic Claude loop with domain-specific tools.",
      zh: "AI Agent 舰队 —— devops / 财务 / 媒体 / 办公 / 社交。共用 Claude loop,每个领域各自的工具集。",
    },
    group: "agents",
  },
  {
    name: "zh-policy-rag",
    repo: "MackDing/zh-policy-rag",
    url: "https://github.com/MackDing/zh-policy-rag",
    language: "Python",
    stars: 1,
    pitch: {
      en: "Chinese policy and regulation RAG system. Multi-source retrieval, Corrective RAG, OpenAI-compatible LLM integration.",
      zh: "中文政策法规 RAG 系统。多源检索、Corrective RAG、OpenAI 兼容 LLM 接入。",
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
    name: "mentalModelMap",
    repo: "MackDing/mentalModelMap",
    url: "https://github.com/MackDing/mentalModelMap",
    language: "TypeScript",
    stars: 2,
    pitch: {
      en: "Interactive mental model mapping tool. Visualize and connect thinking frameworks for better decision-making.",
      zh: "思维模型交互式映射工具。把决策框架可视化、互相连接,让复杂思考更清晰。",
    },
    group: "devtools",
  },
  {
    name: "opc-daily-signal",
    repo: "Claws-ZH/opc-daily-signal",
    url: "https://github.com/Claws-ZH/opc-daily-signal",
    language: "CSS",
    stars: 2,
    pitch: {
      en: "Daily decision intelligence for one-person companies — AI-powered morning brief.",
      zh: "一人公司的每日决策情报 —— AI 驱动的晨间简报。",
    },
    group: "agents",
    liveUrl: "https://Claws-ZH.github.io/opc-daily-signal/",
    liveLabel: "dailySignals",
  },
];
