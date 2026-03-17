# Innovative Holdings

A premium, enterprise-level consulting firm website built for lead generation. Strategic consulting and operational advisory positioning.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (animations)
- **React Hook Form** + **Zod** (form validation)
- **Lucide React** (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

### Vercel Deployment

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy (automatic with Next.js)

Or deploy via CLI:

```bash
npx vercel
```

## Project Structure

```
src/
├── app/                 # App Router pages
│   ├── page.tsx         # Home
│   ├── services/
│   ├── case-studies/
│   ├── industries/
│   ├── insights/        # Blog + [slug]
│   ├── resources/       # Lead magnets
│   ├── about/
│   ├── careers/
│   ├── contact/
│   └── [consulting-slug]/  # SEO pages (strategy-consulting, etc.)
├── components/
│   ├── conversion/       # Sticky CTA, Exit Intent
│   ├── forms/           # Careers, Contact forms
│   ├── layout/          # Header, Footer
│   ├── pages/           # Page-specific content
│   ├── sections/        # Reusable sections
│   └── ui/              # Base UI components
└── lib/                 # Constants, utils
```

## Forms Integration

Forms (Contact, Careers, Newsletter) currently simulate submission. To enable:

1. **Email**: Use [Resend](https://resend.com), [Formspree](https://formspree.io), or similar
2. **Database**: Add Supabase, Vercel Postgres, or your preferred backend
3. Update `onSubmit` handlers in form components

## SEO

- Meta titles and descriptions on all pages
- OpenGraph tags
- Organization and Article schema (JSON-LD)
- Sitemap at `/sitemap.xml`
- Robots at `/robots.txt`

## Design

- **Colors**: Deep navy (#0a1628), electric blue accent (#2563eb), soft grays
- **Typography**: Source Serif 4 (display), Source Sans 3 (body)
- **Style**: Minimal, corporate, premium—inspired by McKinsey, BCG, Deloitte
