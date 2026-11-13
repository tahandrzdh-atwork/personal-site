# Bilingual Editorial Personal Website & SEO Article Publishing Template (FA / EN)

A single-page, bilingual (**Persian RTL** & **English LTR**) personal portfolio and advisory website template with an integrated **SEO-Optimized Article Publishing Suite** built with vanilla **HTML5, CSS3, and JavaScript** — zero build tools or dependencies required.

## Features

- **Editorial High-Contrast Design**: Alternating warm cream (`#FAF3EB`) and ink black (`#070707`) surfaces with coral (`#E4645C`) architectural dividers.
- **Instant FA / EN Language Switcher**: Toggles `<html lang>` and `dir` (`rtl` ↔ `ltr`) seamlessly across homepage and article pages, saved in `localStorage`.
- **Admin Visual Customizer & Live Inline Editor Suite**:
  - **Floating Admin Dock**: Quick-access bottom dock (or toggle with `Ctrl + Shift + E` / `Cmd + Shift + E`) to manage and edit every aspect of the site.
  - **Live Direct Inline Editing (`contenteditable`)**: Click and type directly on any heading, paragraph, button, stage card, or brand tagline in the live page with visual focus outlines.
  - **Full Customizer Drawer (`<dialog>`)**: Off-canvas settings panel covering:
    - 🎨 **Theme & Styling**: Custom primary accent color picker with palette presets (Coral, Crimson, Amber, Emerald, Cobalt, Royal Purple, Slate), background tone switcher (Cream Editorial, Dark Charcoal, Pure White), and font scale multiplier.
    - 👤 **Hero & Brand Identity**: First/Last name, eyebrow tag, main H1, lead paragraph, CTA buttons, and hero image upload (Base64 file reader or URL).
    - 🧭 **6 Collaboration Stages**: Real-time editor for all 6 stage titles, strip numbers, and comprehensive body descriptions.
    - 💼 **Showcase & Manifesto**: Portfolio headings, manifesto statements, proof box copy, button label, and showcase destination link (`https://rabean.agency`).
    - 🤝 **Partner Brands**: Edit brand names and industry tags across all 6 partner slots.
    - 📬 **Footer & Contact**: Contact title, displayed email (`info@mmlalezari.ir`), personal P.S. note, social links, and copyright text.
  - **Persistence & Export**:
    - Automatic `localStorage` saving (persists across reloads and pages).
    - **One-click "Download Published HTML"**: Exports clean, self-contained, standalone `.html` with all edits baked in, ready to deploy.
    - JSON configuration export and import for seamless site backups.
- **Integrated Article & SEO Studio (`article.html`)**:
  - **Article Title & H1 Hierarchy**: Semantic heading tags with natural query styling.
  - **Answer Nugget / TL;DR**: 40–80 word direct answer blocks optimized for Generative Engine Optimization (**GEO 2026** / ChatGPT / Perplexity / Gemini).
  - **Responsive Comparison Data Table**: Styled with `<caption>`, accessible table headers (`scope="col"` / `scope="row"`), and horizontal scroll container.
  - **Semantic Linking**: Stylized internal links (`link-internal`) and secure outbound citations (`link-external` with `rel="noopener noreferrer"`).
  - **Google SERP Snippet Preview**: Real-time interactive simulation of desktop & mobile Google search result snippets (URL breadcrumb, blue title link, description with highlighted keywords).
  - **Live Rank Math-style SEO Scorecard (0–100)**: Real-time checks for focus keyword in title, meta description length (130–158 chars), title length (<60 chars), lead density, tables, links, and schema.
  - **Structured Data / Schema.org**: Ready-to-index JSON-LD for `Article`, `BreadcrumbList`, and `FAQPage`.
  - **Import / Export**: Upload articles via JSON or export clean SEO JSON and self-contained HTML.
- **Interactive Stage-to-Form Flow**: Smooth scroll and automatic stage pre-selection in contact form with inline accessible validation.
- **Ready for GitHub Pages**: 100% static files.

## Project Structure

```text
├── index.html              # Homepage with 6 collaboration stages, portfolio & article teaser
├── article.html            # Production SEO article template + Interactive SEO Studio Drawer
├── styles.css              # Modern CSS layout with @layer, CSS tokens, responsive tables & dark theme
├── script.js               # Bilingual i18n dictionary, live SEO analyzer & SERP simulator
├── assets/                 # Editorial & geometric placeholder visuals
│   ├── placeholder-hero.jpg
│   ├── placeholder-cta.jpg
│   ├── placeholder-1.svg
│   ├── placeholder-2.svg
│   ├── placeholder-3.svg
│   └── placeholder-4.svg
└── README.md
```

## How to Publish & Optimize an Article

1. Open `article.html` in any modern browser.
2. Click **⚡ استودیو سئو و بارگذاری مقاله** (or **SEO & Article Studio** in English).
3. Enter your:
   - **عنوان مقاله (Article Title)** & **پیوند یکتا (Slug)**
   - **کلمه کلیدی اصلی (Focus Keyword)** & کلمات فرعی (LSI)
   - **عنوان اسنیپت (Snippet Title)** — keep it under 60 characters
   - **توضیحات اسنیپت (Meta Description)** — keep it between 130 and 158 characters
   - **متن لید، جدول و لینک‌ها**
4. Observe the live **Google SERP Snippet Preview** and **Rank Math SEO Score**.
5. Click **✓ اعمال زنده روی مقاله** to see your article instantly formatted and its JSON-LD schema generated.
6. Click **📄 استخراج کد کامل HTML مقاله** or **📥 استخراج داده‌های سئو (JSON)** to save or publish.

## License

MIT
