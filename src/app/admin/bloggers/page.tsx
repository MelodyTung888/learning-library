"use client";

import DataEditor from "@/components/admin/DataEditor";
import { bloggers, bloggerCategories, type Blogger } from "@/data/bloggers";

const fields = [
  { key: "initials", label: "缩写", type: "text" as const, placeholder: "AK" },
  { key: "name", label: "姓名", type: "text" as const, placeholder: "姓名" },
  { key: "platform", label: "平台描述", type: "text" as const, placeholder: "简介" },
  { key: "category", label: "分类", type: "select" as const, options: bloggerCategories.filter(c => c !== "All") },
  { key: "color", label: "颜色", type: "color" as const },
  { key: "url", label: "主页链接", type: "text" as const, placeholder: "https://x.com/..." },
];

export default function BloggersAdminPage() {
  return (
    <DataEditor
      title="Bloggers"
      description="管理和编辑你关注的博主列表"
      items={bloggers}
      fields={fields}
      filePath="src/data/bloggers.ts"
      itemTemplate={() => ({
        initials: "",
        name: "",
        platform: "",
        category: "AI",
        color: "#B0623F",
        url: "https://x.com/"
      })}
    />
  );
}
