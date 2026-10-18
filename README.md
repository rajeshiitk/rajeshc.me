# rajeshiitk.github.io

My personal portfolio: who I am, what I own at work, and the products I build on my own.

**Live:** [rajeshiitk.github.io](https://rajeshiitk.github.io/) · [rajeshch.vercel.app](https://rajeshch.vercel.app)

## What's on the page

- **Hero:** role, location, education, current job, resume download and social links.
- **Skills:** the languages and tools I use day to day.
- **Experience:** my work at K12 Techno Services, one block per product I own (BASE, Eduvate Admin, Orchids School Connect, MySchoolGate, Eduvate B2B) plus my role across the mobile team.
- **Products I've built:** LumaCaption, Blinzo and SwishCut, each with a screenshot that turns to colour on hover.
- **Contact:** email, phone and location with one-click copy, and a contact form that emails me.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) with React 19 and TypeScript
- [Tailwind CSS](https://tailwindcss.com) with [shadcn/ui](https://ui.shadcn.com) components
- [Framer Motion](https://www.framer.com/motion/) for the entrance animations
- [next-themes](https://github.com/pacocoursey/next-themes) for dark and light mode
- [Web3Forms](https://web3forms.com) for the contact form, so there is no backend to run

## Run it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Edit the content

Almost everything lives in one file, `src/lib/data.ts`:

- `experience`: role, dates, summary, and each product's description, points and tags.
- `projects`: title, tagline, description, screenshot, link, tags and hover glow colour (`accent`).

Other places:

| What | Where |
| --- | --- |
| Name, title, location, education | `src/components/hero.tsx` |
| Skills list | `src/components/Skills.tsx` |
| Contact details | `src/components/contact/contact-info.tsx` |
| Contact form access key | `src/components/contact/contact-form.tsx` |
| Profile photo | `src/assets/profile.jpg` |
| Resume PDF | `public/resume.pdf` |
| Project screenshots | `public/*.png` (1440×900) |
| Colours and font size | `src/app/globals.css` |

## Deployment

The site deploys to two places from `main`:

- **GitHub Pages:** `.github/workflows/pages.yml` builds a static export and publishes it on every push. The export settings in `next.config.ts` only apply when `GITHUB_PAGES=true`. The workflow fills in the base path, which is empty here because this is the `rajeshiitk.github.io` user site.
- **Vercel:** builds the normal Next.js app with image optimisation. It ignores the Pages settings.

To test the Pages build locally:

```bash
GITHUB_PAGES=true npm run build
npx serve out
```

The output lands in `out/`.
