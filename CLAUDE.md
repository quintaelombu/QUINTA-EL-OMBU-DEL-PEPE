# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

Static HTML landing page for **Quinta El Ombú del Pepe**, a vacation rental / event venue in Pocito, San Juan, Argentina. Despite having Next.js in `package.json`, the site is deployed as a **pure static site** via Vercel — the `vercel.json` points directly to the `public/` directory with no framework involved.

The entire website lives in a single file: **`public/index.html`** (inline CSS + inline JS, no build step).

## Deployment

Deployed automatically on push to `main` via Vercel. The build config is:

```json
{ "outputDirectory": "public", "framework": null, "installCommand": "", "buildCommand": "" }
```

No build command is needed. Changes to `public/index.html` or assets in `public/` go live immediately after pushing.

## Site structure (`public/index.html`)

Single-page layout with these sections (navigated via anchor links):

| Anchor | Section |
|--------|---------|
| `#inicio` | Hero — full-screen image (`portada.jpg`), logo, heading, CTA |
| `#galeria` | Photo gallery — 28 images from `public/galeria/1.jpg` … `28.jpg`, rendered by JS loop, with lightbox |
| `#precios` | Pricing — 3 cards (Opción Evento $300k, Evento+Alojamiento $500k, Alojamiento Familiar $300k) |
| `#reservas` | Reservations — WhatsApp button to `+54 264 506-4711` |
| `#como-llegar` | Map — embedded Google Maps iframe |
| `opiniones` | Testimonials — links to Google Form and Google Sheet |

**JS behaviors** (all inline at bottom of `<body>`):
- Navbar scroll class toggle
- Gallery grid built dynamically (`for i=1..28`)
- Lightbox open/close
- Scroll-reveal via `IntersectionObserver` (`.reveal` → `.visible`)

## Assets

- `public/portada.jpg` — hero background image
- `public/quinta_ombu_logo_blanco.png` — white logo used in navbar, hero, and footer
- `public/galeria/1.jpg` … `28.jpg` — gallery photos (add more by incrementing the loop limit in the JS)
- `logo/` — working copies of logo files (not served by the site directly)

## Adding gallery photos

1. Add the new image as `public/galeria/29.jpg` (next sequential number).
2. In `public/index.html`, find the JS loop `for(let i=1;i<=28;i++)` and change `28` to the new total.

## Colors / brand palette

| Use | Value |
|-----|-------|
| Primary green | `#3a6b35` |
| Light green | `#5a9e52` |
| Background warm | `#fdf6ec` |
| Gold accent | `#c8922a` |
| Dark text | `#2c2c2c` |

Fonts: **Playfair Display** (headings, italic accents) + **Nunito** (body) — loaded from Google Fonts.

## Contexto de negocio

- Venue de eventos y alquiler vacacional en Pocito, San Juan. Capacidad hasta 60 personas.
- **Logo oficial**: fondo negro, texto blanco "QUINTA El Ombú" en tipografía script, ícono de ombú blanco, "Del Pepe" debajo.
- **Administradora de redes sociales**: Silvina.
- **Estilo de diseño preferido**: minimalista, sin cajas opacas sobre las fotos, texto blanco con sombra sutil.
