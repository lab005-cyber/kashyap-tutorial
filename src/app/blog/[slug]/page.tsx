import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { markdownToHtml } from "@/lib/markdown";
import { siteConfig } from "@/config/site";
import {
  FiArrowLeft,
  FiArrowRight,
  FiClock,
  FiCalendar,
  FiFacebook,
  FiLink,
  FiBookOpen,
} from "react-icons/fi";
import CopyLinkButton from "@/components/CopyLinkButton";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);
  const shareUrl = `${siteConfig.url}/blog/${post.slug}`;

  // related posts: share a tag, excluding current
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: shareUrl,
    keywords: post.tags.join(", "),
  };

  return (
    <article className="pb-20">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="container-x relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-grey-300 hover:text-accent"
          >
            <FiArrowLeft /> Back to Blog
          </Link>

          <div className="mx-auto mt-6 max-w-3xl text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-accent">
              <FiBookOpen className="h-10 w-10 text-accent" />
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-grey-400">
              <span className="inline-flex items-center gap-1.5">
                <FiCalendar /> {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FiClock /> {post.readingTime}
              </span>
              <span>by {post.author}</span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {post.title}
            </h1>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <div
            className="prose-custom mt-12"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-grey-100 px-3 py-1 text-xs font-medium text-grey-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Share */}
          <div className="mt-10 flex flex-wrap items-center gap-3 border-y border-grey-200 py-6">
            <span className="text-sm font-semibold text-navy-900">Share:</span>
            <ShareBtn
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              label="Share on Facebook"
            >
              <FiFacebook />
            </ShareBtn>
            <ShareBtn
              href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + shareUrl)}`}
              label="Share on WhatsApp"
            >
              <FiLink />
            </ShareBtn>
            <CopyLinkButton url={shareUrl} />
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl bg-navy-900 p-8 text-center text-white">
            <h2 className="font-display text-xl font-bold">
              Want expert guidance for your child?
            </h2>
            <p className="mt-2 text-sm text-grey-300">
              Our teachers turn confusion into clarity. Book a free demo today.
            </p>
            <Link href="/contact" className="btn-accent mt-5">
              Book Free Demo <FiArrowRight />
            </Link>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-14">
              <h3 className="font-display text-xl font-bold text-navy-900">
                Keep reading
              </h3>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="card group flex gap-4 hover:border-navy-200 hover:shadow-md"
                  >
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                      <FiBookOpen className="h-8 w-8 text-navy-700" />
                    </span>
                    <div>
                      <h4 className="font-semibold leading-snug text-navy-900 group-hover:text-navy-700">
                        {p.title}
                      </h4>
                      <p className="mt-1 line-clamp-2 text-xs text-grey-500">
                        {p.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function ShareBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-grey-100 text-navy-700 transition-colors hover:bg-navy-800 hover:text-white"
    >
      {children}
    </a>
  );
}
