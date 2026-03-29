export interface Prompt {
  title: string;
  tags: string[];
  content: string;
  category: string;
}

export const prompts: Prompt[] = [
  {
    title: "Vibe Coding 网站生成",
    tags: ["Web", "Frontend"],
    content: `你是一位世界级的网页设计师和开发者。请帮我创建一个个人网站...

要求：
1. 三种主题模式
2. 沉浸式背景动效
3. 响应式设计`,
    category: "前端",
  },
  {
    title: "AI 角色设定框架",
    tags: ["AI", "Prompt"],
    content: `你是一位[专业领域]专家，擅长[核心技能]...

特点：
- 表达风格：[友好/专业]
- 解决问题的方式`,
    category: "AI",
  },
  {
    title: "技术博客写作",
    tags: ["Writing", "Technical"],
    content: `请帮我写一篇技术博客...

结构：
1. Hook 开头
2. 核心概念解释
3. 实战代码
4. 总结升华`,
    category: "写作",
  },
  {
    title: "播客转文章",
    tags: ["Content", "Transform"],
    content: `将播客内容转换为一篇结构清晰的文章...

关键要点：
- 保留对话中的金句
- 解释专业术语
- 加入背景信息`,
    category: "内容",
  },
  {
    title: "代码审查助手",
    tags: ["Code", "Review"],
    content: `请帮我审查以下代码...

关注点：
1. 潜在的 bug
2. 性能问题
3. 安全漏洞`,
    category: "工程",
  },
  {
    title: "产品需求分析",
    tags: ["Product", "Analysis"],
    content: `帮我分析这个产品需求...

维度：
1. 用户价值
2. 技术可行性
3. 商业价值`,
    category: "产品",
  },
];

export const promptCategories = ['All', '前端', 'AI', '写作', '内容', '工程', '产品'];
