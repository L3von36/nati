window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add 'reveal' styles via JS to avoid flicker if CSS hasn't loaded
const style = document.createElement('style');
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
    }
    section.reveal {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});
