const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll(`
        .service-item, .service-card, .equipment-card, .contact-card,
        .about-us__content, .about-us__decorative, .about-stat,
        .principle-card, .service-box, .stat-card,
        .section-kicker, .services h2, .services-cta,
        .cta-content-index, .footer-section,
        .about-intro, .about-col-left, .about-col-right,
        .services-header, .section-header, .contact-header
    `);
    
    elements.forEach((el, i) => {
        el.classList.add('fade-up');
        el.style.transitionDelay = `${(i % 6) * 0.08}s`;
        observer.observe(el);
    });
    
    const nav = document.querySelector('nav');
    if (nav) nav.classList.add('nav-ready');
    
    setTimeout(() => document.body.classList.add('loaded'), 100);
});
