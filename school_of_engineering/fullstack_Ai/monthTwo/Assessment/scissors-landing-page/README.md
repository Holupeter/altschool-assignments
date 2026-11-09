# Scissors — URL Shortening & Brand Management Platform

> **AltSchool Africa | School of Engineering**  
> **Course**: Fullstack Engineering  
> **Milestone**: Month Two Assessment  
> **Live Landing Page**: [Scissor Landing Page](https://holupeter.github.io/altschool-assignments/school_of_engineering/fullstack_Ai/monthTwo/Assessment/scissors-landing-page)  

---

## 📌 Project Overview

**Scissors** is a modern, high-conversion URL shortening and link management landing page built from scratch with semantic **HTML5** and modern **CSS3**, following a comprehensive Figma design specification down to the pixel. 

The landing page showcases a SaaS solution that empowers individuals and businesses to personalize shortened URLs, generate dynamic QR codes, track click analytics, and protect branded links with custom domains.

---

## 🚀 Key Features & Sections

### 1. Navigation & Header
- **Branded Identity**: Logo with authentic icon and divider styling.
- **Desktop Navigation**: Links with interactive states for *My URLs*, *Features* (with chevron dropdown), *Pricing*, *Analytics*, and *FAQs*.
- **Authentication CTAs**: Dual button layout for *Log in* and high-emphasis *Try for free*.

### 2. Hero Section
- **Dynamic Headline**: High-impact typography with custom curved SVG underline (`url-line.svg`) highlighting **URL Shortening**.
- **Engaging Value Proposition**: Focused copy explaining branded links, custom slugs, and domain personalization.
- **Glassmorphic Preview Card (Frame 29546)**:
  - Custom multi-stage chain link transformation visual (`links.svg`).
  - Organic decorative background spectrum shape (`spectrum.svg`).
  - Native CSS glassmorphism effect using `backdrop-filter: blur(212px)`, translucent borders, and subtle drop shadows.
- **3D Perspective Pedestal**:
  - Perspective floor ramp (`Rectangle.svg`) in `#F8F7F7`.
  - Illuminated platform ellipse (`Ellipse.svg`) with linear gradient and soft ground shadow.

### 3. Possibilities / Metrics Counter
- **Stats Banner**: Highlights platform reach with 4 key metrics:
  - **3M** Active users
  - **60M** Links & QR codes created
  - **1B** Clicked & Scanned connections
  - **300k** App Integrations
- Clean column hierarchy with custom `#005AE2` brand blue highlight.

### 4. "Why Choose Scissors" Feature Matrix
- **Introductory Column**: Lead heading with an authentic vertical gradient accent indicator.
- **2×2 Interactive Feature Grid**:
  - **URL Shortening**: Fast, reliable link shortening.
  - **Custom URLs**: Personalized branded slugs.
  - **QR Codes**: Shareable QR codes for multi-channel campaigns.
  - **Data Analytics**: Real-time click tracking, geolocation, and referrer insights.
- Dual-tone inline SVG iconography and subtle hover card transitions.

### 5. Pricing Plans
- **3-Tiered Responsive Card System**:
  - **Basic (Free)**: Unlimited URL shortening, basic analytics, and community support.
  - **Professional ($15/month)**: **Recommended / Elevated Tier** with a sleek `#1E3448` gradient background, white checkmark icons, custom domain branding, and advanced analytics.
  - **Teams ($25/month)**: Team workspaces, API access, and dedicated support.
- Custom checkmark indicators (blue on light tiers, crisp white on the featured tier).

### 6. Interactive Trim URL Section
- **Form Card Layout**:
  - URL input field (`Paste URL here...`).
  - Domain selector dropdown (`tiny.one`, `chop.url`, `trim.link`, etc.).
  - Custom alias input (`Type Alias here`).
  - **Trim URL Button** with an authentic magic wand icon (`magic wand.png`).
- Ambient curved background ribbons (`trim-left.svg` & `trim-right.svg`).
- Embedded legal and privacy policy disclaimer.

### 7. Frequently Asked Questions (FAQs)
- Built using native semantic `<details>` and `<summary>` elements for zero-dependency accessible accordions.
- CSS-driven animated `+` and `−` toggle indicators.
- Ambient wave decorations (`top-left.svg` and `bottom-right.svg`) and vertical title accent line (`line.svg`).

### 8. Comprehensive Footer
- **Structured 4-Column × 2-Row CSS Grid**:
  - Ensures *Resources*, *Features*, and *Legal* align across the exact same horizontal baseline regardless of column item counts.
  - Column 1: Scissors brand logo, bio, and social icon links (Twitter/X, Instagram, LinkedIn, Facebook).
  - Column 2: *Why Scissor ?* and *Resources*.
  - Column 3: *Solutions* and *Features*.
  - Column 4: *Products* and *Legal*.
- Glowing ambient corner vectors (`footer-glow-left.svg` and `footer-glow-right.svg`).
- Bottom bar with legal disclaimers, terms, security links, and copyright text.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<details>`, `<summary>`, `<footer>`) |
| **CSS3** | Modern styling, CSS Custom Properties (Variables), Flexbox, CSS Grid, Glassmorphism, animations |
| **Gilroy Font Family** | Custom local `@font-face` typography (Regular, Medium, SemiBold, Bold) |
| **Vector Graphics (SVG)** | Resolution-independent graphic assets exported from Figma |

---

## 📂 Project Directory Structure

```text
scissors-landing-page/
├── index.html                   # Semantic markup of the landing page
├── style.css                    # Master stylesheet (variables, components, responsive rules)
├── README.md                    # Project documentation
└── assets/
    ├── fonts/                   # Local Gilroy font assets
    │   ├── Gilroy-Bold.ttf
    │   ├── Gilroy-Medium.ttf
    │   ├── Gilroy-Regular.ttf
    │   └── Gilroy-SemiBold.ttf
    └── image/                   # Organized SVG & PNG visual assets
        ├── hero/                # Header logo, links graphic, spectrum, pedestal SVGs
        │   ├── header-logo.png
        │   ├── links.svg
        │   ├── spectrum.svg
        │   ├── url-line.svg
        │   ├── Rectangle.svg
        │   └── Ellipse.svg
        ├── trimUrl/             # Trim section waves & magic wand icon
        │   ├── magic wand.png
        │   ├── trim-left.svg
        │   └── trim-right.svg
        ├── faq/                 # FAQ background ribbons & header line
        │   ├── line.svg
        │   ├── top-left.svg
        │   └── bottom-right.svg
        └── footer/              # Social media icons & glow ribbons
            ├── Vector.png
            ├── i.fi-social-twitter.png
            ├── svg.feather.png
            ├── i.fi-social-linkedin.png
            ├── i.fi-social-facebook.png
            ├── footer-glow-left.svg
            └── footer-glow-right.svg
```

---

## 💻 Getting Started Locally

To run this project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Holupeter/altschool-assignments.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd altschool-assignments/school_of_engineering/fullstack_Ai/monthTwo/Assessment/scissors-landing-page
   ```

3. **Launch the landing page**:
   - Double click `index.html` to open it in your browser, or
   - Use VS Code **Live Server** extension: Right-click `index.html` → *Open with Live Server*.

---

## 📱 Responsive Breakpoints

The stylesheet includes fine-tuned responsive media queries to ensure smooth scaling:
- **Desktop**: $\ge 1200\text{px}$ (full 1440px canvas layout)
- **Small Desktop / Laptop**: $1024\text{px} - 1199\text{px}$
- **Tablet**: $768\text{px} - 1023\text{px}$
- **Mobile**: $\le 767\text{px}$ (single-column flex layouts, optimized tap targets, fluid font sizes)

---

## 👤 Author

- **Peter O.** ([@Holupeter](https://github.com/Holupeter))
- **Program**: AltSchool Africa — School of Engineering

---

## 📄 License & Attribution

This project is created for educational assessment purposes under the **AltSchool Africa** software engineering curriculum. Original UI/UX design belongs to the provided Figma prototype.
