export interface Skill {
  rank: string;
  title: string;
  desc: string;
  tags: string[];
  category: string;
  color: string;
  link: string;
  author: string;
  installPackage?: string;
}

export const skills: Skill[] = [
  {
    rank: "01",
    title: "Vibe Coding",
    desc: "让 AI 帮你构建沉浸式网站的模板",
    tags: ["Claude", "Prompt"],
    category: "技巧",
    color: "#B0623F",
    link: "https://github.com/anthropics/claude-code",
    author: "anthropics",
  },
  {
    rank: "02",
    title: "Tailwind CSS",
    desc: "渐变、阴影、动画等常用工具",
    tags: ["CSS", "Tailwind"],
    category: "技巧",
    color: "#AB8073",
    link: "https://github.com/tailwindlabs/tailwindcss",
    author: "tailwindlabs",
  },
  {
    rank: "03",
    title: "AI 角色扮演框架",
    desc: "构建专业 AI 助手的角色设定",
    tags: ["AI", "Prompt"],
    category: "原理",
    color: "#57321E",
    link: "https://github.com/MelodyTung888/learning-library",
    author: "MelodyTung888",
  },
  {
    rank: "04",
    title: "Framer Motion",
    desc: "精美动效代码片段",
    tags: ["React", "Animation"],
    category: "技巧",
    color: "#B0623F",
    link: "https://github.com/framer/motion",
    author: "framer",
  },
  {
    rank: "05",
    title: "Next.js App Router",
    desc: "Next.js 14 开发模式与架构",
    tags: ["Next.js", "React"],
    category: "深度进阶",
    color: "#AB8073",
    link: "https://github.com/vercel/next.js",
    author: "vercel",
  },
  {
    rank: "06",
    title: "TypeScript 技巧",
    desc: "高级类型技巧",
    tags: ["TypeScript", "DX"],
    category: "技巧",
    color: "#57321E",
    link: "https://github.com/microsoft/TypeScript",
    author: "microsoft",
  },
  {
    rank: "07",
    title: "AI 写作提示词",
    desc: "各类 AI 写作场景模板",
    tags: ["AI", "Writing"],
    category: "技巧",
    color: "#B0623F",
    link: "https://github.com/MelodyTung888/learning-library",
    author: "MelodyTung888",
  },
  {
    rank: "08",
    title: "Git 协作流程",
    desc: "团队 Git 工作流",
    tags: ["Git", "Team"],
    category: "原理",
    color: "#AB8073",
    link: "https://github.com/git-guides",
    author: "github",
  },
  {
    rank: "09",
    title: "CLI 工具开发",
    desc: "Node.js/Go 构建命令行",
    tags: ["CLI", "Node.js"],
    category: "深度进阶",
    color: "#57321E",
    link: "https://github.com/tj/node-commander",
    author: "tj",
  },
  {
    rank: "10",
    title: "API 设计规范",
    desc: "RESTful API 最佳实践",
    tags: ["API", "Backend"],
    category: "原理",
    color: "#B0623F",
    link: "https://github.com/Microsoft/api-guidelines",
    author: "Microsoft",
  },
  {
    rank: "11",
    title: "Python 自动化脚本",
    desc: "日常办公自动化模板",
    tags: ["Python", "Automation"],
    category: "有点儿意思",
    color: "#AB8073",
    link: "https://github.com/psf/requests",
    author: "psf",
  },
  {
    rank: "12",
    title: "数据可视化指南",
    desc: "图表设计最佳实践",
    tags: ["Data", "Visualization"],
    category: "原理",
    color: "#57321E",
    link: "https://github.com/d3/d3",
    author: "d3",
  },
];

export const skillCategories = ['All', '技巧', '原理', '有点儿意思', '深度进阶'];
