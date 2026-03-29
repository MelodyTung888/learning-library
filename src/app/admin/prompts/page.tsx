"use client";

import DataEditor from "@/components/admin/DataEditor";
import { prompts, promptsCategories, type Prompt } from "@/data/prompts";

const fields = [
  { key: "title", label: "标题", type: "text" as const, placeholder: "输入标题" },
  { key: "desc", label: "副标题", type: "text" as const, placeholder: "输入简短描述" },
  { key: "category", label: "分类", type: "select" as const, options: promptsCategories.filter(c => c !== "All") },
  { key: "tags", label: "标签", type: "tags" as const, placeholder: "标签1, 标签2" },
  { key: "content", label: "内容", type: "textarea" as const, placeholder: "输入 Prompt 内容" },
];

export default function PromptsAdminPage() {
  return (
    <DataEditor
      title="Prompts"
      description="管理和编辑你的提示词收藏"
      items={prompts}
      fields={fields}
      filePath="src/data/prompts.ts"
      itemTemplate={() => ({
        title: "",
        desc: "",
        category: "AI",
        tags: [],
        content: ""
      })}
    />
  );
}
