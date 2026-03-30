# Melody's Learning Library - 项目交接文档

> 最后更新：2026-03-30 部署验证

---

## 一、项目概述

**网站名称**：Melody's Learning Library
**在线地址**：https://learning-library-gamma.vercel.app
**GitHub 仓库**：https://github.com/MelodyTung888/learning-library

**定位**：个人 AI 学习资源导航站，收录 Prompts、Skills、Bloggers、Videos、Podcasts 等五大板块资源。

---

## 二、技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 14 (App Router) |
| 语言 | TypeScript |
| 样式 | Tailwind CSS + CSS Variables |
| 动画 | Framer Motion |
| 部署 | Vercel (自动部署) |
| 数据存储 | GitHub 仓库 (通过 Admin 后台提交) |

---

## 三、项目结构

```
0329陶艺风/
├── src/
│   ├── app/
│   │   ├── page.tsx              # 首页（包含所有板块组件）
│   │   ├── globals.css           # 全局样式
│   │   ├── layout.tsx           # 根布局
│   │   └── admin/               # 管理后台
│   │       ├── page.tsx         # Admin 首页
│   │       ├── prompts/         # Prompts 管理
│   │       ├── skills/          # Skills 管理
│   │       ├── bloggers/         # Bloggers 管理
│   │       ├── videos/          # Videos 管理
│   │       └── podcasts/        # Podcasts 管理
│   ├── components/admin/        # Admin 组件
│   │   ├── DataEditor.tsx       # 数据编辑器（通用）
│   │   └── Settings.tsx         # GitHub 设置
│   ├── data/                    # 数据文件（核心内容）
│   │   ├── prompts.ts
│   │   ├── skills.ts
│   │   ├── bloggers.ts
│   │   ├── videos.ts
│   │   └── podcasts.ts
│   └── lib/
│       └── github.ts            # GitHub API 提交工具
├── public/                      # 静态资源
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## 四、数据文件格式

### Prompts（提示词）
```typescript
interface Prompt {
  title: string;       // 标题
  desc: string;         // 副标题/描述
  tags: string[];      // 标签（保留但前台不显示）
  content: string;     // Prompt 内容
  category: string;     // 分类：技巧|原理|有点儿意思|深度进阶
}
```

### Skills（技能）
```typescript
interface Skill {
  rank: string;        // 排名：01, 02...
  title: string;       // 标题
  desc: string;        // 描述
  tags: string[];      // 标签（保留但前台不显示）
  category: string;     // 分类：技巧|原理|有点儿意思|深度进阶
  color: string;       // 颜色（hex）
  link: string;        // GitHub 链接
  author: string;       // GitHub 作者名（用于获取头像）
  installPackage?: string; // 安装包下载链接（选填）
}
```

### Bloggers、Videos、Podcasts
各数据接口定义在对应的 data 文件中，结构类似。

---

## 五、管理后台使用

**访问地址**：https://learning-library-gamma.vercel.app/admin

### 首次配置
1. 进入 Admin 页面的「设置」
2. 填写 GitHub Personal Access Token（需要有 repo 权限）
3. 填写仓库地址，格式：`username/repo`
4. 保存后即可使用各模块的编辑功能

### 数据编辑流程
1. 选择要编辑的模块（Prompts/Skills 等）
2. 点击「添加」或点击已有项目的「编辑」
3. 填写/修改字段
4. 点击「发布到线上」—— 自动提交到 GitHub
5. Vercel 检测到 GitHub 更新，自动重新部署

### 重要提示
- 每次修改后必须点击「发布到线上」才会生效
- 发布后 Vercel 会在 1-2 分钟内自动部署
- 如果 Vercel 构建失败（报错），需要本地修复后重新推送

---

## 六、本地开发

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 本地构建验证（推送前必做）
npm run build
```

---

## 七、部署流程

### 自动部署（推荐）
1. 代码推送到 GitHub main 分支
2. Vercel 自动检测到更新
3. 自动构建并部署

### 手动触发部署
1. 登录 https://vercel.com/dashboard
2. 选择 `learning-library-gamma` 项目
3. 点击 Deployments → 手动触发

### 推送前检查清单
1. ✅ 本地 `npm run build` 通过
2. ✅ 无 TypeScript 错误
3. ✅ 无 linting 错误
4. ✅ 提交到 GitHub

---

## 八、常见问题

### Q: 网站没有更新？
1. 检查 Vercel 部署状态
2. 检查 GitHub 是否有新提交
3. 手动触发 Vercel 重新部署

### Q: Vercel 构建失败？
1. 查看 Vercel Logs 中的错误信息
2. 本地运行 `npm run build` 检查是否有同样错误
3. 修复后重新推送

### Q: Admin 无法发布到线上？
1. 检查 GitHub Token 是否有效
2. 检查仓库地址格式是否正确
3. 检查 Token 是否有 repo 写入权限

---

## 九、联系方式

- GitHub: MelodyTung888
- 网站: https://learning-library-gamma.vercel.app

---

*此文档由 Claude Code 自动生成*
