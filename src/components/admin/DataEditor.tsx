"use client";

import { useState } from "react";
import { commitToGitHub, generateDataFile } from "@/lib/github";

interface FieldDef {
  key: string;
  label: string;
  type: "text" | "textarea" | "select" | "tags" | "color";
  options?: string[];
  placeholder?: string;
}

interface DataEditorProps {
  title: string;
  description: string;
  items: any[];
  fields: FieldDef[];
  filePath: string;
  itemTemplate: () => any;
}

export default function DataEditor({
  title,
  description,
  items,
  fields,
  filePath,
  itemTemplate
}: DataEditorProps) {
  const [data, setData] = useState(items);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newItem, setNewItem] = useState(itemTemplate());
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSaveItem = (index: number) => {
    const updated = [...data];
    updated[index] = { ...data[index], ...(index === -1 ? newItem : data[index]) };
    // Sort by rank after saving
    updated.sort((a, b) => String(a.rank || "").localeCompare(String(b.rank || ""), undefined, { numeric: true }));
    setData(updated);
    setEditingIndex(null);
    setIsAdding(false);
    setNewItem(itemTemplate());
  };

  const handleDelete = (index: number) => {
    if (confirm("确定要删除这条记录吗？")) {
      const updated = data.filter((_, i) => i !== index);
      updated.sort((a, b) => String(a.rank || "").localeCompare(String(b.rank || ""), undefined, { numeric: true }));
      setData(updated);
    }
  };

  const handleAdd = () => {
    setIsAdding(true);
    setNewItem(itemTemplate());
    setEditingIndex(-1);
  };

  const handlePublish = async () => {
    setSaving(true);
    setMessage(null);

    const content = generateDataFile(title, data, getCategories(data));
    const result = await commitToGitHub(
      `src/data/${title.toLowerCase()}.ts`,
      content,
      `chore: 更新 ${title} 数据`
    );

    setSaving(false);
    setMessage({
      type: result.success ? "success" : "error",
      text: result.message
    });

    if (result.success) {
      setTimeout(() => setMessage(null), 5000);
    }
  };

  const getCategories = (items: any[]) => {
    const cats = new Set(items.map((item) => item.category).filter(Boolean));
    return ["All", ...Array.from(cats)];
  };

  const renderField = (field: FieldDef, item: any, index: number, isNew: boolean) => {
    const value = isNew
      ? newItem[field.key]
      : item[field.key];

    const handleChange = (newValue: any) => {
      if (isNew) {
        setNewItem({ ...newItem, [field.key]: newValue });
      } else {
        const updated = [...data];
        updated[index] = { ...updated[index], [field.key]: newValue };
        setData(updated);
      }
    };

    switch (field.type) {
      case "textarea":
        return (
          <textarea
            key={field.key}
            value={value || ""}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={field.placeholder}
            style={{
              width: "100%",
              minHeight: "100px",
              padding: "0.75rem",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontFamily: "inherit",
              background: "var(--color-bg-base)",
              color: "var(--color-text-primary)",
              resize: "vertical"
            }}
          />
        );
      case "tags":
        return (
          <input
            key={field.key}
            type="text"
            value={Array.isArray(value) ? value.join(", ") : ""}
            onChange={(e) => handleChange(e.target.value.split(",").map((s) => s.trim()).filter(Boolean))}
            placeholder={field.placeholder || "标签1, 标签2, 标签3"}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              fontSize: "0.875rem",
              background: "var(--color-bg-base)",
              color: "var(--color-text-primary)"
            }}
          />
        );
      case "select":
        return (
          <select
            key={field.key}
            value={value || ""}
            onChange={(e) => handleChange(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              fontSize: "0.875rem",
              background: "var(--color-bg-base)",
              color: "var(--color-text-primary)"
            }}
          >
            <option value="">选择分类</option>
            {field.options?.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        );
      case "color":
        return (
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <input
              type="color"
              value={value || "#000000"}
              onChange={(e) => handleChange(e.target.value)}
              style={{ width: "50px", height: "40px", border: "none", cursor: "pointer" }}
            />
            <input
              type="text"
              value={value || ""}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="#000000"
              style={{
                flex: 1,
                padding: "0.75rem",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontSize: "0.875rem",
                background: "var(--color-bg-base)",
                color: "var(--color-text-primary)"
              }}
            />
          </div>
        );
      default:
        return (
          <input
            key={field.key}
            type="text"
            value={value || ""}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={field.placeholder}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              fontSize: "0.875rem",
              background: "var(--color-bg-base)",
              color: "var(--color-text-primary)"
            }}
          />
        );
    }
  };

  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "0.5rem"
      }}>
        <div>
          <h1 style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "0.25rem",
            color: "var(--color-text-primary)"
          }}>
            {title}
          </h1>
          <p style={{
            fontSize: "0.875rem",
            color: "var(--color-text-muted)"
          }}>
            {description}
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button
            onClick={handleAdd}
            style={{
              padding: "0.75rem 1.25rem",
              background: "var(--color-bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--color-text-primary)",
              cursor: "pointer"
            }}
          >
            + 添加
          </button>
          <button
            onClick={handlePublish}
            disabled={saving}
            style={{
              padding: "0.75rem 1.5rem",
              background: saving ? "#999" : "var(--color-accent)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: saving ? "not-allowed" : "pointer"
            }}
          >
            {saving ? "发布中..." : "发布到线上"}
          </button>
        </div>
      </div>

      {message && (
        <div style={{
          padding: "1rem",
          borderRadius: "8px",
          marginBottom: "1rem",
          background: message.type === "success" ? "rgba(34, 197, 94, 0.1)" : "rgba(239, 68, 68, 0.1)",
          color: message.type === "success" ? "#22c55e" : "#ef4444",
          fontSize: "0.875rem"
        }}>
          {message.text}
        </div>
      )}

      {/* Add New Form */}
      {isAdding && (
        <div style={{
          background: "var(--color-bg-card)",
          border: "2px solid var(--color-accent)",
          borderRadius: "12px",
          padding: "1.5rem",
          marginBottom: "1rem"
        }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem", color: "var(--color-text-primary)" }}>
            添加新内容
          </h3>
          <div style={{ display: "grid", gap: "1rem" }}>
            {fields.map((field) => (
              <div key={field.key}>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 500, marginBottom: "0.375rem", color: "var(--color-text-secondary)" }}>
                  {field.label}
                </label>
                {renderField(field, null, -1, true)}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
            <button
              onClick={() => handleSaveItem(-1)}
              style={{
                padding: "0.625rem 1.25rem",
                background: "var(--color-accent)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: "pointer"
              }}
            >
              保存
            </button>
            <button
              onClick={() => { setIsAdding(false); setEditingIndex(null); }}
              style={{
                padding: "0.625rem 1.25rem",
                background: "transparent",
                color: "var(--color-text-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontSize: "0.875rem",
                cursor: "pointer"
              }}
            >
              取消
            </button>
          </div>
        </div>
      )}

      {/* Items List */}
      <div style={{ display: "grid", gap: "0.75rem" }}>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "1.25rem",
              opacity: editingIndex === index ? 0.6 : 1
            }}
          >
            {editingIndex === index ? (
              <div>
                <div style={{ display: "grid", gap: "0.75rem" }}>
                  {fields.map((field) => (
                    <div key={field.key}>
                      <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 500, marginBottom: "0.375rem", color: "var(--color-text-secondary)" }}>
                        {field.label}
                      </label>
                      {renderField(field, item, index, false)}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
                  <button
                    onClick={() => handleSaveItem(index)}
                    style={{
                      padding: "0.5rem 1rem",
                      background: "var(--color-accent)",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      cursor: "pointer"
                    }}
                  >
                    保存
                  </button>
                  <button
                    onClick={() => setEditingIndex(null)}
                    style={{
                      padding: "0.5rem 1rem",
                      background: "transparent",
                      color: "var(--color-text-secondary)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      fontSize: "0.8125rem",
                      cursor: "pointer"
                    }}
                  >
                    取消
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    {fields.filter(f => f.type === "color").map((field) => (
                      <div
                        key={field.key}
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "4px",
                          background: item[field.key],
                          border: "1px solid rgba(0,0,0,0.1)"
                        }}
                      />
                    ))}
                    {item.category && (
                      <span style={{
                        padding: "0.125rem 0.5rem",
                        background: "rgba(196, 30, 58, 0.08)",
                        color: "var(--color-accent)",
                        borderRadius: "4px",
                        fontSize: "0.6875rem",
                        fontWeight: 600
                      }}>
                        {item.category}
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.25rem", color: "var(--color-text-primary)" }}>
                    {item.title || item.name || item.initials || `Item ${index + 1}`}
                  </h3>
                  <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", margin: 0 }}>
                    {item.desc || item.description || item.platform || item.url || ""}
                  </p>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button
                    onClick={() => {
                      const updated = [...data];
                      const item = updated[index];
                      updated.splice(index, 1);
                      updated.splice(index - 1, 0, item);
                      updated.sort((a, b) => String(a.rank || "").localeCompare(String(b.rank || ""), undefined, { numeric: true }));
                      setData(updated);
                    }}
                    disabled={index === 0}
                    style={{
                      padding: "0.5rem",
                      background: "transparent",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      color: index === 0 ? "#ccc" : "var(--color-text-primary)",
                      cursor: index === 0 ? "not-allowed" : "pointer"
                    }}
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => {
                      const updated = [...data];
                      const item = updated[index];
                      updated.splice(index, 1);
                      updated.splice(index + 1, 0, item);
                      updated.sort((a, b) => String(a.rank || "").localeCompare(String(b.rank || ""), undefined, { numeric: true }));
                      setData(updated);
                    }}
                    disabled={index === data.length - 1}
                    style={{
                      padding: "0.5rem",
                      background: "transparent",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      color: index === data.length - 1 ? "#ccc" : "var(--color-text-primary)",
                      cursor: index === data.length - 1 ? "not-allowed" : "pointer"
                    }}
                  >
                    ↓
                  </button>
                  <button
                    onClick={() => setEditingIndex(index)}
                    style={{
                      padding: "0.5rem 1rem",
                      background: "transparent",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      fontSize: "0.8125rem",
                      color: "var(--color-text-primary)",
                      cursor: "pointer"
                    }}
                  >
                    编辑
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    style={{
                      padding: "0.5rem 1rem",
                      background: "transparent",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      borderRadius: "6px",
                      fontSize: "0.8125rem",
                      color: "#ef4444",
                      cursor: "pointer"
                    }}
                  >
                    删除
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {data.length === 0 && !isAdding && (
        <div style={{
          textAlign: "center",
          padding: "3rem",
          color: "var(--color-text-muted)",
          fontSize: "0.875rem"
        }}>
          暂无内容，点击「添加」开始创建
        </div>
      )}
    </div>
  );
}
