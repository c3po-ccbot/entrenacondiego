# Entrena con Diego

Landing page for **Diego Jiménez**, personal trainer and healthy-habits coach. Built with Next.js 15 (App Router) and deployed on Firebase App Hosting.

## What it is

A single-page marketing site designed to convert first-time visitors into coaching clients. The page guides the user through:

1. **Hero** — headline CTA to book a free diagnostic session.
2. **Sobre Mí** — Diego's background in engineering and competitive sport.
3. **Servicios** — three coaching plans (Entrenamiento Personalizado, Asesoría Nutricional, Programa Integral 4R) that map 1:1 to the pricing tiers.
4. **Método 4R** — the four pillars behind every plan: Rigor, Resistencia, Rutina, Resultados.
5. **Contacto** — lead-capture form.

Additional pages: `/planes` (detailed pricing cards), `/faq`, `/legal`.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI components | shadcn/ui + Tailwind CSS |
| Icons | Lucide React |
| Hosting | Firebase App Hosting (`apphosting.yaml`) |
| Language | TypeScript |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/
    page.tsx          # Home (all landing sections)
    planes/page.tsx   # Detailed pricing page
    faq/page.tsx
    legal/page.tsx
  components/
    header.tsx
    footer.tsx
    sections/         # One file per landing-page section
```

## Design tokens

- **Primary**: Forest green `#228B22`
- **Background**: Light green `#F0FFF0`
- **Accent**: Dark cyan `#008B8B`
- **Headline font**: Playfair (serif)
- **Body font**: PT Sans (sans-serif)
