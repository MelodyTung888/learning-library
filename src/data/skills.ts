export interface Skill {
  rank: string;
  title: string;
  desc: string;
  category: string;
  link: string;
  author: string;
  installPackage?: string;
}

export const skills: Skill[] = [
  {
    "rank": "01",
    "title": "Anthropic官方Skills",
    "desc": "Claude Code母公司，最强模型之一，每一个skill都挺值得装",
    "category": "官方认证",
    "link": "https://github.com/anthropics/skills",
    "author": "anthropics"
  },
  {
    "rank": "02",
    "title": "Skill-Creator",
    "desc": "技能之母，3月刚迎来史诗级更新，必装",
    "category": "养虾必备",
    "link": "https://github.com/anthropics/skills/tree/main/skills/skill-creator",
    "author": "anthropics"
  },
  {
    "rank": "03",
    "title": "Skill-Vetter",
    "desc": "保命skill，你的安全门卫&杀毒软件",
    "category": "养虾必备",
    "link": "https://clawhub.ai/spclaudehome/skill-vetter",
    "author": "clawhub"
  },
  {
    "rank": "04",
    "title": "Agent-browser",
    "desc": "让AI可以自己操作网页，自动导航、点击、输入、截图，完成网页操作",
    "category": "高星推荐",
    "link": "https://github.com/vercel-labs/agent-browser",
    "author": "vercel-labs"
  },
  {
    "rank": "05",
    "title": "Self-improving-agent",
    "desc": "让你的AI可以从每一次的错误里学习，自我纠正、总结经验教训，持续迭代进化",
    "category": "高星推荐",
    "link": "https://github.com/vercel/next.js",
    "author": "vercel"
  },
  {
    "rank": "06",
    "title": "Superpowers",
    "desc": "你的一站式AI编程助手，从头脑风暴、开发测试、到部署上线，一人公司做项目必备",
    "category": "高星推荐",
    "link": "https://github.com/obra/superpowers",
    "author": "obra"
  },
  {
    "rank": "07",
    "title": "Frontend-slides",
    "desc": "根据你的主题、受众，帮你美化PPT，形成可以在线互动的PPT版本",
    "category": "有点儿意思",
    "link": "https://github.com/zarazhangrui/frontend-slides",
    "author": "zarazhangrui"
  },
  {
    "rank": "08",
    "title": "Codebase to Course",
    "desc": "让AI把项目代码变成可交互的课程，用小白能理解的方式解释每个步骤",
    "category": "有点儿意思",
    "link": "https://github.com/zarazhangrui/codebase-to-course",
    "author": "zarazhangrui"
  }
];

export const skillsCategories = ["All","养虾必备","官方认证","高星推荐","有点儿意思"];
