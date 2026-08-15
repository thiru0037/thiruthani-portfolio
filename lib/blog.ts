import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

export interface PostSummary extends PostFrontmatter {
  slug: string;
}

function readPostFile(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  return matter(raw);
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllPosts(): PostSummary[] {
  return getAllPostSlugs()
    .map((slug) => {
      const { data } = readPostFile(slug);
      return { slug, ...(data as PostFrontmatter) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): { frontmatter: PostFrontmatter; content: string } {
  const { data, content } = readPostFile(slug);
  return { frontmatter: data as PostFrontmatter, content };
}
