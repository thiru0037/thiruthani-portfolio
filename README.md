# Portfolio — Thiruthani Ravichandran

A production portfolio site positioning for Senior / Staff / Technical / AI Product Manager roles. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first config, no `tailwind.config.ts`)
- **next-themes** — dark/light toggle (dark is the default)
- **lucide-react** — icon set
- **@vercel/analytics** — visitor analytics (see [Analytics](#analytics) below)
- **gray-matter** + **next-mdx-remote** — parses and renders the `/blog` posts

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server hot-reloads on save.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # ESLint
npx tsc --noEmit   # type-check only
```

## Editing content

**All resume-derived content lives in `content/*.ts` — no UI code needs to change to update your professional information.** Each file is plain, typed TypeScript data:

| File | Controls |
|---|---|
| `content/profile.ts` | Name, title, contact info, summary, impact stats strip |
| `content/experience.ts` | Career timeline entries (Exterro, TCS) |
| `content/case-studies/*.ts` | The two flagship case studies (BigID, Document360) |
| `content/skills.ts` | Core strengths tags + Tools & Frameworks groups |
| `content/ai-capabilities.ts` | AI & GenAI Product Work cards |
| `content/platform-capabilities.ts` | Platform, Data & Integrations cards |
| `content/certifications.ts` | Certifications + achievements |
| `content/education.ts` | Education entry |
| `content/site-config.ts` | Nav links, social links, site metadata defaults |
| `content/video.ts` | Intro video (YouTube ID) |
| `content/blog/*.mdx` | Blog posts (see [Writing a blog post](#writing-a-blog-post)) |

Shapes for all of the above are defined in `types/content.ts`.

### Adding a new case study

1. Create `content/case-studies/<slug>.ts` exporting a `CaseStudy` object (see `bigid.ts` for the shape).
2. Add it to the array in `content/case-studies/index.ts`.

It will automatically appear in the case-study grid, get its own `/case-studies/<slug>` page, a click-to-open modal from the grid, and be included in `sitemap.xml` — no other code changes needed.

### Adding your headshot

The hero currently shows an initials monogram (no photo file exists yet). To use a real photo:

1. Add your image at `public/images/headshot.jpg`.
2. In `components/sections/hero.tsx`, pass it to the avatar:
   ```tsx
   <Avatar name={profile.name} src="/images/headshot.jpg" size={144} />
   ```

### Updating your resume PDF

Replace `public/resume.pdf` with your current resume — the hero and footer download links point there already.

### Adding an intro video

The video section (shown right under the hero) is hidden by default. To turn it on:

1. Record your video and upload it to YouTube as **unlisted** (not "public" — keeps it off search and your channel page, but anyone with your portfolio link can watch it; not "private", which would block viewers entirely).
2. Copy the video ID — the part after `v=` in the URL (e.g. `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → `dQw4w9WgXcQ`).
3. Set it in `content/video.ts`:
   ```ts
   export const introVideo: IntroVideo = {
     youtubeId: "dQw4w9WgXcQ",
     title: "A short introduction",
     description: "...",
   };
   ```

The section renders nothing at all while `youtubeId` is `null`. Once set, it shows a click-to-play thumbnail — no YouTube script or iframe loads until a visitor actually clicks play, and it uses `youtube-nocookie.com` (YouTube's privacy-enhanced embed domain).

### Writing a blog post

1. Create a new file at `content/blog/your-post-slug.mdx`.
2. Add frontmatter at the top:
   ```
   ---
   title: "Your post title"
   date: "2026-08-14"
   excerpt: "One sentence for the index page and social previews."
   tags: ["Optional", "Tags"]
   ---
   ```
3. Write the body below the frontmatter in Markdown (headings, links, lists, blockquotes, code blocks, etc. are all supported).

It appears automatically on `/blog`, gets its own page at `/blog/your-post-slug`, and is included in `sitemap.xml` — no other code changes needed. Delete or replace `content/blog/hello-world.mdx` (the placeholder post) once you've written a real one.

## Analytics

[Vercel Web Analytics](https://vercel.com/docs/analytics) is wired in (`<Analytics />` in `app/layout.tsx`) but only activates once you turn it on for the project:

1. Deploy the project to Vercel (see [Deploying](#deploying) below).
2. In the Vercel dashboard, open the project → **Analytics** tab → **Enable**.
3. Visit counts (including unique visitors per day) will start appearing after your next deploy.

**Retention caveat:** on Vercel's free Hobby plan, Web Analytics data is retained for roughly the last month — it will *not* give you true "unique visitors since the site went live" once you've been live longer than that. If you want that number to stay accurate indefinitely without upgrading to Vercel Pro, the tradeoff was flagged during development; ask if you'd like the self-hosted alternative (a small Upstash Redis-backed counter with no retention limit) built instead.

No cookies are used for this — Vercel Web Analytics counts visits using a page-load signal that resets per session rather than a persistent identifier, so no cookie-consent banner is required.

## Architecture notes

- **Case studies as modal + real page**: clicking a case-study tile opens it as a centered overlay (Next.js parallel + intercepting routes: `app/@modal/(.)case-studies/[slug]`) with its own shareable URL. Visiting that URL directly, or refreshing, renders the full standalone page (`app/case-studies/[slug]/page.tsx`) instead — both render the same `CaseStudyContent` component, so there's one source of truth for the markup.
- **Theme**: `next-themes` toggles a `.dark` class on `<html>`; Tailwind v4's `dark:` variant is wired to that class (not the OS media query) via `@custom-variant dark` in `app/globals.css`.
- **Content/presentation split**: every section component imports its copy from `content/*.ts` rather than hardcoding text, per the brief.
- **Blog**: posts are `.mdx` files under `content/blog/`, read at build time (`lib/blog.ts`) and rendered via `next-mdx-remote/rsc` — no database, no CMS. `/blog/[slug]` is statically generated per post via `generateStaticParams`.

## Deploying

### 1. Push to GitHub

```bash
cd portfolio
git add -A
git commit -m "Initial portfolio implementation"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(`git init` already ran when this project was scaffolded — skip that step if you're continuing from this repo as-is.)

### 2. Deploy to Vercel

**Option A — Vercel dashboard (recommended):**

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repository.
2. Framework preset auto-detects as Next.js — no configuration needed.
3. Click **Deploy**. Every subsequent push to `main` redeploys production automatically; every pull request gets its own preview URL.

**Option B — Vercel CLI:**

```bash
npm i -g vercel
vercel        # first run links the project and deploys a preview
vercel --prod # promotes to production
```

### 3. After deploying

- Update `content/site-config.ts` → `siteConfig.url` to your real production domain (used for canonical URLs, sitemap, and OG image metadata).
- Add a custom domain from the Vercel dashboard if desired (Project → Settings → Domains).

No environment variables are required — all content is local, and every route renders statically at build time.
# thiruthani-portfolio
