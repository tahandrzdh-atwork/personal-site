# Bilingual Editorial Personal Website Template (FA / EN)

A single-page, bilingual (**Persian RTL** & **English LTR**) personal portfolio and advisory website template built with vanilla **HTML, CSS, and JavaScript** — zero frameworks or build tools required.

## Features

- **Editorial High-Contrast Design**: Alternating warm cream (`#FAF3EB`) and ink black (`#070707`) bands with coral (`#E4645C`) horizontal rules and vertical accent lines.
- **Instant FA / EN Language Switcher**: Toggles `<html lang>` and `dir` (`rtl` ↔ `ltr`), persists user preference in `localStorage`, and announces state updates cleanly for screen readers.
- **CSS Logical Properties & Modern Architecture**: Uses `@layer`, CSS custom properties, `inline-size` / `margin-inline` / `border-inline-start`, fluid `clamp()` typography, and `prefers-reduced-motion`.
- **Interactive Stage-to-Form Flow**: Clicking any stage CTA pre-selects the matching stage in the contact form and smoothly scrolls to it, with accessible inline validation.
- **Ready for GitHub Pages**: Pure static files (`index.html`, `styles.css`, `script.js`, `assets/`).

## Project Structure

```text
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── placeholder-hero.jpg
│   ├── placeholder-cta.jpg
│   ├── placeholder-1.svg
│   ├── placeholder-2.svg
│   ├── placeholder-3.svg
│   └── placeholder-4.svg
└── README.md
```

## Customization

1. Replace the placeholder copy inside `index.html` and the `TRANSLATIONS` object in `script.js` (`fa` and `en` keys).
2. Replace `assets/placeholder-*` files with your own portraits or editorial visuals.
3. Update `hello@example.com`, `https://example.com`, and social links in `index.html`.
4. Connect `#contact-form` in `script.js` to your backend endpoint or form service (e.g., Formspree).

## License

MIT
