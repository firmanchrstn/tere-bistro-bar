# Terre Bistro & Bar - Cinematic Web Experience

![Project Banner](https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop)

> **A high-end, immersive digital experience designed for Terre Bistro & Bar in Cikarang, Indonesia.**

This project is a modern, responsive website built with a focus on **Cinematic Luxury**. It moves away from traditional static layouts, utilizing smooth scrolling, parallax effects, and interactive storytelling to reflect the premium yet cozy atmosphere of the bistro.

---

## Key Features

###  Cinematic UI/UX
- **"70 Million IDR" Look:** Dark-themed aesthetic (`#080808` & Gold) with a film grain noise overlay for a textured, premium feel.
- **Full Screen Overlay Menu:** Elegant curtain-style navigation with staggered text animations.
- **System Cursor Optimization:** Optimized for performance and usability using the default system cursor (no lag).

###  Advanced Animations & Interactions
- **Smooth Scrolling:** Powered by **Lenis.js** for a buttery-smooth scroll experience (momentum scrolling).
- **GSAP ScrollTrigger:**
  - **Hero Parallax:** Background moves at a different speed than the text.
  - **Horizontal Storytelling:** The "Story" section scrolls horizontally while pinned, creating a gallery-like experience.
  - **Menu Image Reveal:** Background changes dynamically when hovering over menu items.
  
###  Pages & Layouts
- **Home (`index.html`):** Narrative-driven single-page experience.
- **Amenities (`amenities.html`):** Structured **3x3 Bento Grid Layout** displaying facilities, services, and accessibility info with uniform visibility and contrast.

###  Accurate Data Integration
- Content (Menu, Reviews, Address, Opening Hours) is based on **real research data** from Google Maps & Reviews of Terre Bistro & Bar.

---

##  Tech Stack

* **Core:** HTML5, CSS3 (Modern Variables, Flexbox, Grid), JavaScript (ES6+).
* **Libraries:**
    * [GSAP (GreenSock)](https://greensock.com/gsap/) - For complex animations and ScrollTrigger.
    * [Lenis](https://github.com/studio-freight/lenis) - For modern smooth scrolling.
    * [Font Awesome](https://fontawesome.com/) - For icons.
* **Fonts:** `Cormorant Garamond` (Display) & `Manrope` (Body) via Google Fonts.

---

##  Project Structure

```text
/terre-bistro-website
│
├── index.html            # Main landing page
├── amenities.html        # Facilities & Info page
├── README.md             # Documentation
│
└── assets/               # Project Assets
    ├── css/
    │   └── style.css     # Global styles & animations
    └── js/
        └── script.js     # GSAP logic & interactions