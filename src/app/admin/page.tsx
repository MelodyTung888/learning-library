"use client";

import { useState, useEffect } from "react";

export default function AdminSettingsPage() {
  const [githubToken, setGithubToken] = useState("");
  const [githubRepo, setGithubRepo] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("github_token") || "";
    const repo = localStorage.getItem("github_repo") || "";
    setGithubToken(token);
    setGithubRepo(repo);
  }, []);

  const handleSave = () => {
    localStorage.setItem("github_token", githubToken);
    localStorage.setItem("github_repo", githubRepo);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <h1 style={{
        fontSize: "1.5rem",
        fontWeight: 700,
        marginBottom: "0.5rem",
        color: "var(--color-text-primary)"
      }}>
        ⚙️ GitHub 配置
      </h1>
      <p style={{
        fontSize: "0.875rem",
        color: "var(--color-text-muted)",
        marginBottom: "2rem"
      }}>
        配置 GitHub 信息后，你的内容修改会自动同步到线上
      </p>

      <div style={{
        background: "var(--color-bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "2rem",
        maxWidth: "600px"
      }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{
            display: "block",
            fontSize: "0.875rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            color: "var(--color-text-primary)"
          }}>
            GitHub Personal Access Token
          </label>
          <input
            type="password"
            value={githubToken}
            onChange={(e) => setGithubToken(e.target.value)}
            placeholder="ghp_xxxxxxxxxxxx"
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              fontSize: "0.875rem",
              background: "var(--color-bg-base)",
              color: "var(--color-text-primary)"
            }}
          />
          <p style={{
            fontSize: "0.75rem",
            color: "var(--color-text-muted)",
            marginTop: "0.5rem"
          }}>
            需要 repo 权限。生成方式：GitHub → Settings → Developer settings → Personal access tokens → Generate new token
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <label style={{
            display: "block",
            fontSize: "0.875rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            color: "var(--color-text-primary)"
          }}>
            仓库地址
          </label>
          <input
            type="text"
            value={githubRepo}
            onChange={(e) => setGithubRepo(e.target.value)}
            placeholder="username/portfolio"
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              fontSize: "0.875rem",
              background: "var(--color-bg-base)",
              color: "var(--color-text-primary)"
            }}
          />
          <p style={{
            fontSize: "0.75rem",
            color: "var(--color-text-muted)",
            marginTop: "0.5rem"
          }}>
            例如：melody/portfolio （仓库名，不是完整URL）
          </p>
        </div>

        <button
          onClick={handleSave}
          style={{
            padding: "0.75rem 1.5rem",
            background: saved ? "#22c55e" : "var(--color-accent)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "0.875rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s"
          }}
        >
          {saved ? "✓ 已保存" : "保存配置"}
        </button>
      </div>

      <div style={{
        marginTop: "2rem",
        padding: "1.5rem",
        background: "rgba(196, 30, 58, 0.05)",
        border: "1px solid rgba(196, 30, 58, 0.1)",
        borderRadius: "12px",
        maxWidth: "600px"
      }}>
        <h3 style={{
          fontSize: "0.875rem",
          fontWeight: 600,
          marginBottom: "0.75rem",
          color: "var(--color-text-primary)"
        }}>
          📋 使用流程
        </h3>
        <ol style={{
          fontSize: "0.8125rem",
          color: "var(--color-text-secondary)",
          lineHeight: 1.8,
          paddingLeft: "1.25rem",
          margin: 0
        }}>
          <li>在 GitHub 生成 Personal Access Token（需要 repo 权限）</li>
          <li>填入上方配置并保存</li>
          <li>在各内容模块修改后，点击「发布到线上」</li>
          <li>系统自动提交到 GitHub，Vercel 自动部署</li>
        </ol>
      </div>
    </div>
  );
}
