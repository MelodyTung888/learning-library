"use client";

import DataEditor from "@/components/admin/DataEditor";
import { skills, skillCategories, type Skill } from "@/data/skills";

const fields = [
  { key: "rank", label: "排名", type: "text" as const, placeholder: "01" },
  { key: "title", label: "标题", type: "text" as const, placeholder: "技能名称" },
  { key: "desc", label: "描述", type: "text" as const, placeholder: "简短描述" },
  { key: "category", label: "分类", type: "select" as const, options: skillCategories.filter(c => c !== "All") },
  { key: "tags", label: "标签", type: "tags" as const, placeholder: "标签1, 标签2" },
  { key: "link", label: "GitHub链接", type: "text" as const, placeholder: "https://github.com/username/repo" },
  { key: "author", label: "GitHub作者", type: "text" as const, placeholder: "username" },
  { key: "color", label: "颜色", type: "color" as const },
];

export default function SkillsAdminPage() {
  return (
    <DataEditor
      title="Skills"
      description="管理和编辑你的技能列表"
      items={skills}
      fields={fields}
      filePath="src/data/skills.ts"
      itemTemplate={() => ({
        rank: "",
        title: "",
        desc: "",
        category: "前端",
        tags: [],
        color: "#B0623F",
        link: "https://github.com/",
        author: ""
      })}
    />
  );
}
