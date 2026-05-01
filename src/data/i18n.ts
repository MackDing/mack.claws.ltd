export type Lang = "en" | "zh";

export const i18n = {
  en: {
    htmlLang: "en",
    meta: {
      title:
        "Mack Ding — open-source tools for AI agents, LLM gateways, and dev productivity",
      description:
        "Mack Ding \u2014 AI-native developer in Shenzhen. I build quiet open-source tools around AI agents, LLM gateways, and developer productivity.",
    },
    nav: {
      projects: "Projects",
      contributions: "Contributions",
      contact: "Contact",
      githubAria: "GitHub profile",
    },
    hero: {
      badge: "AI-native dev \u00b7 Shenzhen",
      titleLine1: "I build quiet tools.",
      titleLine2: "The ones you forget you\u2019re using.",
      sub: "AI-native developer in Shenzhen. Open source, mostly \u2014 small, focused pieces at the edge of AI agents, LLM gateways, and the long developer loop. Shipped alongside Claude Code, Codex, and too much coffee.",
      ctaFollow: "Follow @MackDing",
      ctaFollowAria: (n: number | null) =>
        n === null
          ? "Follow @MackDing on GitHub (opens in new tab)"
          : `Follow @MackDing on GitHub, ${n} followers (opens in new tab)`,
      ctaStarProjects: "Star my projects",
      ctaStarProjectsAria:
        "Star my projects on GitHub (opens in new tab)",
      ctaHi: "Say hi",
      scroll: "Scroll",
      scrollAria: "Scroll to projects",
    },
    whatIBuild: {
      eyebrow: "What I build",
      title:
        "Small, focused tools. Mostly open source. Some are useful. All are honest.",
      body: "I care about sturdy primitives over shiny demos. Most of my work sits between an agent and the real world \u2014 the LLM gateway, the observability layer, the onboarding flow, the thing you run in a tmux pane at 2am.",
      pillars: [
        {
          icon: "sparkles",
          title: "Agents & LLM infra",
          body: "Telegram front-ends for code agents, K8s control planes for agent fleets, leaderboards for AI gateways.",
        },
        {
          icon: "terminal",
          title: "Developer tools",
          body: "Small, sharp utilities for the terminal \u2014 session monitors, network doctors, onboarding skills.",
        },
        {
          icon: "layers",
          title: "Playbooks",
          body: "Guides and patterns I\u2019ve learned the hard way, written down so the next person doesn\u2019t have to.",
        },
      ],
    },
    projects: {
      eyebrowLabel: "Projects",
      title: "A small catalog of open-source tools.",
      body: "Grouped by what they\u2019re for. Click any card to open on GitHub.",
      docsChip: "docs",
      cardAria: (name: string) => `${name} on GitHub (opens in new tab)`,
      starLabel: "Star",
      starAria: (name: string, count: number | null) =>
        count === null
          ? `Star ${name} on GitHub (opens in new tab)`
          : `Star ${name} on GitHub, ${count} stars (opens in new tab)`,
    },
    ui: {
      card: {
        live: {
          exploreList: "Explore list",
          dailySignals: "Daily signals",
        },
        liveAria: (label: string, name: string) =>
          `${label} — open ${name} live site (opens in new tab)`,
      },
    },
    mainProduct: {
      chip: "MAIN PRODUCT",
      title: "OPC",
      tagline:
        "Token gas station + daily decision intelligence for one-person companies.",
      description:
        "Your one-person-company command center. AI signals, a token gateway, and an agent fleet \u2014 all in one place.",
      ctaPrimary: "Visit opc.ren",
      ctaPrimaryAria: "Visit opc.ren (opens in new tab)",
      ctaSecondary: "Read daily signals",
      ctaSecondaryAria: "Read OPC daily signals (opens in new tab)",
      currentlyBuilding: "Just shipped: ",
      currentlyBuildingLink: "create-opc-wiki v1.0 — a one-line scaffold for the local LLM Wiki pattern. Install via npx.",
    },
    groups: {
      agents: {
        title: "Agents & LLM infra",
        hint: "Where most of my time goes \u2014 tools around autonomous agents and LLM gateways.",
      },
      devtools: {
        title: "Developer tools",
        hint: "Small, sharp utilities for the terminal and the long-running dev loop.",
      },
      fun: {
        title: "For fun",
        hint: "Weekend projects and the occasional toolkit I wish existed.",
      },
    },
    upstream: {
      eyebrow: "Upstream contributions",
      title: "Patches I\u2019m sending upstream.",
      body: "Work landing outside my own repos. Small list on purpose \u2014 I try to do each one well.",
      statusMerged: "Merged",
      openclaw: {
        mergedLine: "Merged Feb 10, 2026",
        summary:
          "Added a Custom / Local API onboarding flow to OpenClaw (Ollama, vLLM, LocalAI, any OpenAI-compatible endpoint). Auto-discovers models from /models, falls back to manual entry, and verifies connectivity before saving.",
      },
      jackclaw: {
        mergedLine: "Merged Apr 11, 2026",
        summary:
          "Expanded JackClawOS\u2019s AI team from 3 generic nodes to 7 methodology-driven nodes, each with a full gstack-inspired systemPrompt: role definition, philosophy, step-by-step workflow, structured output, and a completion status protocol.",
      },
      litellm: {
        mergedLine: "Merged Apr 25, 2026",
        summary:
          "Added the Z.AI (Zhipu AI) provider entry to the LiteLLM admin UI Add-Model dropdown. The backend already supported zai/* models (e.g. zai/glm-4.5), but the dropdown was driven by a hard-coded enum that excluded it. PR adds the enum entry, provider_map binding, default-model placeholder, and two regression tests.",
      },
      netcatty: {
        mergedLine: "Merged Apr 30, 2026",
        summary:
          "Replaced the remaining native browser tooltips in Netcatty's SFTP transfer queue with the shared Radix tooltip component, so retry / dismiss / resize / expand controls match the app's rounded visual style. Added EN + zh-CN i18n strings and a new test file for SftpTransferItem.",
      },
      placeholder: "More upstream work lands here soon.",
      cardAria: (project: string, pr: number) =>
        `${project} PR #${pr} (opens in new tab)`,
      viewPr: "View PR",
      viewPrAria: (project: string, pr: number) =>
        `Open ${project} PR #${pr} on GitHub (opens in new tab)`,
    },
    footer: {
      tagline:
        "Built in Shenzhen by an AI-native dev.",
      elsewhere: "Elsewhere",
      thisSite: "This site",
      links: {
        projects: "Projects",
        upstream: "Upstream contributions",
        source: "Source on GitHub",
      },
      rights: "All rights reserved.",
      credits: "Built with Astro \u00b7 Tailwind \u00b7 taste.",
    },
    langToggle: {
      en: "EN",
      zh: "\u4E2D",
      ariaLabel: "Language",
      ariaEn: "Switch to English",
      ariaZh: "\u5207\u6362\u5230\u4E2D\u6587",
    },
    skip: "Skip to content",
  },
  zh: {
    htmlLang: "zh-Hans",
    meta: {
      title:
        "Mack Ding \u2014 \u4E3A AI \u667A\u80FD\u4F53\u3001LLM \u7F51\u5173\u4E0E\u5F00\u53D1\u8005\u6548\u7387\u6253\u9020\u7684\u5F00\u6E90\u5DE5\u5177",
      description:
        "Mack Ding \u2014 AI-native \u5F00\u53D1\u8005\uFF0C\u5728\u6DF1\u5733\u3002\u9020\u5B89\u9759\u7684\u5F00\u6E90\u5DE5\u5177 \u2014\u2014 AI Agent\u3001LLM \u7F51\u5173\u3001\u5F00\u53D1\u8005\u5DE5\u4F5C\u6D41\u3002",
    },
    nav: {
      projects: "\u9879\u76EE",
      contributions: "\u4E0A\u6E38\u8D21\u732E",
      contact: "\u8054\u7CFB",
      githubAria: "GitHub \u4E3B\u9875",
    },
    hero: {
      badge: "AI-native \u00b7 \u6DF1\u5733",
      titleLine1: "\u6211\u9020\u5B89\u9759\u7684\u5DE5\u5177\u3002",
      titleLine2: "\u4F60\u751A\u81F3\u610F\u8BC6\u4E0D\u5230\u81EA\u5DF1\u5728\u7528\u7684\u90A3\u79CD\u3002",
      sub: "AI-native \u5F00\u53D1\u8005\uFF0C\u5728\u6DF1\u5733\u3002\u5F00\u6E90\u4E3A\u4E3B \u2014\u2014 \u4E13\u6CE8\u5728 AI Agent\u3001LLM \u7F51\u5173\u3001\u4EE5\u53CA\u957F\u8DD1\u7684\u5F00\u53D1\u8005\u5DE5\u4F5C\u6D41\u7684\u8FB9\u754C\u4E0A\u3002\u7528 Claude Code\u3001Codex \u548C\u4E00\u5806\u597D\u5947\u5FC3\u9020\u51FA\u6765\u3002",
      ctaFollow: "\u5173\u6CE8 @MackDing",
      ctaFollowAria: (n: number | null) =>
        n === null
          ? "\u5728 GitHub \u4E0A\u5173\u6CE8 @MackDing\uFF08\u65B0\u6807\u7B7E\u9875\u6253\u5F00\uFF09"
          : `\u5728 GitHub \u4E0A\u5173\u6CE8 @MackDing\uFF0C\u5F53\u524D ${n} \u4F4D\u5173\u6CE8\u8005\uFF08\u65B0\u6807\u7B7E\u9875\u6253\u5F00\uFF09`,
      ctaStarProjects: "\u7ED9\u6211\u7684\u9879\u76EE\u70B9 Star",
      ctaStarProjectsAria:
        "\u5728 GitHub \u4E0A\u7ED9\u6211\u7684\u9879\u76EE\u70B9 Star\uFF08\u65B0\u6807\u7B7E\u9875\u6253\u5F00\uFF09",
      ctaHi: "\u6253\u4E2A\u62DB\u547C",
      scroll: "\u4E0B\u6ED1",
      scrollAria: "\u6EDA\u52A8\u5230\u9879\u76EE\u680F",
    },
    whatIBuild: {
      eyebrow: "\u6211\u5728\u505A\u4EC0\u4E48",
      title:
        "\u5C0F\u800C\u4E13\u6CE8\u7684\u5DE5\u5177\uFF0C\u591A\u662F\u5F00\u6E90\u3002\u6709\u4E9B\u6709\u7528\uFF0C\u5168\u90FD\u5E72\u51C0\u8BDA\u5B9E\u3002",
      body: "\u6211\u66F4\u5728\u610F\u624E\u5B9E\u7684\u57FA\u7840\u4EF6\uFF0C\u800C\u4E0D\u662F\u70AB\u6280\u7684 Demo\u3002\u5927\u90E8\u5206\u65F6\u95F4\u6211\u5728\u667A\u80FD\u4F53\u4E0E\u73B0\u5B9E\u4E16\u754C\u4E4B\u95F4\u505A\u4E8B \u2014\u2014 LLM \u7F51\u5173\u3001\u53EF\u89C2\u6D4B\u5C42\u3001\u5F15\u5BFC\u6D41\u7A0B\uFF0C\u4EE5\u53CA\u4F60\u51CC\u6668\u4E24\u70B9\u5728 tmux \u91CC\u8DD1\u7684\u90A3\u4E2A\u5C0F\u4E1C\u897F\u3002",
      pillars: [
        {
          icon: "sparkles",
          title: "\u667A\u80FD\u4F53 & LLM \u57FA\u5EFA",
          body: "\u7ED9\u4EE3\u7801\u667A\u80FD\u4F53\u505A\u7684 Telegram \u524D\u7AEF\u3001\u667A\u80FD\u4F53\u96C6\u7FA4\u7684 K8s \u63A7\u5236\u9762\u3001AI \u7F51\u5173\u699C\u5355\u3002",
        },
        {
          icon: "terminal",
          title: "\u5F00\u53D1\u8005\u5DE5\u5177",
          body: "\u5728\u7EC8\u7AEF\u91CC\u7528\u5F97\u987A\u624B\u7684\u5C0F\u5DE5\u5177 \u2014\u2014 \u4F1A\u8BDD\u76D1\u63A7\u3001\u7F51\u7EDC\u8BCA\u65AD\u3001\u5B89\u88C5\u5F15\u5BFC\u811A\u672C\u3002",
        },
        {
          icon: "layers",
          title: "\u624B\u518C\u4E0E\u7ECF\u9A8C",
          body: "\u90A3\u4E9B\u6211\u8E29\u8FC7\u5751\u624D\u603B\u7ED3\u51FA\u6765\u7684\u505A\u6CD5\uFF0C\u5199\u4E0B\u6765\uFF0C\u8BA9\u4E0B\u4E00\u4E2A\u4EBA\u5C11\u8D70\u70B9\u5F2F\u8DEF\u3002",
        },
      ],
    },
    projects: {
      eyebrowLabel: "\u9879\u76EE",
      title: "\u4E00\u4EFD\u5C0F\u800C\u514B\u5236\u7684\u5F00\u6E90\u5DE5\u5177\u76EE\u5F55\u3002",
      body: "\u6309\u7528\u9014\u5206\u7EC4\u3002\u70B9\u51FB\u4EFB\u4E00\u5F20\u5361\u7247\u5373\u53EF\u8DF3\u5230 GitHub\u3002",
      docsChip: "\u6587\u6863",
      cardAria: (name: string) =>
        `\u5728 GitHub \u4E0A\u67E5\u770B ${name}\uFF08\u65B0\u6807\u7B7E\u9875\u6253\u5F00\uFF09`,
      starLabel: "Star",
      starAria: (name: string, count: number | null) =>
        count === null
          ? `\u5728 GitHub \u4E0A\u7ED9 ${name} \u70B9 Star\uFF08\u65B0\u6807\u7B7E\u9875\u6253\u5F00\uFF09`
          : `\u5728 GitHub \u4E0A\u7ED9 ${name} \u70B9 Star\uFF0C\u5F53\u524D ${count} \u661F\uFF08\u65B0\u6807\u7B7E\u9875\u6253\u5F00\uFF09`,
    },
    ui: {
      card: {
        live: {
          exploreList: "\u6D4F\u89C8\u699C\u5355",
          dailySignals: "\u6BCF\u65E5\u60C5\u62A5",
        },
        liveAria: (label: string, name: string) =>
          `${label} \u2014 \u6253\u5F00 ${name} \u7EBF\u4E0A\u7248\u672C\uFF08\u65B0\u6807\u7B7E\u9875\u6253\u5F00\uFF09`,
      },
    },
    mainProduct: {
      chip: "\u4E3B\u4EA7\u54C1",
      title: "OPC",
      tagline:
        "\u4E00\u4EBA\u516C\u53F8\u7684 Token \u52A0\u6CB9\u7AD9 + \u6BCF\u65E5\u51B3\u7B56\u60C5\u62A5\u3002",
      description:
        "\u4E00\u4EBA\u516C\u53F8\u7684\u6307\u6325\u4E2D\u5FC3\u3002AI \u60C5\u62A5\u3001Token \u7F51\u5173\u3001Agent \u8230\u961F\uFF0C\u5168\u5728\u4E00\u4E2A\u5730\u65B9\u3002",
      ctaPrimary: "\u6253\u5F00 opc.ren",
      ctaPrimaryAria: "\u6253\u5F00 opc.ren\uFF08\u65B0\u6807\u7B7E\u9875\u6253\u5F00\uFF09",
      ctaSecondary: "\u8BFB\u6BCF\u65E5\u60C5\u62A5",
      ctaSecondaryAria: "\u9605\u8BFB OPC \u6BCF\u65E5\u60C5\u62A5\uFF08\u65B0\u6807\u7B7E\u9875\u6253\u5F00\uFF09",
      currentlyBuilding: "刚发布：",
      currentlyBuildingLink: "create-opc-wiki v1.0 — 一行命令搭好本地 LLM Wiki,用 npx 安装。",
    },
    groups: {
      agents: {
        title: "\u667A\u80FD\u4F53 & LLM \u57FA\u5EFA",
        hint: "\u6211\u5927\u90E8\u5206\u65F6\u95F4\u90FD\u5728\u8FD9\u91CC \u2014\u2014 \u56F4\u7ED5\u81EA\u4E3B\u667A\u80FD\u4F53\u4E0E LLM \u7F51\u5173\u7684\u5DE5\u5177\u3002",
      },
      devtools: {
        title: "\u5F00\u53D1\u8005\u5DE5\u5177",
        hint: "\u7ED9\u7EC8\u7AEF\u548C\u65E5\u5E38\u5F00\u53D1\u5FAA\u73AF\u51C6\u5907\u7684\u5C0F\u800C\u950B\u5229\u7684\u5DE5\u5177\u3002",
      },
      fun: {
        title: "\u6D88\u9063\u4E4B\u4F5C",
        hint: "\u5468\u672B\u9879\u76EE\uFF0C\u4EE5\u53CA\u90A3\u4E9B\u6211\u5E0C\u671B\u65E9\u5C31\u5B58\u5728\u7684\u5C0F\u5DE5\u5177\u5305\u3002",
      },
    },
    upstream: {
      eyebrow: "\u4E0A\u6E38\u8D21\u732E",
      title: "\u6211\u5F80\u4E0A\u6E38\u63D0\u4EA4\u7684 Patch\u3002",
      body: "\u843D\u5728\u522B\u4EBA\u4ED3\u5E93\u91CC\u7684\u5DE5\u4F5C\u3002\u523B\u610F\u4FDD\u6301\u5C11 \u2014\u2014 \u6BCF\u4E00\u4E2A\u90FD\u8BA4\u771F\u505A\u3002",
      statusMerged: "\u5DF2\u5408\u5E76",
      openclaw: {
        mergedLine: "\u5DF2\u4E8E 2026 \u5E74 2 \u6708 10 \u65E5\u5408\u5E76",
        summary:
          "\u4E3A OpenClaw \u6DFB\u52A0\u81EA\u5B9A\u4E49 / \u672C\u5730 API \u5F15\u5BFC\u6D41\u7A0B\uFF08Ollama\u3001vLLM\u3001LocalAI \u6216\u4EFB\u610F OpenAI \u517C\u5BB9\u7AEF\u70B9\uFF09\u3002\u4F1A\u4ECE /models \u81EA\u52A8\u53D1\u73B0\u6A21\u578B\uFF0C\u5931\u8D25\u65F6\u56DE\u9000\u5230\u624B\u52A8\u8F93\u5165\uFF0C\u5E76\u5728\u4FDD\u5B58\u524D\u6821\u9A8C\u8FDE\u901A\u6027\u3002",
      },
      jackclaw: {
        mergedLine: "\u5DF2\u4E8E 2026 \u5E74 4 \u6708 11 \u65E5\u5408\u5E76",
        summary:
          "\u628A JackClawOS \u7684 AI \u56E2\u961F\u4ECE 3 \u4E2A\u901A\u7528\u8282\u70B9\u6269\u5C55\u5230 7 \u4E2A\u6709\u65B9\u6CD5\u8BBA\u7684\u8282\u70B9\u3002\u6BCF\u4E2A\u8282\u70B9\u7684 systemPrompt \u5305\u542B\u5B8C\u6574\u7684 gstack \u98CE\u683C\u5DE5\u4F5C\u6D41\uFF1A\u89D2\u8272\u5B9A\u4E49\u3001\u6838\u5FC3\u54F2\u5B66\u3001\u5206\u6B65\u6D41\u7A0B\u3001\u7ED3\u6784\u5316\u8F93\u51FA\u3001\u5B8C\u6210\u72B6\u6001\u534F\u8BAE\u3002",
      },
      litellm: {
        mergedLine: "已于 2026 年 4 月 25 日合并",
        summary:
          "在 LiteLLM 管理后台的 Add-Model 下拉里加上了 Z.AI（智谱）选项。后端早就支持 zai/* 模型（比如 zai/glm-4.5），但下拉用的是硬编码 enum，把 Z.AI 漏掉了。这个 PR 补上 enum 项、provider_map 映射、默认模型占位，附两个回归测试。",
      },
      netcatty: {
        mergedLine: "已于 2026 年 4 月 30 日合并",
        summary:
          "把 Netcatty SFTP 传输队列里残留的浏览器原生 tooltip 替换成共用的 Radix tooltip 组件，让重试 / 取消 / 调整列宽 / 展开折叠按钮也用上 App 的圆角样式。同步加了英文和简体中文的 i18n，并补了 SftpTransferItem 的测试。",
      },
      placeholder: "\u66F4\u591A\u4E0A\u6E38\u5DE5\u4F5C\uFF0C\u5F88\u5FEB\u4F1A\u843D\u5728\u8FD9\u91CC\u3002",
      cardAria: (project: string, pr: number) =>
        `${project} PR #${pr}\uFF08\u65B0\u6807\u7B7E\u9875\u6253\u5F00\uFF09`,
      viewPr: "\u67E5\u770B PR",
      viewPrAria: (project: string, pr: number) =>
        `\u5728 GitHub \u4E0A\u6253\u5F00 ${project} PR #${pr}\uFF08\u65B0\u6807\u7B7E\u9875\u6253\u5F00\uFF09`,
    },
    footer: {
      tagline:
        "\u6DF1\u5733\uFF0CAI-native \u5F00\u53D1\u8005\u81EA\u5EFA\u3002",
      elsewhere: "\u522B\u5904",
      thisSite: "\u8FD9\u4E2A\u7AD9\u70B9",
      links: {
        projects: "\u9879\u76EE",
        upstream: "\u4E0A\u6E38\u8D21\u732E",
        source: "GitHub \u6E90\u7801",
      },
      rights: "\u4FDD\u7559\u6240\u6709\u6743\u5229\u3002",
      credits: "\u7528 Astro \u00b7 Tailwind \u00b7 \u54C1\u5473 \u6784\u5EFA\u3002",
    },
    langToggle: {
      en: "EN",
      zh: "\u4E2D",
      ariaLabel: "\u8BED\u8A00",
      ariaEn: "Switch to English",
      ariaZh: "\u5207\u6362\u5230\u4E2D\u6587",
    },
    skip: "\u8DF3\u8F6C\u5230\u6B63\u6587",
  },
} as const;
