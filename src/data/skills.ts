export interface Skill {
  rank: string;
  title: string;
  desc: string;
  category: string;
  link: string;
  author: string;
}

export const skills: Skill[] = [
  {
    "rank": "01",
    "title": "Anthropic官方Skills",
    "desc": "Claude Code母公司、最强模型之一，每一个skill都挺值得装",
    "category": "技巧",
    "link": "https://github.com/anthropics/skills",
    "author": "Anthropics"
  },
  {
    "rank": "02",
    "title": "Skill-Creator",
    "desc": "技能之母，口喷帮你新建技能。3月刚迎来史诗级更新，必装~",
    "category": "原理",
    "link": "https://github.com/anthropics/skills/tree/main/skills/skill-creator",
    "author": "Anthropic"
  },
  {
    "rank": "03",
    "title": "Skill-Vetter",
    "desc": "保命Skill，每一只小龙虾第一个应该安装的技能，你的安全门卫&杀毒软件",
    "category": "原理",
    "link": "https://clawhub.ai/spclaudehome/skill-vetter",
    "author": "Clawhub"
  },
  {
    "rank": "04",
    "title": "Agent-browser",
    "desc": "让AI可以自己操作网页，自动导航、点击、输入、截图，完成网页操作",
    "category": "技巧",
    "link": "https://github.com/vercel-labs/agent-browser",
    "author": "Vercel-labs"
  },
  {
    "rank": "05",
    "title": "Self-improving-agent",
    "desc": "让你的AI可以从每一次的错误里学习，自我纠正、总结经验教训，持续迭代进化",
    "category": "深度进阶",
    "link": "https://github.com/vercel/next.js",
    "author": "vercel"
  },
  {
    "rank": "06",
    "title": "TypeScript 技巧",
    "desc": "高级类型技巧",
    "category": "技巧",
    "link": "https://github.com/microsoft/TypeScript",
    "author": "microsoft"
  },
  {
    "rank": "07",
    "title": "AI 写作提示词",
    "desc": "各类 AI 写作场景模板",
    "category": "技巧",
    "link": "https://github.com/MelodyTung888/learning-library",
    "author": "MelodyTung888"
  },
  {
    "rank": "08",
    "title": "Git 协作流程",
    "desc": "团队 Git 工作流",
    "category": "原理",
    "link": "https://github.com/git-guides",
    "author": "github"
  },
  {
    "rank": "09",
    "title": "CLI 工具开发",
    "desc": "Node.js/Go 构建命令行",
    "category": "深度进阶",
    "link": "https://github.com/tj/node-commander",
    "author": "tj"
  },
  {
    "rank": "10",
    "title": "API 设计规范",
    "desc": "RESTful API 最佳实践",
    "category": "原理",
    "link": "https://github.com/Microsoft/api-guidelines",
    "author": "Microsoft"
  },
  {
    "rank": "11",
    "title": "Python 自动化脚本",
    "desc": "日常办公自动化模板",
    "category": "有点儿意思",
    "link": "https://github.com/psf/requests",
    "author": "psf"
  },
  {
    "rank": "12",
    "title": "数据可视化指南",
    "desc": "图表设计最佳实践",
    "category": "原理",
    "link": "https://github.com/d3/d3",
    "author": "d3"
  }
];

export const skillsCategories = ["All","技巧","原理","深度进阶","有点儿意思"];