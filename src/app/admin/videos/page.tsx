"use client";

import DataEditor from "@/components/admin/DataEditor";
import { videos, videoCategories, type Video } from "@/data/videos";

const fields = [
  { key: "title", label: "标题", type: "text" as const, placeholder: "视频标题" },
  { key: "author", label: "作者", type: "text" as const, placeholder: "作者/演讲者" },
  { key: "category", label: "分类", type: "select" as const, options: videoCategories.filter(c => c !== "All") },
  { key: "duration", label: "时长", type: "text" as const, placeholder: "如：10:30" },
  { key: "desc", label: "简介", type: "text" as const, placeholder: "简短描述" },
  { key: "url", label: "视频链接", type: "text" as const, placeholder: "YouTube URL" },
  { key: "thumbnail", label: "缩略图", type: "text" as const, placeholder: "YouTube 缩略图 URL" },
];

export default function VideosAdminPage() {
  return (
    <DataEditor
      title="Videos"
      description="管理和编辑你的视频收藏"
      items={videos}
      fields={fields}
      filePath="src/data/videos.ts"
      itemTemplate={() => ({
        title: "",
        author: "",
        category: "Product",
        duration: "",
        desc: "",
        url: "https://www.youtube.com/watch?v=",
        thumbnail: "https://img.youtube.com/vi/[video_id]/maxresdefault.jpg"
      })}
    />
  );
}
