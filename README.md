# GES Quality Education — React + Vite Modern Platform

This project is a modern, frame-by-frame, high-performance migration of **Global Education Services Company (GES® Quality Education)** (`https://www.ges.om/`) from legacy WordPress PHP to **React 18 + Vite + TypeScript**.

---

## 🌟 Exact Frame-by-Frame Parity & Features

1. **Exact Visual & Layout Parity**:
   - Replicated every frame, color scheme (`#1F265A`, `#E53238`, `#3365B0`), typography, responsive margins, and animations.
   - All 117+ media assets (background images `bg-1.jpg`, `bg-2.jpg`, `bg-3.jpg`, `bg-4.jpg`, logos, campus photography, leadership headshots, accreditation badges, and SVGs) downloaded and preserved directly from `ges.om`.

2. **Universal Preloader**:
   - Exact 3-dot wave preloader animation (`.preloader .js-preloader .dots .dot`) with smooth unmount and fade out.

3. **Dynamic Header & Navigation**:
   - Fixed top navbar with original classes `#mainNav` and `.navbar-shrink` on scroll.
   - Automatic logo switching: white logo `ges-logo.png` over hero, colored logo `ges-logo-internal.png` on scroll > 150px and on all internal pages.
   - Fixed positions for `.logo`, `form.search`, and `.open` matching the original layout.
   - Staggered full-screen animated overlay menu with clean close button and active states.
   - Interactive search bar routed to search query filter.

4. **Interactive Pages**:
   - **Homepage (`/` & `/index.php`)**: Hero CSS slider with 4 animated slides and circle ripples (`moving-circles`), news flash impact ticker, 4 statistical radius cards (+5000 students, +700 employees, +100 alumni, 4 schools), Chairman statement with expandable reader, 3D rotating Vision/Mission/Values carousel, and video story scroller with SVG spinner rings.
   - **About GES (`/about` & `/about.php`)**: Company narrative, 6 executive leadership profiles (Sarah Saeed, Sheikha Jinan, Sheikha Janat, Sheikh Julanda, Shanmuganand Hariharan, Randa Al Ahmadieh), and campus doors with interactive detail popups.
   - **Our Operational Models (`/operational` & `/operational.php`)**: Complete Management overview, 10 feature bulbs with SVG bulb backdrops, and 4 operational pillars (Private Schools, PPP, Licensed Schools, Master Franchise).
   - **Our Schools (`/schools` & `/schools.php`)**: Interactive multi-campus switcher for SIPS, Shomoukh ECE Al Qurum, and Shomoukh ECE Al Mouj, with photo galleries and click-to-zoom lightbox modal.
   - **Partner With Us (`/partner` & `/partner.php`)**: Partner models, video mask background, brand logos, and accreditation bodies (Ministry of Education, Manpower, MOSD, Cognia, ECIS).
   - **Careers (`/careers` & `/careers.php`)**: Recruitment narrative and 6-step alternating process timeline (Step 01 to Step 06) with links to careers portal.
   - **In The News / Our Impact (`/news` & `/news.php`)**: Categorized news tabs (Latest, Popular, International, Local), live keyword search filtering, and external article links.
   - **Contact Us (`/contact` & `/contact.php`)**: Interactive Google Maps embed, postal & dialing details, and dynamic inquiry form with conditional Date & Time range selector for "Meeting Requests".

5. **Universal Modals**:
   - Downloads modal (corporate brochure PDF, awards PDF).
   - Terms & Conditions modal.
   - Privacy Policy modal.
   - Cookies Policy modal.
   - Campus detail popups & Video lightbox modal.
   - Dismissable Cookie Consent banner (`.noti-policy`).
   - Smooth Scroll-to-top floating button.

---

## 🛠️ Technology Stack

- **Framework**: React 18 + Vite 6
- **Language**: TypeScript
- **Routing**: React Router DOM (v6) with clean paths and backward-compatible `.php` routes
- **Styles**: Custom Original CSS + Bootstrap Grid + FontAwesome 6

---

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
The site runs at `http://localhost:5173`.

### 3. Production Build
```bash
npm run build
npm run preview
```
# GES
