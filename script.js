// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.classList.replace('bg-opacity-85', 'bg-opacity-95'); // Enhance opacity on scroll
    } else {
        navbar.classList.remove('shadow-md');
    }
});

// Product Filtering
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update buttons
    buttons.forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.add('filter-active');
            btn.classList.remove('bg-white', 'text-gray-600');
        } else {
            btn.classList.remove('filter-active');
            btn.classList.add('bg-white', 'text-gray-600');
        }
    });

    // Filter items with animation
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.parentElement.style.display = 'block'; // Make sure parent is visible if needed, but grid handles it
            product.style.display = 'block';
            
            // Add a small fade-in animation
            product.animate([
                { opacity: 0, transform: 'scale(0.95)' },
                { opacity: 1, transform: 'scale(1)' }
            ], {
                duration: 300,
                easing: 'ease-out'
            });
        } else {
            product.style.display = 'none';
        }
    });
}

// Fade In Animation on Scroll (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    el.style.opacity = '0'; // Initial state
    observer.observe(el);
});
