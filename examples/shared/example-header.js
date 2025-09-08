/* Shared Example Header JavaScript */

/**
 * Mobile menu functionality
 * Used across all example pages for consistent mobile navigation
 */
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('header__mobile-menu--open');
    }
}

/**
 * Initialize header functionality
 * Call this when the DOM is loaded to set up header interactions
 */
function initializeExampleHeader() {
    // Set up mobile menu toggle button
    const menuToggle = document.querySelector('.header__menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const mobileMenu = document.getElementById('mobileMenu');
        const menuToggle = document.querySelector('.header__menu-toggle');
        
        if (mobileMenu && 
            mobileMenu.classList.contains('header__mobile-menu--open') &&
            !mobileMenu.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            mobileMenu.classList.remove('header__mobile-menu--open');
        }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && mobileMenu.classList.contains('header__mobile-menu--open')) {
                mobileMenu.classList.remove('header__mobile-menu--open');
            }
        }
    });
}

/**
 * Create consistent header brand markup
 * @param {string} title - The title to display next to the logo
 * @param {string} href - Link destination (usually back to design system)
 * @returns {string} HTML string for header brand
 */
function createHeaderBrand(title = 'Blue Design System', href = '../../') {
    return `
        <a href="${href}" class="header__brand">
            <div class="example-header__logo">B</div>
            ${title}
        </a>
    `;
}

/**
 * Create navigation menu items
 * @param {Array} items - Array of {text, href, active} objects
 * @returns {string} HTML string for navigation items
 */
function createNavItems(items = []) {
    return items.map(item => `
        <li class="header__nav-item">
            <a href="${item.href || '#'}" class="header__nav-link ${item.active ? 'header__nav-link--active' : ''}">${item.text}</a>
        </li>
    `).join('');
}

/**
 * Create mobile navigation menu items
 * @param {Array} items - Array of {text, href, active} objects
 * @returns {string} HTML string for mobile navigation items
 */
function createMobileNavItems(items = []) {
    return items.map(item => `
        <li><a href="${item.href || '#'}" class="header__mobile-nav-link ${item.active ? 'header__mobile-nav-link--active' : ''}">${item.text}</a></li>
    `).join('');
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeExampleHeader);