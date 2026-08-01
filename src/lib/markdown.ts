/**
 * Minimal, dependency-free Markdown -> HTML renderer.
 * Supports: headings (h2/h3), bold, italic, inline code, links,
 * unordered/ordered lists, blockquotes, and paragraphs.
 * Escapes HTML first for safety (blog content is author-controlled).
 */

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function inline(text: string): string {
  let t = escapeHtml(text);
  // inline code
  t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
  // bold
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  // italic
  t = t.replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
  // links [text](url)
  t = t.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  return t;
}

export function markdownToHtml(md: string): string {
  const lines = md.split(/\r?\n/);
  const html: string[] = [];
  let i = 0;
  let inUl = false;
  let inOl = false;

  const closeLists = () => {
    if (inUl) {
      html.push("</ul>");
      inUl = false;
    }
    if (inOl) {
      html.push("</ol>");
      inOl = false;
    }
  };

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      closeLists();
      i++;
      continue;
    }

    // Headings
    if (/^###\s+/.test(trimmed)) {
      closeLists();
      html.push(`<h3>${inline(trimmed.replace(/^###\s+/, ""))}</h3>`);
      i++;
      continue;
    }
    if (/^##\s+/.test(trimmed)) {
      closeLists();
      html.push(`<h2>${inline(trimmed.replace(/^##\s+/, ""))}</h2>`);
      i++;
      continue;
    }

    // Blockquote
    if (/^>\s?/.test(trimmed)) {
      closeLists();
      html.push(`<blockquote>${inline(trimmed.replace(/^>\s?/, ""))}</blockquote>`);
      i++;
      continue;
    }

    // Unordered list
    if (/^[-*]\s+/.test(trimmed)) {
      if (inOl) {
        html.push("</ol>");
        inOl = false;
      }
      if (!inUl) {
        html.push("<ul>");
        inUl = true;
      }
      html.push(`<li>${inline(trimmed.replace(/^[-*]\s+/, ""))}</li>`);
      i++;
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(trimmed)) {
      if (inUl) {
        html.push("</ul>");
        inUl = false;
      }
      if (!inOl) {
        html.push("<ol>");
        inOl = true;
      }
      html.push(`<li>${inline(trimmed.replace(/^\d+\.\s+/, ""))}</li>`);
      i++;
      continue;
    }

    // Paragraph
    closeLists();
    html.push(`<p>${inline(trimmed)}</p>`);
    i++;
  }

  closeLists();
  return html.join("\n");
}
