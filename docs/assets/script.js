// Portfolio Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    
    // Add smooth scrolling to all internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation to upload areas when clicked
    const uploadAreas = document.querySelectorAll('.upload-area');
    uploadAreas.forEach(area => {
        area.addEventListener('click', function() {
            // Add loading class
            this.classList.add('upload-loading');
            
            // Simulate upload process (replace with actual upload logic)
            setTimeout(() => {
                this.classList.remove('upload-loading');
                alert('Upload functionality would be implemented here. For now, you can replace this area with your actual video content.');
            }, 2000);
        });
    });

    // Add contact button hover effects
    const contactButtons = document.querySelectorAll('.contact-button');
    contactButtons.forEach(button => {
        // Add ripple effect
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add mobile menu functionality (if needed)
    function addMobileMenu() {
        const header = document.querySelector('.section:first-child');
        if (header && window.innerWidth <= 768) {
            // Add mobile menu button if needed
            console.log('Mobile menu functionality can be added here');
        }
    }

    // Initialize mobile menu
    addMobileMenu();

    // Handle window resize
    window.addEventListener('resize', addMobileMenu);

    // Add analytics tracking (optional)
    function trackEvent(eventName, eventData) {
        // Replace with your analytics service
        console.log('Event tracked:', eventName, eventData);
    }

    // Track contact button clicks
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.href.includes('wa.me') ? 'WhatsApp' : 
                           this.href.includes('tel:') ? 'Phone' : 'Facebook';
            trackEvent('contact_click', { platform: platform });
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close any open modals or menus
            console.log('Escape key pressed - close modals');
        }
    });

    // Performance optimization: Lazy load images (if added later)
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Initialize lazy loading
    lazyLoadImages();

    console.log('Portfolio interactive features loaded successfully!');
}); 