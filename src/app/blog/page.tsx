import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { FiArrowRight, FiClock, FiCalendar } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Study tips, exam strategies, and educational insights from Kashyap Tutorial. Practical advice for students and parents on board exams, home tuition, and more.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <section className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-accent">
            The Blog
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Tips, guides &amp; study strategies
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-grey-300">
            Honest, practical advice for students and parents — from board exam prep to
            choosing the right tuition.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          {/* Featured post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group mb-12 grid overflow-hidden rounded-3xl border border-grey-200 bg-white hover:shadow-lg md:grid-cols-2"
            >
              <div className="flex min-h-[240px] items-center justify-center bg-navy-50 text-7xl">
                {featured.coverEmoji}
              </div>
              <div className="p-8 sm:p-10">
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-dark">
                  Featured
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-navy-900 group-hover:text-navy-700">
                  {featured.title}
                </h2>
                <p className="mt-3 text-grey-600">{featured.description}</p>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-grey-500">
                  <span className="inline-flex items-center gap-1.5">
                    <FiCalendar /> {formatDate(featured.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FiClock /> {featured.readingTime}
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy-700 group-hover:text-navy-900">
                  Read article{" "}
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-grey-100 px-3 py-1 text-xs font-medium text-grey-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Post grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group flex h-full flex-col hover:-translate-y-1 hover:border-navy-200 hover:shadow-md"
              >
                <span className="flex h-32 items-center justify-center rounded-xl bg-navy-50 text-5xl">
                  {post.coverEmoji}
                </span>
                <div className="mt-4 flex items-center gap-3 text-xs text-grey-500">
                  <span className="inline-flex items-center gap-1.5">
                    <FiCalendar /> {formatDate(post.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FiClock /> {post.readingTime}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug text-navy-900 group-hover:text-navy-700">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-grey-600">
                  {post.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-700">
                  Read more{" "}
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <p className="py-20 text-center text-grey-500">
              No blog posts yet. Check back soon!
            </p>
          )}
        </div>
      </section>

      {/* Newsletter-ish CTA */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="rounded-3xl bg-navy-900 px-6 py-12 text-center text-white sm:px-12">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Need personalised help?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-grey-300">
              Reading is great, but a good teacher makes all the difference. Book a free demo.
            </p>
            <Link href="/contact" className="btn-accent mt-6">
              Book Free Demo <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
