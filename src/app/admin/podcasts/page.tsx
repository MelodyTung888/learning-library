"use client";

import DataEditor from "@/components/admin/DataEditor";
import { podcasts, podcastCategories, type Podcast } from "@/data/podcasts";

const fields = [
  { key: "emoji", label: "图标", type: "text" as const, placeholder: "🎙️" },
  { key: "title", label: "标题", type: "text" as const, placeholder: "播客名称" },
  { key: "author", label: "作者", type: "text" as const, placeholder: "作者/主播" },
  { key: "category", label: "分类", type: "select" as const, options: podcastCategories.filter(c => c !== "All") },
  { key: "desc", label: "简介", type: "text" as const, placeholder: "简短描述" },
  { key: "url", label: "链接", type: "text" as const, placeholder: "播客链接" },
];

export default function PodcastsAdminPage() {
  return (
    <DataEditor
      title="Podcasts"
      description="管理和编辑你的播客收藏"
      items={podcasts}
      fields={fields}
      filePath="src/data/podcasts.ts"
      itemTemplate={() => ({
        emoji: "🎙️",
        title: "",
        author: "",
        category: "AI",
        desc: "",
        url: "https://"
      })}
    />
  );
}
