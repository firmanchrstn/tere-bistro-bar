// 1. Initialize Lenis (Smooth Scroll)
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// 2. Navigation Logic
const menuBtn = document.querySelector('.menu-btn');
const navOverlay = document.querySelector('.nav-overlay');
const navClose = document.querySelector('.nav-close');
const navLinks = document.querySelectorAll('.nav-item');

if(menuBtn && navOverlay) {
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navOverlay.classList.add('active');
        gsap.to(navLinks, {
            opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power4.out", delay: 0.3
        });
    });

    function closeMenu() {
        gsap.to(navLinks, {
            opacity: 0, y: 50, duration: 0.5, ease: "power2.in"
        });
        setTimeout(() => { navOverlay.classList.remove('active'); }, 300);
    }

    if(navClose) navClose.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if(href.startsWith('#')) {
                e.preventDefault();
                closeMenu();
                setTimeout(() => {
                    lenis.scrollTo(href, { offset: 0, duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
                }, 800);
            }
        });
    });
}

// 3. Hero Animations
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    if(document.querySelector('.hero')) document.querySelector('.hero').classList.add('loaded');
});

if(document.querySelector('.hero-img')) {
    gsap.to(".hero-img", {
        yPercent: 30, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
    });
}

// 4. Horizontal Scroll (Story)
let horizontalSection = document.querySelector('.horizontal-wrapper');
let horizontalContainer = document.querySelector('.horizontal-container');

if(horizontalContainer) {
    gsap.to(horizontalContainer, {
        xPercent: -100 * (horizontalContainer.children.length - 1) / horizontalContainer.children.length,
        ease: "none",
        scrollTrigger: {
            trigger: horizontalSection, pin: true, scrub: 1, start: "top top", end: () => "+=" + horizontalContainer.offsetWidth
        }
    });
}

// 5. Menu Reveal
const menuItems = document.querySelectorAll('.menu-item');
const bgImages = document.querySelectorAll('.menu-bg-img');

if(menuItems.length > 0 && bgImages.length > 0) {
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const imgId = this.getAttribute('data-img');
            const targetImg = document.getElementById(imgId);
            bgImages.forEach(img => img.classList.remove('active'));
            if(targetImg) targetImg.classList.add('active');
        });
    });
    const menuList = document.querySelector('.menu-list');
    if(menuList) {
        menuList.addEventListener('mouseleave', () => {
            bgImages.forEach(img => img.classList.remove('active'));
        });
    }
}

// 6. Amenities Page Animations
const bentoCards = document.querySelectorAll('.bento-card');
if(bentoCards.length > 0) {
    gsap.from(bentoCards, {
        y: 50, opacity: 10, duration: 0.8, stagger: 0.1,
        scrollTrigger: { trigger: ".bento-grid", start: "top 80%" }
    });
}