"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/admin", label: "设置", icon: "⚙️" },
  { href: "/admin/prompts", label: "Prompts", icon: "✦" },
  { href: "/admin/skills", label: "Skills", icon: "⚡" },
  { href: "/admin/bloggers", label: "Bloggers", icon: "★" },
  { href: "/admin/videos", label: "Videos", icon: "▶" },
  { href: "/admin/podcasts", label: "Podcasts", icon: "♪" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--color-bg-base)",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      {/* Header */}
      <header style={{
        borderBottom: "1px solid var(--border)",
        background: "var(--color-bg-card)",
        padding: "0 2rem"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <Link href="/" style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              textDecoration: "none"
            }}>
              🎨 Admin 后台
            </Link>
            <nav style={{ display: "flex", gap: "0.5rem" }}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: pathname === item.href ? 600 : 400,
                    color: pathname === item.href ? "var(--color-accent)" : "var(--color-text-secondary)",
                    background: pathname === item.href ? "rgba(196, 30, 58, 0.08)" : "transparent",
                    textDecoration: "none",
                    transition: "all 0.2s"
                  }}
                >
                  <span style={{ marginRight: "0.5rem" }}>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <Link href="/" style={{
            fontSize: "0.875rem",
            color: "var(--color-text-muted)",
            textDecoration: "none"
          }}>
            ← 返回首页
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem"
      }}>
        {children}
      </main>
    </div>
  );
}
