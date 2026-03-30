"use client";

import DataEditor from "@/components/admin/DataEditor";
import { skills, skillsCategories, type Skill } from "@/data/skills";

const fields = [
  { key: "rank", label: "排名", type: "text" as const, placeholder: "01" },
  { key: "title", label: "标题", type: "text" as const, placeholder: "技能名称" },
  { key: "desc", label: "描述", type: "text" as const, placeholder: "简短描述" },
  { key: "category", label: "分类", type: "select" as const, options: skillsCategories.filter(c => c !== "All") },
  { key: "link", label: "GitHub链接", type: "text" as const, placeholder: "https://github.com/username/repo" },
  { key: "author", label: "GitHub作者", type: "text" as const, placeholder: "username" },
  { key: "installPackage", label: "安装包链接", type: "text" as const, placeholder: "选填，点击可下载安装包" },
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
        category: "高星推荐",
        link: "https://github.com/",
        author: "",
        installPackage: ""
      })}
    />
  );
}
