"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { videos, videoCategories, type Video } from "@/data/videos";
import { podcasts, podcastCategories, type Podcast } from "@/data/podcasts";
import { bloggers, bloggerCategories, type Blogger } from "@/data/bloggers";
import { skills, skillsCategories, type Skill } from "@/data/skills";
import { prompts, promptsCategories, type Prompt } from "@/data/prompts";

function Hero() {
  return (
    <section className="dark-hero">
      <div className="dark-hero-bg">
        <div className="dark-hero-grid"></div>
        <div className="dark-hero-orb dark-hero-orb-1"></div>
        <div className="dark-hero-orb dark-hero-orb-2"></div>
        <div className="dark-hero-orb dark-hero-orb-3"></div>
      </div>

      <div className="dark-hero-content">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="dark-hero-badge"
        >
          <span className="dark-hero-badge-dot"></span>
          <span>Learning Library</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="dark-hero-title"
        >
          <span className="dark-hero-title-main">Melody&apos;s</span>
          <span className="dark-hero-title-accent gradient-text">Learning Library</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="dark-hero-subtitle"
        >
          打开AI世界的门钥匙
        </motion.p>

        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="dark-hero-nav"
        >
          {[
            { label: 'Prompts 提示词', href: '#prompts', icon: '✦' },
            { label: 'Skills 技能', href: '#skills', icon: '⚡' },
            { label: 'Bloggers 博主', href: '#bloggers', icon: '★' },
            { label: 'Videos 视频', href: '#videos', icon: '▶' },
            { label: 'Podcasts 播客', href: '#podcasts', icon: '♪' },
          ].map((item) => (
            <a key={item.label} href={item.href} className="dark-hero-nav-item">
              <span className="dark-hero-nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </motion.nav>
      </div>

      <div className="dark-hero-scroll">
        <div className="dark-hero-scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}

function Videos() {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredVideos = activeCategory === 'All' ? videos : videos.filter((v: Video) => v.category === activeCategory);
  const displayVideos = showAll ? filteredVideos : filteredVideos.slice(0, 5);

  return (
    <section id="videos" className="dark-section">
      <div className="dark-section-header-action">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="dark-section-num"
          >
            04
          </motion.span>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="dark-section-title"
            >
              值得一看的 Video
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}
            >
              从源头学、向Builders学。这里的每个视频，都值得你反复观看，是你敲开AI世界的门钥匙。
            </motion.p>
          </div>
        </div>
        <button onClick={() => setShowAll(!showAll)} className="dark-view-all-btn">
          {showAll ? '收起' : '查看全部'}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={showAll ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
          </svg>
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="dark-categories"
        style={{ marginBottom: '1.5rem' }}
      >
        {videoCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`dark-category-btn ${activeCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <div className="dark-videos-list">
        {displayVideos.map((video: Video, i: number) => (
          <motion.a
            key={video.title}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className={`dark-video-card ${video.featured ? 'dark-video-card-featured' : ''}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="dark-video-thumb">
              <img src={video.thumbnail} alt={video.title} />
              <div className="dark-video-play">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="dark-video-info">
              <div className="dark-video-meta">
                <span className="dark-video-category">{video.category}</span>
                <span className="dark-video-duration">{video.duration}</span>
              </div>
              <h3 className="dark-video-title">{video.title}</h3>
              <p className="dark-video-author">{video.author}</p>
              {video.desc && <p className="dark-video-desc">{video.desc}</p>}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function Podcasts() {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPodcasts = activeCategory === 'All' ? podcasts : podcasts.filter((p: Podcast) => p.category === activeCategory);
  const displayPodcasts = showAll ? filteredPodcasts : filteredPodcasts.slice(0, 4);

  return (
    <section id="podcasts" className="dark-section-full">
      <div className="dark-section" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="dark-section-header-action">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="dark-section-num"
            >
              05
            </motion.span>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="dark-section-title"
              >
                爱听、多听的 Podcasts
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}
              >
                个人私藏，学习AI是为了更好地生活
              </motion.p>
            </div>
          </div>
          <button onClick={() => setShowAll(!showAll)} className="dark-view-all-btn">
            {showAll ? '收起' : '查看全部'}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={showAll ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
            </svg>
          </button>
        </div>

        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="dark-categories"
            style={{ marginBottom: '1.5rem' }}
          >
            {podcastCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`dark-category-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}

        <div className="dark-podcasts-grid">
          {displayPodcasts.map((podcast: Podcast, i: number) => (
            <motion.a
              key={i}
              href={podcast.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="dark-podcast-card"
            >
              <span className="dark-podcast-emoji">{podcast.emoji}</span>
              <h3 className="dark-podcast-title">{podcast.title}</h3>
              <p className="dark-podcast-author">{podcast.author}</p>
              <p className="dark-podcast-desc">{podcast.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bloggers() {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBloggers = activeCategory === 'All' ? bloggers : bloggers.filter((b: Blogger) => b.category === activeCategory);
  const visibleBloggers = filteredBloggers.slice(0, 8);
  const hiddenBloggers = filteredBloggers.slice(8);

  return (
    <section id="bloggers" className="dark-section">
      <div className="dark-section-header-action">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="dark-section-num"
          >
            03
          </motion.span>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="dark-section-title"
            >
              X（Twitter）上最值得关注的博主
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}
            >
              关注创造者、别追流量博主
            </motion.p>
          </div>
        </div>
        {hiddenBloggers.length > 0 && (
          <button onClick={() => setShowAll(!showAll)} className="dark-view-all-btn">
            {showAll ? '收起' : `查看全部 ${filteredBloggers.length} 位`}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: showAll ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>

      {/* 分类标签 - 始终显示在 header 下方 */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="dark-categories"
        style={{ marginBottom: '1.5rem', marginTop: showAll ? '0' : '1rem' }}
      >
        {bloggerCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`dark-category-btn ${activeCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <div className="dark-bloggers-grid">
        {visibleBloggers.map((blogger: Blogger, i: number) => (
          <motion.a
            key={i}
            href={blogger.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="dark-blogger-card"
          >
            <div
              className="dark-blogger-avatar"
              style={{
                backgroundColor: blogger.color + '18',
                color: blogger.color,
                borderColor: blogger.color + '30'
              }}
            >
              {blogger.initials}
            </div>
            <div>
              <h4 className="dark-blogger-name">{blogger.name}</h4>
              <p className="dark-blogger-platform">{blogger.platform}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* 下拉展开区域 */}
      {!showAll && hiddenBloggers.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="dark-skills-expand"
        >
          <button
            onClick={() => setShowAll(true)}
            className="dark-skills-expand-btn"
          >
            <div className="dark-skills-expand-content">
              <span className="dark-skills-expand-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </span>
              <div className="dark-skills-expand-text">
                <span className="dark-skills-expand-label">还有 {hiddenBloggers.length} 位博主</span>
                <span className="dark-skills-expand-hint">点击展开</span>
              </div>
            </div>
            <div className="dark-skills-expand-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
        </motion.div>
      )}

      {/* 展开后的隐藏内容 */}
      {showAll && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="dark-bloggers-grid"
          style={{ marginTop: '1.5rem' }}
        >
          {hiddenBloggers.map((blogger: Blogger, i: number) => (
            <motion.a
              key={i}
              href={blogger.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="dark-blogger-card"
            >
              <div
                className="dark-blogger-avatar"
                style={{
                  backgroundColor: blogger.color + '18',
                  color: blogger.color,
                  borderColor: blogger.color + '30'
                }}
              >
                {blogger.initials}
              </div>
              <div>
                <h4 className="dark-blogger-name">{blogger.name}</h4>
                <p className="dark-blogger-platform">{blogger.platform}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      )}
    </section>
  );
}

function Skills() {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' ? skills : skills.filter((s: Skill) => s.category === activeCategory);
  const visibleSkills = filteredSkills.slice(0, 6);
  const hiddenSkills = filteredSkills.slice(6);

  return (
    <section id="skills" className="dark-section dark-section-skills">
      <div className="dark-section-header-action">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="dark-section-num"
          >
            02
          </motion.span>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="dark-section-title"
            >
              个人推荐 Top Skills
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '0.25' }}
            >
              实用工具和最佳实践，复制即用。用好AI、而不是让AI来消耗你
            </motion.p>
          </div>
        </div>
        {hiddenSkills.length > 0 && (
          <button onClick={() => setShowAll(!showAll)} className="dark-view-all-btn">
            {showAll ? '收起' : `查看全部 ${filteredSkills.length} 个`}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: showAll ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>

      {/* 分类标签 - 始终显示在 header 下方 */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="dark-categories"
        style={{ marginBottom: '1.5rem', marginTop: showAll ? '0' : '1rem' }}
      >
        {skillsCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`dark-category-btn ${activeCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <div className="dark-skills-grid">
        {visibleSkills.map((skill: Skill, i: number) => (
          <motion.div
            key={i}
            className="dark-skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
              className="dark-skill-card-link"
            >
              <div className="dark-skill-header">
                <div className="dark-skill-icon">
                  <img
                    src={`https://github.com/${skill.author}.png`}
                    alt={skill.author}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://avatars.githubusercontent.com/u/0?s=60&v=4`;
                    }}
                  />
                </div>
                <span className="dark-skill-category">{skill.category}</span>
              </div>
              <div className="dark-skill-content">
                <h4 className="dark-skill-title">{skill.title}</h4>
                <p className="dark-skill-desc">{skill.desc}</p>
              </div>
            </a>
            <div className="dark-skill-actions">
              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="dark-skill-btn dark-skill-btn-primary"
              >
                点击查看
              </a>
              {skill.installPackage ? (
                <a
                  href={skill.installPackage}
                  download
                  className="dark-skill-btn dark-skill-btn-download"
                >
                  直接下载
                </a>
              ) : (
                <span className="dark-skill-btn dark-skill-btn-disabled">
                  直接下载
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 下拉展开区域 */}
      {!showAll && hiddenSkills.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="dark-skills-expand"
        >
          <button
            onClick={() => setShowAll(true)}
            className="dark-skills-expand-btn"
          >
            <div className="dark-skills-expand-content">
              <span className="dark-skills-expand-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </span>
              <div className="dark-skills-expand-text">
                <span className="dark-skills-expand-label">还有 {hiddenSkills.length} 个技能</span>
                <span className="dark-skills-expand-hint">点击展开</span>
              </div>
            </div>
            <div className="dark-skills-expand-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
        </motion.div>
      )}

      {/* 展开后的隐藏内容 */}
      {showAll && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="dark-skills-grid"
          style={{ marginTop: '1.5rem' }}
        >
          {hiddenSkills.map((skill: Skill, i: number) => (
            <motion.div
              key={i}
              className="dark-skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
                className="dark-skill-card-link"
              >
                <div className="dark-skill-header">
                  <div className="dark-skill-icon">
                    <img
                      src={`https://github.com/${skill.author}.png`}
                      alt={skill.author}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://avatars.githubusercontent.com/u/0?s=60&v=4`;
                      }}
                    />
                  </div>
                  <span className="dark-skill-category">{skill.category}</span>
                </div>
                <div className="dark-skill-content">
                  <h4 className="dark-skill-title">{skill.title}</h4>
                  <p className="dark-skill-desc">{skill.desc}</p>
                </div>
              </a>
              <div className="dark-skill-actions">
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark-skill-btn dark-skill-btn-primary"
                >
                  点击查看
                </a>
                {skill.installPackage ? (
                  <a
                    href={skill.installPackage}
                    download
                    className="dark-skill-btn dark-skill-btn-download"
                  >
                    直接下载
                  </a>
                ) : (
                  <span className="dark-skill-btn dark-skill-btn-disabled">
                    直接下载
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}

function Prompts() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPrompts = activeCategory === 'All' ? prompts : prompts.filter((p: Prompt) => p.category === activeCategory);
  const displayPrompts = showAll ? filteredPrompts : filteredPrompts.slice(0, 4);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="prompts" className="dark-section">
      <div className="dark-section-header-action">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="dark-section-num"
          >
            01
          </motion.span>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="dark-section-title"
            >
              有意思的 Prompts
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}
            >
              值得收藏的AI提示词，复制即可使用
            </motion.p>
          </div>
        </div>
        <button onClick={() => setShowAll(!showAll)} className="dark-view-all-btn">
          {showAll ? '收起' : '查看全部'}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={showAll ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
          </svg>
        </button>
      </div>

      {showAll && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="dark-categories"
          style={{ marginBottom: '1.5rem' }}
        >
          {promptsCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`dark-category-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      )}

      <div className="dark-prompts-grid">
        {displayPrompts.map((prompt: Prompt, i: number) => (
          <div
            key={i}
            className="dark-prompt-card"
          >
            <div className="dark-prompt-header">
              <h3 className="dark-prompt-title">{prompt.title}</h3>
              {prompt.desc && (
                <p className="dark-prompt-desc">
                  {prompt.desc}
                </p>
              )}
            </div>
            <div className="dark-prompt-actions">
              <button
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                className="dark-prompt-btn dark-prompt-btn-ghost"
              >
                {expandedIndex === i ? "收起" : "查看内容"}
              </button>
              <button
                onClick={() => copyToClipboard(prompt.content, i)}
                className="dark-prompt-btn dark-prompt-btn-accent"
              >
                {copiedIndex === i ? "已复制" : "复制"}
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: expandedIndex === i ? 1 : 0,
                height: expandedIndex === i ? "auto" : 0
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="dark-prompt-content">
                {prompt.content}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  const socials = [
    { name: "GitHub", url: "https://github.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "小红书", url: "https://xiaohongshu.com" },
  ];

  return (
    <footer className="dark-footer">
      <div className="dark-footer-content">
        <div className="dark-footer-main">
          <div className="dark-footer-avatar">M</div>
          <div>
            <h3 className="dark-footer-name">Melody</h3>
            <p className="dark-footer-tagline">持续学习，持续分享</p>
            <p className="dark-footer-desc">
              热爱探索与分享。相信好的信息值得被整理和传播。这个站点用于记录我发现的优秀资源，希望对你也有帮助。
<span style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.8125rem', fontStyle: 'italic', opacity: 0.7 }}>Learn in public, Build in public</span>
            </p>
          </div>
        </div>
        <div className="dark-footer-socials">
          <p className="dark-footer-socials-label">关注我</p>
          <div className="dark-footer-socials-links">
            {socials.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="dark-footer-social-link">
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="dark-footer-bottom">
        <p>© 2026 Melody&apos;s Learning Library</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Prompts />
      <Skills />
      <Bloggers />
      <Videos />
      <Podcasts />
      <Footer />
    </main>
  );
}
