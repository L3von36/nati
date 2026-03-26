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

// Dynamic Schema.org markup for LocalBusiness
function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Terraline Consulting Engineers",
        "url": window.location.origin,
        "logo": "https://narrative-navi-nook.lovable.app/assets/terraline-logo-B75n1WOL.png",
        "image": "https://narrative-navi-nook.lovable.app/assets/hero-bg.png",
        "description": "Ethiopia-based consulting engineers specializing in highway design, transport infrastructure, and geotechnical engineering.",
        "telephone": "+251-923-599-1",
        "email": "natygizachew@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Hayahulet Area",
            "addressLocality": "Addis Ababa",
            "addressRegion": "Addis Ababa",
            "addressCountry": "ET"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "9.03",
            "longitude": "38.72"
        },
        "openingHours": "Mo, Tu, We, Th, Fr 08:00-17:00",
        "serviceType": [
            "Highway Engineering & Road Design",
            "Traffic Engineering & Road Safety",
            "Geotechnical Engineering",
            "Hydraulics & Drainage",
            "Construction Supervision & Technical Support",
            "Feasibility & Project Management"
        ]
    };
}

// Add schema to page
window.addEventListener('load', function() {
    // Add JSON-LD schema
    const schemaScript = document.createElement('script');
    schemaScript.type = "application/ld+json";
    schemaScript.textContent = JSON.stringify(generateLocalBusinessSchema(), null, 2);
    document.head.appendChild(schemaScript);
    
    // Add basic analytics tracking (replace with your actual analytics)
    // Google Analytics 4 example - replace G-XXXXXXXXXX with your actual ID
    /*
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
    */
    
    // Track button clicks for engagement (basic example)
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, you would send this to your analytics platform
            console.log('Button clicked:', this.textContent.trim());
        });
    });
    
    // Track phone number clicks
    document.querySelectorAll('[data-lucide="phone"]').forEach(icon => {
        icon.addEventListener('click', function() {
            console.log('Phone number clicked');
            // In real implementation: gtag('event', 'click', { 'event_category': 'engagement', 'event_label': 'phone_click' });
        });
    });
});
