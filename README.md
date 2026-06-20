# Rached Mohammed Abdessettar — Portfolio

A premium, multilingual (English / French / Arabic) personal portfolio built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Before going live — replace these placeholders

1. **Profile photo**: `public/profile-picture.png` already contains your photo. Replace it with a higher-resolution square image if you have one (the layout crops it to a circle).

2. **WhatsApp number** — in `components/Hero.tsx` and `components/Footer.tsx`, replace:
   ```ts
   const WHATSAPP_NUMBER = "213XXXXXXXXX";
   ```
   with your real number in international format, digits only (e.g. `213551234567`).

3. **Video chat link** — in the same two files, replace:
   ```ts
   const MEETING_LINK = "https://meet.google.com/your-meeting-code";
   ```
   with your real Google Meet, Zoom, Cal.com, or Calendly link.

4. **Contact email** — in `components/Footer.tsx`, replace `EMAIL = "contact@example.com"`.

5. **Project content** — `data/projectsData.json` contains realistic placeholder projects across AI/ML, Simulation, and Full-Stack categories (3 marked `featured: true` for the showcase grid). Edit titles, descriptions (in `en`/`fr`/`ar`), tags, icons, and links (`demo`/`repo`) to match your real work. Available icons are listed in `components/ProjectIcon.tsx` (from `lucide-react`) — add more there if needed.

6. **Project demo/repo links** — currently `#` placeholders inside `data/projectsData.json`.

## Languages

- The site supports English, French, and Arabic via the switcher in the top navigation.
- Arabic automatically switches the page to right-to-left (RTL) layout.
- The selected language is remembered (saved in the browser's local storage).
- All translatable text lives in `lib/i18n/translations.ts` — edit values there to change copy in any language. Project titles/descriptions are translated per-project inside `data/projectsData.json`.

## Project structure

```
app/
  layout.tsx        # Root layout, fonts, language provider
  page.tsx          # Composes all sections
  globals.css        # Global styles, theme tokens
components/
  Nav.tsx            # Sticky nav + language switcher
  Hero.tsx           # Centered portrait + name/title + CTAs
  Credentials.tsx    # Academic dossier timeline
  FeaturedProjects.tsx
  ProjectLibrary.tsx # Filterable project archive
  ProjectCard.tsx
  ProjectIcon.tsx
  FounderBio.tsx
  Footer.tsx
  LanguageSwitcher.tsx
data/
  projectsData.json  # All project content (multilingual)
lib/
  types.ts
  i18n/
    translations.ts        # EN/FR/AR dictionaries
    LanguageContext.tsx     # React context + persistence
```

## Color palette

- Deep Navy Blue `#0A192F` — primary background/trust
- Charcoal Grey `#333333` — secondary balance
- Burnished Gold `#B8860B` — accents, borders, CTAs
