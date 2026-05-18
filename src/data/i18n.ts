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
      projects: "Playbook",
      contributions: "Contributions",
      contact: "Contact",
      githubAria: "GitHub profile",
    },
    hero: {
      badge: "AI-native dev \u00b7 Shenzhen",
      titleLine1: "Mack Ding. Shenzhen. Building OPC.",
      titleLine2: "Token gateway + daily decision intel for one-person companies.",
      sub: "Open source on GitHub, paid product at opc.ren. Built solo with Claude Code and Codex. Upstream PRs landing in OpenClaw, LiteLLM, and Netcatty.",
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
    playbook: {
      eyebrow: "AI coding playbook",
      kicker: "Most AI coding advice is fortune cookies.",
      title: "Here\u2019s what actually moves the needle after 2,000+ commits with Claude Code and Codex.",
      body: "Four rules. Each one comes from a weekend I lost. Steal them \u2014 they work in any stack, any agent.",
      steps: [
        {
          icon: "sparkles",
          title: "Make it state the assumptions",
          antiPattern: "The silent guess",
          body: "Models pick one interpretation and run. They never tell you. Before any non-trivial task, force a one-line answer to: \u201cWhat are you assuming about inputs, scope, and side effects?\u201d",
          example: "Cut my \u201cwait, that\u2019s not what I meant\u201d rewrites by ~40%. The 10 seconds it spends restating the task saves 20 minutes of undo.",
        },
        {
          icon: "layers",
          title: "Verify the effect, not the command",
          antiPattern: "Exit-code zero theatre",
          body: "`pnpm build` returning 0 doesn\u2019t mean the page loads. `git push` succeeding doesn\u2019t mean the live site updated. Every action needs a separate check that reads the actual result.",
          example: "I keep a one-liner per script: build \u2192 grep dist for the expected string; deploy \u2192 curl the URL for the new marker. No grep, no green.",
        },
        {
          icon: "terminal",
          title: "Keep the diff smaller than the chat",
          antiPattern: "The 200-line drift",
          body: "Agents love to \u201cimprove\u201d adjacent code. That\u2019s how a 1-line bug fix becomes a 17-file PR you can\u2019t review. Every changed line must trace to the original ask. If it doesn\u2019t, revert it.",
          example: "Hard rule in my CLAUDE.md: `git diff --stat` after every step. If files changed > files mentioned, stop and prune.",
        },
        {
          icon: "layers",
          title: "Treat context like RAM, not disk",
          antiPattern: "One mega-session",
          body: "Long sessions rot. The model forgets early decisions, drifts goals, and contaminates new tasks with old patterns. Persist decisions to files. Run exploration in subagents. Start fresh sessions ruthlessly.",
          example: "Rule of thumb: one task = one session. If a task needs >20 tool calls, it\u2019s actually 3 tasks pretending to be one.",
        },
      ],
      nobodyTellsYouLabel: "What nobody tells you",
      nobodyTellsYou: "The bottleneck is not the model. It\u2019s your verification loop. The teams shipping fast with AI aren\u2019t prompt geniuses \u2014 they\u2019re obsessed with how to check the work in under 60 seconds.",
      credit: "Forged on real PRs. Inspired by Karpathy\u2019s notes, claude-context-health, and oh-my-codex.",
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
        projects: "Playbook",
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
      projects: "\u624B\u518C",
      contributions: "\u4E0A\u6E38\u8D21\u732E",
      contact: "\u8054\u7CFB",
      githubAria: "GitHub \u4E3B\u9875",
    },
    hero: {
      badge: "AI-native \u00b7 \u6DF1\u5733",
      titleLine1: "Mack Ding。深圳。在造 OPC。",
      titleLine2: "给一人公司的 Token 网关 + 每日决策情报。",
      sub: "开源在 GitHub。付费产品在 opc.ren。\n一个人，配 Claude Code 和 Codex 一起 ship。\n上游 PR 已合入 OpenClaw、LiteLLM、Netcatty。",
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
    playbook: {
      eyebrow: "AI 编程手册",
      kicker: "大部分 AI 编程建议都是「鸡汤」。",
      title: "和 Claude Code、Codex 一起提交 2000+ commit 之后，真正有用的就这几条。",
      body: "四条规则。\n每一条都是我熬过的一个周末换来的。\n可以直接抄走 —— 不挑技术栈、不挑 Agent。",
      steps: [
        {
          icon: "sparkles",
          title: "逼它先说出假设",
          antiPattern: "沉默的猜测",
          body: "模型会自己挑一种解释，然后闷头跑。\n它从不告诉你。\n任何不简单的任务，先强制它一句话回答：「你对输入、范围和副作用做了哪些假设？」",
          example: "我「不是这意思，重写」的次数减少了大约 40%。\n它花 10 秒复述任务，省下我 20 分钟的撤回。",
        },
        {
          icon: "layers",
          title: "验证效果，不要验证命令",
          antiPattern: "退出码 0 的剧场",
          body: "`pnpm build` 退出 0，不代表页面能打开。\n`git push` 成功，不代表线上更新了。\n每个动作都要有一个独立的检查，去看真实的副作用。",
          example: "我给每个脚本都配一个 one-liner。\nbuild → grep dist 里的预期字符串。\ndeploy → curl 线上 URL 找新标记。\ngrep 不到，就不算绿。",
        },
        {
          icon: "terminal",
          title: "让 diff 比对话还短",
          antiPattern: "200 行漂移",
          body: "Agent 喜欢顺手「优化」旁边的代码。\n于是一个 1 行的 bug 修复，变成一个 17 文件的 PR，没人 review 得动。\n每一行改动都要能追溯到原始需求，否则回滚。",
          example: "我 CLAUDE.md 里的硬规则：每一步之后 `git diff --stat`。\n改动的文件数 > 提到的文件数，立刻停手，剪掉多余的。",
        },
        {
          icon: "layers",
          title: "把上下文当内存用，不是硬盘",
          antiPattern: "一个超长会话",
          body: "长会话会腐烂。\n模型忘掉早期决定，偏离原始目标，把旧项目的模式带到新项目里。\n把决定写进文件，探索性任务交给 subagent，新会话开得狠一点。",
          example: "经验法则：一个任务 = 一个会话。\n需要超过 20 次工具调用的，其实是 3 个任务伪装成 1 个。",
        },
      ],
      nobodyTellsYouLabel: "没人告诉你的真相",
      nobodyTellsYou: "瓶颈不是模型，是你的验证回路。\n用 AI 跑得快的团队，不是 prompt 高手。\n他们偏执地优化一件事：怎么在 60 秒内验完一次改动。",
      credit: "在真实 PR 里淬出来的。灵感来自 Karpathy 的笔记、claude-context-health、oh-my-codex。",
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
        projects: "\u624B\u518C",
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
