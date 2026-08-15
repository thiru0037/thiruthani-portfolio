import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog | Thiruthani Ravichandran",
  description: "Longer-form stories and perspectives on product management, AI, and enterprise SaaS.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main id="main-content" className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Blog"
          title="Stories & perspectives"
          description="Longer-form writing that doesn't fit into a resume bullet or a case study card."
        />

        {posts.length === 0 ? (
          <p className="mt-10 text-muted-foreground">No posts yet — check back soon.</p>
        ) : (
          <ul className="mt-12 flex flex-col divide-y divide-border">
            {posts.map((post) => (
              <li key={post.slug} className="py-8 first:pt-0">
                <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    {formatDate(post.date)}
                  </span>
                  <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </main>
  );
}
