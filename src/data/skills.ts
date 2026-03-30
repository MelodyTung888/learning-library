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
    "desc": "所有技能之母、直接口喷帮你生成新技能。3月刚迎来史诗级更新，必装技能",
    "category": "养虾必备",
    "link": "https://github.com/anthropics/skills/tree/main/skills/skill-creator",
    "author": "anthropics",
    "installPackage": "/installs/skill-creator.zip"
  },
  {
    "rank": "03",
    "title": "Skill-Vetter",
    "desc": "保命skill，你的安全门卫&杀毒软件",
    "category": "养虾必备",
    "link": "https://clawhub.ai/spclaudehome/skill-vetter",
    "author": "clawhub",
    "installPackage": "/installs/skill-vetter.zip"
  },
  {
    "rank": "04",
    "title": "Agent-browser",
    "desc": "让AI可以自己操作网页，自动导航、点击、输入、截图，完成网页操作",
    "category": "高星推荐",
    "link": "https://github.com/vercel-labs/agent-browser",
    "author": "vercel-labs",
    "installPackage": "/installs/agent-browser.zip"
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
    "author": "Obra"
  },
  {
    "rank": "07",
    "title": "Gstack",
    "desc": "YC CEO硅谷技能包，一个人+AI=一支开发团队。GitHub 48小时破万星，13个专业技能、50天50万行代码",
    "category": "高星推荐",
    "link": "https://github.com/garrytan/gstack",
    "author": "garrytan",
    "installPackage": "/installs/gstack.zip"
  },
  {
    "rank": "08",
    "title": "Frontend-slides",
    "desc": "根据你的主题、受众，帮你美化PPT，形成可以在线互动的PPT版本",
    "category": "有点儿意思",
    "link": "https://github.com/zarazhangrui/frontend-slides",
    "author": "Zarazhangrui",
    "installPackage": "/installs/frontend-slides.zip"
  },
  {
    "rank": "09",
    "title": "Codebase to Course",
    "desc": "让AI把项目代码变成可交互的课程，用小白能理解的方式解释每个步骤",
    "category": "有点儿意思",
    "link": "https://github.com/zarazhangrui/codebase-to-course",
    "author": "Zarazhangrui",
    "installPackage": "/installs/codebase-to-course.zip"
  }
];

export const skillsCategories = ["All","官方认证","养虾必备","高星推荐","有点儿意思"];