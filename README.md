# Portfolio — Thiruthani Ravichandran

A production portfolio site positioning for Senior / Staff / Technical / AI Product Manager roles. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first config, no `tailwind.config.ts`)
- **next-themes** — dark/light toggle (dark is the default)
- **lucide-react** — icon set
- Zero other runtime dependencies

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

## Architecture notes

- **Case studies as modal + real page**: clicking a case-study tile opens it as a centered overlay (Next.js parallel + intercepting routes: `app/@modal/(.)case-studies/[slug]`) with its own shareable URL. Visiting that URL directly, or refreshing, renders the full standalone page (`app/case-studies/[slug]/page.tsx`) instead — both render the same `CaseStudyContent` component, so there's one source of truth for the markup.
- **Theme**: `next-themes` toggles a `.dark` class on `<html>`; Tailwind v4's `dark:` variant is wired to that class (not the OS media query) via `@custom-variant dark` in `app/globals.css`.
- **Content/presentation split**: every section component imports its copy from `content/*.ts` rather than hardcoding text, per the brief.

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
