export interface Podcast {
  emoji: string;
  title: string;
  author: string;
  desc: string;
  category: string;
  url: string;
}

export const podcasts: Podcast[] = [
  {
    emoji: "🎙️",
    title: "无人知晓",
    author: "小宇宙",
    desc: "每期邀请一位嘉宾，聊聊被低估的人生",
    category: "成长",
    url: "https://www.xiaoyuzhoufm.com/podcast/611719d3cb0b82e1df0ad29e",
  },
  {
    emoji: "🌟",
    title: "得意忘形",
    author: "小宇宙",
    desc: "一档分享思考与灵感的播客节目",
    category: "成长",
    url: "https://www.xiaoyuzhoufm.com/podcast/5e74543a418a84a046c4e50e",
  },
  {
    emoji: "🎧",
    title: "十字路口Crossing",
    author: "小宇宙",
    desc: "科技与人文的十字路口",
    category: "技术",
    url: "https://www.xiaoyuzhoufm.com/podcast/60502e253c92d4f62c2a9577",
  },
  {
    emoji: "⚡",
    title: "AI炼金术",
    author: "小宇宙",
    desc: "AI 领域的深度对话与思考",
    category: "AI",
    url: "https://www.xiaoyuzhoufm.com/podcast/63e9ef4de99bdef7d39944c8",
  },
];

export const podcastCategories = ['All', 'AI', '技术', '成长'];
