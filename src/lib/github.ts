// GitHub API utility for committing data changes

const GITHUB_API = "https://api.github.com";

interface CommitResult {
  success: boolean;
  message: string;
  commitUrl?: string;
}

// Map title to interface name and variable name
const typeMap: Record<string, { interface: string; variable: string; categories: string[] }> = {
  "Prompts": { interface: "Prompt", variable: "prompts", categories: [] },
  "Skills": { interface: "Skill", variable: "skills", categories: [] },
  "Bloggers": { interface: "Blogger", variable: "bloggers", categories: [] },
  "Videos": { interface: "Video", variable: "videos", categories: [] },
  "Podcasts": { interface: "Podcast", variable: "podcasts", categories: [] },
};

export async function commitToGitHub(
  filePath: string,
  content: string,
  commitMessage: string
): Promise<CommitResult> {
  const token = localStorage.getItem("github_token");
  const repo = localStorage.getItem("github_repo");

  if (!token || !repo) {
    return {
      success: false,
      message: "请先在设置页面配置 GitHub Token 和仓库地址"
    };
  }

  const [owner, repoName] = repo.split("/");
  if (!owner || !repoName) {
    return {
      success: false,
      message: "仓库地址格式错误，请使用 username/repo 格式"
    };
  }

  try {
    // Get current file SHA (if exists)
    const getUrl = `${GITHUB_API}/repos/${owner}/${repoName}/contents/${filePath}`;
    const getResponse = await fetch(getUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json"
      }
    });

    let sha: string | undefined;
    if (getResponse.ok) {
      const data = await getResponse.json();
      sha = data.sha;
    }

    // Create or update file
    const putUrl = `${GITHUB_API}/repos/${owner}/${repoName}/contents/${filePath}`;
    const body: any = {
      message: commitMessage,
      content: btoa(unescape(encodeURIComponent(content)))
    };
    if (sha) {
      body.sha = sha;
    }

    const putResponse = await fetch(putUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!putResponse.ok) {
      const error = await putResponse.json();
      return {
        success: false,
        message: error.message || "提交失败"
      };
    }

    const data = await putResponse.json();
    return {
      success: true,
      message: "已成功发布到 GitHub，Vercel 将在几秒后自动部署",
      commitUrl: data.commit.html_url
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "网络错误，请稍后重试"
    };
  }
}

export function generateDataFile(title: string, data: any[], categories?: string[]) {
  const map = typeMap[title];
  if (!map) return JSON.stringify(data, null, 2);

  const interfaceName = map.interface;
  const variableName = map.variable;

  let output = `export interface ${interfaceName} {\n`;
  const firstItem = data[0];
  if (firstItem) {
    Object.keys(firstItem).forEach(key => {
      const value = firstItem[key];
      let type = "string";
      if (Array.isArray(value)) type = "string[]";
      else if (typeof value === "boolean") type = "boolean";
      else if (typeof value === "number") type = "number";
      output += `  ${key}: ${type};\n`;
    });
  }
  output += "}\n\n";

  output += `export const ${variableName}: ${interfaceName}[] = ${JSON.stringify(data, null, 2)};`;

  if (categories && categories.length > 0) {
    output += `\n\nexport const ${variableName}Categories = ${JSON.stringify(categories)};`;
  }

  return output;
}
