// Scroll-Driven Animations System
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const element = entry.target;
                const visible = entry.isIntersecting;
                const ratio = entry.intersectionRatio;
                
                if (visible) {
                    element.classList.add('visible');
                    
                    // Add stagger effect based on intersection ratio
                    if (element.classList.contains('scroll-animate')) {
                        element.style.transitionDelay = `${(1 - ratio) * 0.2}s`;
                    }
                } else {
                    element.classList.remove('visible');
                }
            });
        }, observerOptions);

        // Observe elements with scroll animation classes
        document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right').forEach(el => {
            observer.observe(el);
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimations();
});
