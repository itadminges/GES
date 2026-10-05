# GES Quality Education — Modern Web Platform

A production-grade, high-performance migration of **Global Education Services Company (GES® Quality Education)** (`https://www.ges.om/`) from legacy WordPress PHP to **React 18 + TypeScript + Vite**.

Engineered with frame-by-frame visual parity, full accessibility (WCAG 2.1 AA), state-of-the-art Generative Engine Optimization (GEO), comprehensive Schema.org JSON-LD structured data, and zero-compromise Core Web Vitals optimization.

---

## 📋 Table of Contents

- [Overview & Architecture](#-overview--architecture)
- [Key Features & Visual Parity](#-key-features--visual-parity)
- [Tech Stack](#-tech-stack)
- [SEO, GEO & Structured Data](#-seo-geo--structured-data)
  - [Technical SEO & Crawlability](#technical-seo--crawlability)
  - [Generative Engine Optimization (GEO)](#generative-engine-optimization-geo)
  - [Schema.org JSON-LD Hierarchy](#schemaorg-json-ld-hierarchy)
- [Accessibility & Performance](#-accessibility--performance)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Deployment Guide](#-deployment-guide)
  - [Apache / cPanel (.htaccess)](#apache--cpanel-htaccess)
  - [Nginx](#nginx)
  - [Vercel / Netlify](#vercel--netlify)
- [Content Integrity & QA Protocol](#-content-integrity--qa-protocol)
- [License & Attributions](#-license--attributions)

---

## 🏛️ Overview & Architecture

Global Education Services Company (GES®) is a premier educational management organization based in Muscat, Sultanate of Oman. GES operates renowned international private schools and early childhood education institutions, including **Al Shomoukh International Private School (SIPS)** and **Shomoukh Early Childhood Education Centers (Al Qurum & Al Mouj)**.

This modern web platform delivers:
- **Instantaneous client-side navigation** using React Router v6.
- **Flawless legacy preservation**: 100% backward-compatible redirection of legacy `.php` endpoints (`/index.php`, `/about.php`, `/schools.php`, etc.) to clean canonical routes without losing search equity or incoming links.
- **Robust static bundle generation** optimized for deployment on any modern web server, CDN, or static host.
- **Zero visible content drift**: 100% of approved branding, executive leadership profiles, school statistics, and operational pillars preserved.

---

## ✨ Key Features & Visual Parity

1. **Exact Visual & Layout Fidelity**:
   - Faithful reproduction of original brand palette (`#1F265A` deep navy, `#E53238` scarlet red, `#3365B0` royal blue).
   - High-resolution SVG banners, background textures, partner accreditations, and leadership portraits.
2. **Dynamic Header & Navigation**:
   - Smart navbar that applies `.navbar-shrink` on scroll and switches dynamically between transparent hero mode and solid internal mode.
   - Logo switching from white monochrome on hero sliders to full-color brand mark on scroll and internal pages.
   - Full-screen animated overlay menu with staggered link animations.
   - Instant search bar with real-time route query handling.
3. **Interactive Campus & Operational Showcases**:
   - **Schools Explorer**: Tabbed multi-campus view (SIPS, Shomoukh ECE Al Qurum, Shomoukh ECE Al Mouj) with interactive lightbox photo gallery.
   - **Operational Pillars**: Interactive SVG feature bulbs displaying Private Schools, Public-Private Partnerships (PPP), Licensed Schools, and Master Franchise models.
   - **Executive Profiles**: Modal dialogues highlighting Chairman and Executive Board leadership with credentials and vision statements.
4. **Interactive Engagement**:
   - Multi-purpose inquiry modal supporting meeting scheduling with dynamic date/time selectors.
   - Corporate brochure and awards document download center.
   - Dismissable GDPR/privacy policy banner with persistent local state.
   - Accessible keyboard-friendly "Skip to main content" navigation target.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Core Framework** | React 18 (Strict Mode) |
| **Language** | TypeScript 5.7 |
| **Build Tool & Bundler** | Vite 6 |
| **Routing** | React Router DOM v6 |
| **Styling & Grid** | Modern Modular CSS + Bootstrap Grid + FontAwesome 6 |
| **Icons** | Lucide React + FontAwesome SVG / Webfonts |
| **Structured Data** | Schema.org JSON-LD |
| **Automated Testing** | Custom Node.js SEO & Content Integrity Test Suites |

---

## 🔍 SEO, GEO & AEO (Answer Engine Optimization)

### Technical SEO & Crawlability
- **Self-referencing Canonical URLs**: Every page renders an explicit canonical tag matching `https://www.ges.om/<route>`.
- **Crawler Directives (`robots.txt`)**:
  - Unrestricted indexation of canonical public pages (`Allow: /`).
  - Safe disallowance of private, staging, and administrative directories (`/admin/`, `/private/`, `/api/`, `/*?*`).
  - Critical asset crawling enabled for Googlebot / Bingbot (`Allow: /assets/`, `Allow: /lib/`).
- **XML Sitemap (`sitemap.xml`)**:
  - Valid standard sitemap schema 0.9.
  - Google Image Sitemap extension (`xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"`) indexing all primary campus and leadership photography.
- **Social Graph & Sharing**:
  - Full Open Graph specification (`og:site_name`, `og:type`, `og:title`, `og:description`, `og:url`, `og:image`, `og:locale`).
  - Twitter / X card integration (`summary_large_image`).

### Generative Engine Optimization (GEO)
Designed for next-generation AI search engines (Perplexity, ChatGPT Search, Microsoft Copilot, Google AI Overviews):
- **Machine-Readable Manifests**:
  - `llms.txt`: Structured plain-text index of organization facts, leadership, locations, and key URLs.
  - `llms-full.txt`: Comprehensive entity summary for LLM context ingestion.
- **Entity Disambiguation**:
  - Persistent URI IDs (`https://www.ges.om/#organization` and `https://www.ges.om/#website`) linking all schema graphs.
  - Explicit Wikidata and Wikipedia references for institutional accreditations and governmental partners.
  - Entity-level knowledge taxonomy with `knowsAbout`, `areaServed`, and `subOrganization` links.

### Answer Engine Optimization (AEO)
Engineered for conversational AI engines, voice assistants (Siri, Google Assistant, Alexa), and featured snippet extraction:
- **`FAQPage` Schema**: Direct question-and-answer pairs matching user intent across `/`, `/about`, `/schools`, `/operational`, `/partner`, and `/contact`. All answers are strictly grounded in verified project content.
- **`SpeakableSpecification`**: Directs text-to-speech engines and voice assistants to the most relevant heading and content summaries (`cssSelector: ['h1', 'p']`).
- **Canonical Q&A in `llms.txt`**: Machine-readable answers for quick AI retrieval.

### Schema.org JSON-LD Hierarchy
The site injects rich JSON-LD graph objects across all canonical routes:

| Route | Schemas Applied | Entity Description & AEO Direct Answers |
|---|---|---|
| `/` | `EducationalOrganization`, `WebSite`, `LocalBusiness`, `VideoObject`, `FAQPage`, `SpeakableSpecification` | Core corporate entity, corporate videos, contact points, location, search action, primary entity FAQs |
| `/about` | `AboutPage`, `EducationalOrganization`, `Person`, `FAQPage`, `SpeakableSpecification` | Executive profiles (Chairman, CEO, MD, VP, Academics), ELEVATE framework Q&A |
| `/operational` | `ItemPage`, `EducationalOrganization`, `FAQPage`, `SpeakableSpecification` | 4 operational models (PPP, Private Schools, Franchising, Licensing) Q&A |
| `/schools` | `CollectionPage`, `School`, `Preschool`, `FAQPage`, `SpeakableSpecification` | SIPS (British Curriculum) & Shomoukh ECE centers (Reggio Emilia) Q&A |
| `/partner` | `WebPage`, `EducationalOrganization`, `FAQPage`, `SpeakableSpecification` | Accreditation partners (Cognia, ECIS, Ministries) Q&A |
| `/careers` | `WebPage`, `Organization`, `SpeakableSpecification` | Recruitment process, hiring entity details, application steps |
| `/news` | `CollectionPage`, `NewsArticle`, `SpeakableSpecification` | Press releases, corporate announcements, and educational impact stories |
| `/contact` | `ContactPage`, `LocalBusiness`, `ContactPoint`, `FAQPage`, `SpeakableSpecification` | Geocoordinates, telephone, physical address, office hours, meeting booking Q&A |

---

## ♿ Accessibility & Performance

- **WCAG 2.1 AA Compliance**:
  - Top-level landmarks: `<header>`, `<nav>`, `<main id="main-content">`, `<footer>`.
  - Accessible "Skip to content" link for keyboard users.
  - Descriptive `aria-label` attributes on modal toggles, search inputs, and mobile menus.
  - Appropriate contrast ratios across typography and actionable controls.
- **Core Web Vitals Optimization**:
  - **LCP (Largest Contentful Paint)**: Hero banners preloaded with `fetchpriority="high"`.
  - **CLS (Cumulative Layout Shift)**: Explicit image dimensions and layout wrappers to eliminate layout shifts.
  - **Font Performance**: `font-display: swap` applied to custom webfonts.
  - **Asset Hygiene**: Elimination of all orphaned Illustrator files, redundant ZIP archives, and unreferenced assets.

---

## 📁 Project Structure

```
Ges.om/
├── public/                       # Static public assets served directly
│   ├── assets/
│   │   ├── css/                  # Compiled styles, vendor CSS & font stylesheets
│   │   ├── downloads/            # Verified brochures & public PDFs
│   │   ├── fonts/                # Webfonts (FontAwesome, Flaticon, webfonts)
│   │   ├── img/                  # Optimized photography, brand marks, and icons
│   │   └── js/                   # Legacy script vendor dependencies
│   ├── .htaccess                 # Apache rewrite & redirect configuration
│   ├── favicon.ico               # Brand favicon
│   ├── llms.txt                  # AI / LLM summary manifest
│   ├── llms-full.txt             # AI / LLM full context document
│   ├── robots.txt                # Crawler directives
│   └── sitemap.xml               # Canonical XML sitemap with image extensions
├── src/
│   ├── components/               # Reusable React components
│   │   ├── Footer.tsx            # Global footer with accreditation badges & links
│   │   ├── Header.tsx            # Sticky navigation, logo switcher, mobile menu
│   │   ├── Modals.tsx            # Contact, Downloads, and Policy modals
│   │   ├── Preloader.tsx         # Wave preloader component
│   │   ├── ScrollTop.tsx         # Floating scroll-to-top trigger
│   │   └── SEOHead.tsx           # Dynamic head tag & JSON-LD schema injector
│   ├── data/
│   │   └── seoData.ts            # Canonical metadata & Schema.org JSON-LD definitions
│   ├── pages/                    # Canonical page routes
│   │   ├── About.tsx             # About GES & Leadership profiles
│   │   ├── Careers.tsx           # Careers & 6-step recruitment process
│   │   ├── Contact.tsx           # Contact form, Google Maps & address details
│   │   ├── Home.tsx              # Landing page, stats, video story, chairman note
│   │   ├── News.tsx              # News feed & impact articles
│   │   ├── Operational.tsx       # 4 operational models & features
│   │   ├── Partner.tsx           # Partnership models & accreditations
│   │   └── Schools.tsx           # Multi-campus showcase & lightbox gallery
│   ├── App.tsx                   # Route definitions & legacy .php redirects
│   ├── index.css                 # Global styling overrides
│   └── main.tsx                  # React entry point
├── scripts/
│   ├── validate_seo.js           # Automated SEO, Schema, and asset auditor
│   └── verify_content_integrity.js # Content regression & copy preservation checker
├── dist/                         # Production build distribution directory
├── .gitignore                    # Production git ignore specification
├── index.html                    # Root HTML document with critical meta & JSON-LD
├── package.json                  # Dependencies and execution scripts
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### Installation
Clone the repository and install dependencies:
```bash
git clone git@github.com-itadminges:itadminges/GES.git
cd GES
npm install
```

### Local Development
Start the local development server with hot module reloading:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Launches local Vite development server with HMR. |
| `npm run build` | Runs TypeScript compilation (`tsc`) and bundles optimized static assets into `dist/`. |
| `npm run preview` | Locally serves the compiled production build from `dist/` for verification. |
| `npm run test:seo` | Runs the automated SEO, Schema.org, and Content Integrity verification suite. |

---

## 🌐 Deployment Guide

### Apache / cPanel (.htaccess)
The included `public/.htaccess` automatically configures URL rewriting for Single Page Applications (SPA) and handles 301 permanent redirects for legacy `.php` routes:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Redirect legacy .php URLs
  RewriteRule ^index\.php$ / [R=301,L]
  RewriteRule ^about\.php$ /about [R=301,L]
  RewriteRule ^operational\.php$ /operational [R=301,L]
  RewriteRule ^schools\.php$ /schools [R=301,L]
  RewriteRule ^partner\.php$ /partner [R=301,L]
  RewriteRule ^careers\.php$ /careers [R=301,L]
  RewriteRule ^news\.php$ /news [R=301,L]
  RewriteRule ^contact\.php$ /contact [R=301,L]

  # Route all other requests to index.html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Nginx
```nginx
server {
    listen 80;
    server_name ges.om www.ges.om;
    root /var/www/ges.om/dist;
    index index.html;

    # Legacy 301 redirects
    location = /index.php { return 301 /; }
    location = /about.php { return 301 /about; }
    location = /operational.php { return 301 /operational; }
    location = /schools.php { return 301 /schools; }
    location = /partner.php { return 301 /partner; }
    location = /careers.php { return 301 /careers; }
    location = /news.php { return 301 /news; }
    location = /contact.php { return 301 /contact; }

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }
}
```

### Vercel / Netlify
For Vercel or Netlify, the application works out of the box with `npm run build` using `dist` as the publish directory. Client-side routing is handled through standard rewrite configuration.

---

## 🛡️ Content Integrity & QA Protocol

To guarantee that no approved visible copy, contact information, leadership credentials, or statistics are accidentally altered during future development, the repository includes an automated content integrity gate:

```bash
npm run test:seo
```

This gate runs two automated verification suites:
1. **`validate_seo.js`**: Audits `robots.txt`, `sitemap.xml`, `llms.txt`, JSON-LD schemas, canonical tags, Open Graph meta tags, Twitter cards, and image asset accessibility.
2. **`verify_content_integrity.js`**: Verifies exact presence of 39 critical business copy strings across all components and page templates without false positives.

---

## 📄 License & Attributions

Copyright © Global Education Services Company (GES®). All rights reserved.  
Branding, campus media, trademarks, and corporate content belong strictly to Global Education Services Company.
