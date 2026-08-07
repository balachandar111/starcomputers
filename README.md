# Star Computer — React (Vite) Version

This is the plain React conversion of the original Next.js "Star Computer" site.
It uses **Vite + React 18 + react-router-dom + Tailwind CSS**, and has no
Next.js dependencies (no `next/image`, `next/link`, `next/navigation`, or
server components).

## What changed from the Next.js version

- **Routing**: `next/link`'s `Link` → `react-router-dom`'s `Link`. File-based
  routing (`app/products/page.tsx`, etc.) → explicit routes in `src/App.jsx`.
- **Images**: `next/image`'s `Image` → a plain `<img>`-based `AppImage`
  component (same fallback/loading behavior, no Next.js image optimization).
- **Navigation hook**: `useRouter` (`next/navigation`) → `useNavigate`
  (`react-router-dom`) in the 404 page.
- **`'use client'` directives**: removed — not needed outside Next.js.
- **TypeScript → JavaScript**: all `.tsx`/`.ts` files converted to `.jsx`/`.js`.
  Type annotations were dropped; PropTypes were not added (add if you want
  runtime type checking).
- **Metadata**: Next.js `metadata` export → a `<title>`/`<meta>` block in
  `index.html`.

## Project structure

```
star-computer-react/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx              # ReactDOM root + BrowserRouter
    ├── App.jsx                # Route definitions
    ├── data/
    │   └── starComputerData.js
    ├── components/
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── WhatsAppFloat.jsx
    │   ├── ui/
    │   │   ├── AppIcon.jsx
    │   │   ├── AppImage.jsx
    │   │   └── AppLogo.jsx
    │   ├── home/               # Home page sections
    │   ├── products/           # Products page content
    │   └── services/           # Services page content
    ├── pages/
    │   ├── Home.jsx
    │   ├── Products.jsx
    │   ├── Services.jsx
    │   └── NotFound.jsx
    └── styles/
        └── tailwind.css
```

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run preview
```

## Notes

- The `@` import alias points to `src/` (configured in `vite.config.js`).
- Update phone/email/address/WhatsApp number in
  `src/data/starComputerData.js`.
- Replace `/assets/images/app_logo.png` and `/assets/images/no_image.png`
  with real files in a `public/assets/images/` folder, or swap in your own
  logo/fallback image paths.
- All Unsplash/rocket.new image URLs are external and remain unchanged from
  the original project.
