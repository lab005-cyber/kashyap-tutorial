import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  author: string;
  tags: string[];
  readingTime: string;
  coverEmoji: string;
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), "src", "content", "blog");

function calcReadingTime(markdown: string): string {
  const words = markdown.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title ?? file,
      description: data.description ?? "",
      date: data.date ?? new Date().toISOString().slice(0, 10),
      author: data.author ?? "Kashyap Tutorial",
      tags: data.tags ?? [],
      readingTime: calcReadingTime(content),
      coverEmoji: data.coverEmoji ?? "📚",
      content,
    } as BlogPost;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}

export function getAllTags(): string[] {
  const set = new Set<string>();
  getAllPosts().forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}
