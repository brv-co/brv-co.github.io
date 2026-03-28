// Main JS for BRV Landing Page

document.addEventListener('DOMContentLoaded', () => {

    // 1. Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // 2. Navbar Glassmorphism State
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('glass-scrolled');
        } else {
            navbar.classList.remove('glass-scrolled');
        }
    });

    // 3. Mobile Menu Toggle (Simple placeholder logic)
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    // 4. Smooth Anchor Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 5. Logo Pulsing State (Subtle)
    const logo = document.querySelector('.logo-text');
    setInterval(() => {
        logo.style.textShadow = '0 0 10px rgba(0, 242, 255, 0.2)';
        setTimeout(() => {
            logo.style.textShadow = 'none';
        }, 1000);
    }, 3000);
});
