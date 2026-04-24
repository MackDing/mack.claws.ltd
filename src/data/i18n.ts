export type Lang = "en" | "zh";

export const i18n = {
  en: {
    htmlLang: "en",
    meta: {
      title:
        "Mack Ding — open-source tools for AI agents, LLM gateways, and dev productivity",
      description:
        "Mack Ding is a programmer in Shenzhen. I build small, focused open-source tools around AI agents, LLM gateways, and developer productivity.",
    },
    nav: {
      projects: "Projects",
      contributions: "Contributions",
      contact: "Contact",
      githubAria: "GitHub profile",
    },
    hero: {
      badge: "Building in Shenzhen",
      titleLine1: "Hi, I\u2019m Mack.",
      titleLine2: "I build small, honest tools",
      titleLine3a: "for",
      titleLine3b: "AI agents",
      titleLine3c: "and",
      titleLine3d: "developers",
      sub: "Programmer based in Shenzhen. Mostly open source, mostly around LLM gateways, agent tooling, and the long-running developer loop. This is the index.",
      ctaGithub: "My GitHub",
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
      mergedLine: "Merged Feb 10, 2026",
      prSummary:
        "Added a Custom / Local API onboarding flow to OpenClaw (Ollama, vLLM, LocalAI, any OpenAI-compatible endpoint). Auto-discovers models from /models, falls back to manual entry, and verifies connectivity before saving.",
      placeholder: "More upstream work lands here soon.",
      cardAria: (project: string, pr: number) =>
        `${project} PR #${pr} (opens in new tab)`,
    },
    footer: {
      tagline:
        "Built in Shenzhen. If you\u2019re running any of these and something breaks, the best path is a GitHub issue \u2014 I read every one.",
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
        "Mack Ding\uFF0C\u5750\u6807\u6DF1\u5733\u7684\u7A0B\u5E8F\u5458\u3002\u56F4\u7ED5 AI \u667A\u80FD\u4F53\u3001LLM \u7F51\u5173\u4E0E\u5F00\u53D1\u8005\u6548\u7387\uFF0C\u6253\u9020\u5C0F\u800C\u4E13\u6CE8\u7684\u5F00\u6E90\u5DE5\u5177\u3002",
    },
    nav: {
      projects: "\u9879\u76EE",
      contributions: "\u4E0A\u6E38\u8D21\u732E",
      contact: "\u8054\u7CFB",
      githubAria: "GitHub \u4E3B\u9875",
    },
    hero: {
      badge: "\u5728\u6DF1\u5733\u6784\u5EFA",
      titleLine1: "\u4F60\u597D\uFF0C\u6211\u662F Mack\u3002",
      titleLine2: "\u6211\u5728\u505A\u5C0F\u800C\u8BDA\u5B9E\u7684\u5DE5\u5177",
      titleLine3a: "\u4E3A",
      titleLine3b: "AI \u667A\u80FD\u4F53",
      titleLine3c: "\u4E0E",
      titleLine3d: "\u5F00\u53D1\u8005",
      sub: "\u5750\u6807\u6DF1\u5733\u7684\u7A0B\u5E8F\u5458\u3002\u4EE5\u5F00\u6E90\u4E3A\u4E3B\uFF0C\u4E3B\u8981\u56F4\u7ED5 LLM \u7F51\u5173\u3001\u667A\u80FD\u4F53\u5DE5\u5177\uFF0C\u4EE5\u53CA\u5F00\u53D1\u8005\u4E00\u6574\u5929\u90FD\u8DD1\u5728\u540E\u53F0\u7684\u90A3\u4E9B\u5C0F\u4E1C\u897F\u3002\u8FD9\u91CC\u662F\u76EE\u5F55\u3002",
      ctaGithub: "\u6211\u7684 GitHub",
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
      mergedLine: "\u5DF2\u4E8E 2026 \u5E74 2 \u6708 10 \u65E5\u5408\u5E76",
      prSummary:
        "\u4E3A OpenClaw \u6DFB\u52A0\u81EA\u5B9A\u4E49 / \u672C\u5730 API \u5F15\u5BFC\u6D41\u7A0B\uFF08Ollama\u3001vLLM\u3001LocalAI \u6216\u4EFB\u610F OpenAI \u517C\u5BB9\u7AEF\u70B9\uFF09\u3002\u4F1A\u4ECE /models \u81EA\u52A8\u53D1\u73B0\u6A21\u578B\uFF0C\u5931\u8D25\u65F6\u56DE\u9000\u5230\u624B\u52A8\u8F93\u5165\uFF0C\u5E76\u5728\u4FDD\u5B58\u524D\u6821\u9A8C\u8FDE\u901A\u6027\u3002",
      placeholder: "\u66F4\u591A\u4E0A\u6E38\u5DE5\u4F5C\uFF0C\u5F88\u5FEB\u4F1A\u843D\u5728\u8FD9\u91CC\u3002",
      cardAria: (project: string, pr: number) =>
        `${project} PR #${pr}\uFF08\u65B0\u6807\u7B7E\u9875\u6253\u5F00\uFF09`,
    },
    footer: {
      tagline:
        "\u5728\u6DF1\u5733\u6784\u5EFA\u3002\u5982\u679C\u4F60\u5728\u7528\u6211\u7684\u5DE5\u5177\u6B63\u597D\u9047\u5230\u95EE\u9898\uFF0C\u6700\u76F4\u63A5\u7684\u65B9\u5F0F\u662F\u5F00\u4E2A GitHub Issue \u2014\u2014 \u6BCF\u4E00\u4E2A\u6211\u90FD\u4F1A\u770B\u3002",
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
