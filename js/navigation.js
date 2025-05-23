import { scrollToElement } from './base.js';

// Mobile menu functionality
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileNavLinks = document.getElementById('mobile-nav-links');
const closeBtn = mobileNavLinks.querySelector('.close-btn');

if (mobileMenuToggle && mobileNavLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
        mobileNavLinks.classList.toggle('active');
    });

    // Close menu with close button
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileNavLinks.classList.remove('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileNavLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileNavLinks.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    mobileNavLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileNavLinks.classList.remove('active');
        }
    });
}

// Navigation functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        scrollToElement(targetId);
    });
});
