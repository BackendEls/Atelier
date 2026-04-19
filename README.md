# Backend Atelier — One-Page Consultancy Website

Premium single-page Next.js + Tailwind website for **Backend Atelier**.

## Stack
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- TypeScript

## Setup
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

## Build for production
```bash
npm run build
npm run start
```

## Asset setup (important)
Place the provided brand logo files in `/public` using these exact names:
- `public/logo-wordmark-dark.svg`
- `public/logo-badge-dark.svg`
- `public/logo-icon-dark.svg`

The code already references these paths directly.

## Editing guide
### Colours
Update brand colors in:
- `app/globals.css` (`:root` custom properties)
- `tailwind.config.ts` (`theme.extend.colors.atelier`)

### Copy
Main page copy lives in `app/page.tsx`.

### Services
Service card titles/descriptions/tags are in the `services` array in:
- `app/components/ServiceCards.tsx`

### Footer
Footer structure/content is in:
- `app/page.tsx` (the `<footer id="contact">` section)

### Browser tab text swap
Editable in:
- `app/components/VisibilityTitle.tsx`
  - `defaultTitle`
  - `awayTitle`

### Logo asset paths
All logo paths are referenced in:
- `app/layout.tsx` (favicon icon)
- `app/page.tsx` (wordmark + badge usage)

## Notes
- Designed to deploy cleanly on Vercel.
- Includes smooth scroll, micro-interactions, layered service cards, and scroll reveal animation.
- If logos are missing from `/public`, images may show as broken until assets are added.
