# Chatter — Modern Blogging & Text-Based Content Platform

> **AltSchool Africa | School of Engineering**  
> **Track**: Fullstack Engineering (Fullstack AI)  
> **Course Milestone**: First Semester Capstone Project 
> **Live Landing Page**: [Scissor Landing Page](https://holupeter.github.io/altschool-assignments/school_of_engineering/fullstack_Ai/monthThree/firstSemsterProject)
> **Figma Design Reference**: [View Figma Design](https://www.figma.com/design/TXzuoMAwGEIfWcAq0HbBNY/purposed?node-id=7-8&t=jNjEkb4uN89t0mLm-1) 


---

## 📌 Project Overview

**Chatter** is a modern publishing and community landing page built with semantic **HTML5** and **CSS3**, translated 1:1 from a desktop **Figma design specification** (1440px canvas). The platform provides writers and readers with an intuitive space to publish markdown articles, track readership metrics, and engage in meaningful discussions.

---

## 🎨 Section Breakdown & Specifications

### 1. Header & Navigation (`Frame 2`)
* **Bar Height & Border**: `98px` fixed height, `1px solid #D0D0D0` bottom border, `1440px` max-width.
* **Logo**: `48px / 72px` DM Sans Bold in `#543EE0` (Blue/500).
* **Navigation Links (`Frame 1`)**: `16px / 24px` DM Sans Bold with a `24px` gap (*Home*, *About us*, *Contact*, *Blogs*).
* **Action Buttons (`Frame 5`)**:
  * **Log in (`Frame 3`)**: Ghost button with `1px solid #543EE0`, `157px × 56px`.
  * **Sign up (`Frame 4`)**: Primary button with `#543EE0` fill, `157px × 56px`.
  * Positioned to the right with a `174px` desktop offset (`clamp(24px, 6vw, 174px)`).

### 2. Hero Section (`Frame 14`, `Frame 6`, `Frame 13`)
* **Container**: `765px` height with a full-bleed background image and `rgba(0, 0, 0, 0.55)` contrast overlay.
* **Content Box (`Frame 13`, `984px` width)**:
  * **Headline (`h1`)**: `"Welcome to Chatter: A Haven for text-Based Content"`, `48px / 72px` Bold, `24px` bottom gap.
  * **Subtitle (`p`)**: `"Unleash the Power of Words..."`, `24px / 36px` Medium, `740px` max-width, `36px` bottom gap.
  * **Primary CTA**: `157px × 56px` (`"Get started"`).

### 3. About Section (`Frame 15`, `Frame 11`)
* **Layout**: Two-column row with `1270px` content width and `84px` column gap.
* **Text Column (`686px` width)**:
  * Headline: `"About Chatter"`, `48px / 72px` Bold with `34px` bottom gap.
  * Body: `18px / 27px` Regular (`#111111`) detailing platform vision.
* **Visual**: `500px × 404px` featured image with `border-radius: 8px` and `object-fit: cover`.

### 4. Features Grid (`Frame 29`, `Frame 28`)
* **Intro Header (`Frame 16`)**: `48px / 72px` centered heading with `24px` gap to the `18px / 27px` body copy (`1040px` max-width), and `54px` gap to cards.
* **3-Column Card Grid (`Frame 28`)**: `1014px` total width with `48px` gap between cards.
* **Feature Cards (`Frame 17–19`)**:
  * Dimensions: `306px` width, `min-height: 324px`, `15px 18px` padding, `1px solid #D0D0D0`, `8px` radius.
  * Badges: `92px × 88px` SVG icons with embedded `rgba(214, 209, 248, 0.2)` ellipse:
    1. **Analytics** — Track views, likes, comments, and article performance.
    2. **Social interactions** — Reader discussions and community engagement.
    3. **Content creation** — In-built markdown rich-text editor.
  * Card Typography: Title `24px / 36px` Medium; Description `18px / 27px` Regular (`#626262`).

### 5. Testimonial Section (`Frame 20`, `Frame 22`)
* **Background & Height**: Full-bleed `rgba(255, 237, 204, 0.5)` warm fill with `min-height: 492px`.
* **Avatar (`Ellipse 1`)**: `300px × 292px` circular image with `56px` horizontal gap to quote.
* **Quote (`Frame 21`)**: `18px / 27px` Regular (`#111111`, max-width `924px`) with `48px` gap to author.
* **Author Credit**: `"Adebobola Muhydeen, Software developer at Apple"` — `24px / 36px` Medium (`#111111`), single-line desktop flow with `24px` gap to CTA.
* **CTA Button (`Frame 4`)**: `157px × 56px` (`"Join chatter"`).

### 6. Closing Community CTA (`Frame 41`, `Frame 39`, `Frame 24`)
* **Container**: `1127px` width with `120px` gap between the portrait cluster and content box.
* **3-Portrait Cluster (`Frame 39`)**: `352px × 412px` canvas with `154px × 158px` avatars (`50%` radius):
  * **Top Left**: `top: 0px; left: 0px;`
  * **Middle Right**: `top: 127px; left: 198px;`
  * **Bottom Left**: `top: 254px; left: 0px;`
* **Content Box (`Frame 24`, `655px` width)**:
  * Headline: `"Write, read and connect with great minds on chatter"`, `48px / 72px` Bold with `24px` gap.
  * Body Copy: `18px / 27px` Regular (`594px` width) with `32px` gap to CTA.
  * Primary Button: `157px × 56px` (`"Get started"`).

### 7. Site Footer
* **Background**: Warm tint `rgba(255, 237, 204, 0.5)`.
* **Brand Mark**: `48px / 72px` Bold `#543EE0` logo.
* **Columns**: 3 categorized navigation groups (*Explore*, *Support*, *Official blog*) with hover states and responsive wrapping.

---

## 🛠️ Technology Stack & Architecture

| Technology | Implementation |
| :--- | :--- |
| **HTML5** | Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<blockquote>`, `<cite>`, `<footer>`) |
| **CSS3** | Flexbox, CSS Grid, `clamp()`, clean box model, and responsive breakpoints (`@media`) |
| **Typography** | Google Fonts — `DM Sans` (Weights: 400, 500, 700) |
| **Graphics** | Resolution-independent SVG icons and optimized PNG photography |

---

## 🎨 Design Tokens

### Color Palette
* **Primary (Blue/500)**: `#543EE0` — Logos, buttons, active states
* **Text (Black/700)**: `#111111` — Headings, body copy, author text
* **Muted (Black/400)**: `#626262` — Feature descriptions
* **Borders (Black/100)**: `#D0D0D0` — Header bottom border, card outlines
* **Overlay**: `rgba(0, 0, 0, 0.55)` — Hero contrast scrim
* **Warm Canvas**: `rgba(255, 237, 204, 0.5)` — Testimonial and Footer background
* **Badge Accent**: `rgba(214, 209, 248, 0.2)` — Feature icon ellipse

### Type Scale
* **Headline 1**: `48px / 72px` — Bold (700)
* **Headline 3**: `24px / 36px` — Medium (500)
* **Body**: `18px / 27px` — Regular (400)
* **Micro / Nav**: `16px / 24px` — Bold (700)

---

## 📂 Project Directory Structure

```text
firstSemsterProject/
├── assets/
│   ├── images/
│   │   ├── about.png           # Readers community illustration
│   │   ├── hero.png            # Hero photography background
│   │   ├── member-1.png        # Community portrait (Top Left)
│   │   ├── member-2.png        # Community portrait (Middle Right)
│   │   ├── member-3.png        # Community portrait (Bottom Left)
│   │   └── testimonal.png      # Featured author avatar
│   └── logos/
│       ├── feature-analytics.svg # 92x88px Analytics vector badge
│       ├── feature-content.svg   # 92x88px Markdown editor vector badge
│       └── feature-social.svg    # 92x88px Social community vector badge
├── index.html                  # Semantic HTML5 document structure
├── styles.css                  # CSS3 styling and responsive rules
└── README.md                   # Project documentation
```

---

## 💻 Local Preview & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Holupeter/altschool-assignments.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd altschool-assignments/school_of_engineering/fullstack_Ai/monthThree/firstSemsterProject
   ```

3. **Open the project:**
   * Open `index.html` in any browser, or use the **VS Code Live Server** extension.
   * Or run a simple local server:
     ```bash
     python -m http.server 3000
     ```
     Visit `http://localhost:3000` in your browser.

---


