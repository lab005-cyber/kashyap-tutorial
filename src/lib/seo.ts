import { siteConfig } from "@/config/site";

type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function courseJsonLd(courses: { title: string; blurb: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Courses at " + siteConfig.name,
    itemListElement: courses.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      description: c.blurb,
    })),
  };
}
