# Kashyap Tutorial & Home Tuition

A modern, SEO-optimized, fully responsive website for **Kashyap Tutorial & Home Tuition** — offering **offline home tutors in 5 cities** (Greater Noida, Ghaziabad, Gurgaon, Delhi, Patna) and **live online classes worldwide**.

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. Optimized for Vercel deployment.

---

## ✨ Features

- **Unique homepage** — hero with animated metrics, live progress dashboard mockup, scroll-reveal animations
- **Offline + Online tutoring segment** — interactive "Our Presence" section showing 5 cities with expandable area lists, plus an online-classes toggle with global features
- **Multi-page architecture**: Home, Find a Tutor, Courses, Results, Blog, About, Contact
- **Web3Forms** contact integration — submissions sent straight to your email
- **Blog system** — markdown-based posts for content updates & SEO traffic
- **SEO optimized** — metadata, OpenGraph, Twitter cards, JSON-LD structured data, auto sitemap, robots.txt, manifest
- **Fully responsive** — mobile, tablet, desktop
- **Brand design** — deep navy + soft grey palette, minimalist logo, fast loading
- **Social media integration** — Facebook, Instagram, YouTube, WhatsApp share

---

## 🚀 Quick Start (Local)

```bash
npm install
npm run dev
```

Open http://localhost:3000

> **Note:** If your folder name contains `&`, run the build via `node ./node_modules/next/dist/bin/next build` directly, or use `npm run build` from PowerShell. On Vercel this is never an issue.

---

## ⚙️ Configuration

### 1. Edit your business info
Everything (phone, address, courses, cities, testimonials, toppers) lives in **one file**:

```
src/config/site.ts
```

Change values there and the entire site updates.

### 2. Web3Forms (contact form → your email)
1. Go to **https://web3forms.com**
2. Enter your email — they'll send you a free **Access Key**
3. Copy `.env.local.example` to `.env.local` and add your key:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=YOUR_KEY_HERE
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Set your live domain (for SEO)
When deployed, set `NEXT_PUBLIC_SITE_URL` to your real domain (e.g. `https://kashyaptutorial.com`). This powers canonical URLs and the sitemap.

---

## ☁️ Deploy to Vercel

1. Push this repo to GitHub
2. Go to **https://vercel.com/new**
3. Import the repository — Vercel auto-detects Next.js (no config needed)
4. In **Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` = your Web3Forms key
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`
5. Click **Deploy** ✅

That's it. Vercel handles builds, CDN, and HTTPS automatically.

---

## 📝 Adding Blog Posts

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Short SEO description"
date: "2025-03-01"
author: "Kashyap Tutorial"
tags: ["Class 10", "Study Tips"]
coverEmoji: "📚"
---

Your content here in Markdown...
```

It automatically appears on `/blog` and in the sitemap.

---

## 🎨 Customizing the Brand

Colors and fonts are in:
- `tailwind.config.ts` — color palette (navy / grey / accent)
- `src/components/Logo.tsx` — logo mark
- `public/favicon.svg` — favicon

---

## 📂 Project Structure

```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx            # Home
│   ├── courses/            # Courses page
│   ├── results/            # Results page
│   ├── about/              # About page
│   ├── contact/            # Contact + Web3Forms
│   ├── blog/               # Blog listing + [slug] posts
│   ├── sitemap.ts          # Auto sitemap
│   ├── robots.ts           # robots.txt
│   └── manifest.ts         # PWA manifest
├── components/             # Reusable UI (Navbar, Footer, etc.)
├── config/site.ts          # ⭐ ALL business content lives here
├── content/blog/           # Markdown blog posts
└── lib/                    # Blog + markdown helpers
```

---

## 🛠 Tech Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router, SSG) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Forms | Web3Forms |
| Icons | react-icons |
| Content | Markdown + gray-matter |
| Hosting | Vercel |

---

© Kashyap Tutorial & Home Tuition. All rights reserved.
