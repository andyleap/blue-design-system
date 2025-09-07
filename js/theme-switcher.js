/**
 * Blue Design System - Theme Switcher Module
 * Provides consistent theme switching functionality across all pages
 * Uses cookies for server-side theme detection and reduced FOUC
 */

class ThemeSwitcher {
    constructor() {
        this.currentTheme = null;
        this.cookieName = 'blue-theme';
        this.init();
    }

    /**
     * Initialize the theme switcher
     */
    init() {
        // Add preload class to prevent flash
        document.documentElement.classList.add('preload');
        
        // Apply saved theme on page load
        this.applySavedTheme();
        
        // Remove preload class after a short delay
        setTimeout(() => {
            document.documentElement.classList.remove('preload');
            document.documentElement.classList.add('theme-transition');
        }, 100);
        
        // Listen for system theme changes
        this.setupSystemThemeListener();
        
        // Setup theme toggle buttons
        this.setupThemeButtons();
    }

    /**
     * Cookie utility methods
     */
    setCookie(name, value, days = 365) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        const sameSite = location.protocol === 'https:' ? 'SameSite=Strict; Secure' : 'SameSite=Strict';
        document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; ${sameSite}`;
    }

    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

    /**
     * Apply saved theme or detect system preference
     */
    applySavedTheme() {
        // Check if theme is already set on HTML element (server-side)
        const htmlTheme = document.documentElement.getAttribute('data-theme');
        if (htmlTheme && htmlTheme !== 'auto') {
            this.currentTheme = htmlTheme;
            this.updateButtonStates();
            return;
        }

        // Check cookie for saved theme
        const savedTheme = this.getCookie(this.cookieName);
        
        if (savedTheme && savedTheme !== 'auto') {
            this.setTheme(savedTheme);
        } else {
            // Use system preference
            this.useSystemTheme();
        }
    }

    /**
     * Use system theme preference
     */
    useSystemTheme() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const systemTheme = prefersDark ? 'dark' : 'light';
        this.currentTheme = systemTheme;
        document.documentElement.setAttribute('data-theme', systemTheme);
        this.updateButtonStates();
    }

    /**
     * Set the theme
     * @param {string} theme - 'light', 'dark', or 'auto'
     */
    setTheme(theme) {
        this.currentTheme = theme;
        
        if (theme === 'auto') {
            // Remove explicit theme, use system preference
            this.useSystemTheme();
            this.deleteCookie(this.cookieName);
        } else {
            document.documentElement.setAttribute('data-theme', theme);
            // Save preference in cookie for server-side access
            this.setCookie(this.cookieName, theme);
        }
        
        // Update button states
        this.updateButtonStates();
        
        // Dispatch custom event for other components to listen to
        window.dispatchEvent(new CustomEvent('themeChanged', {
            detail: { theme: this.currentTheme }
        }));
    }

    /**
     * Toggle between light and dark themes
     */
    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    /**
     * Get current theme
     * @returns {string} Current theme value
     */
    getCurrentTheme() {
        return this.currentTheme;
    }

    /**
     * Setup theme toggle buttons
     */
    setupThemeButtons() {
        // Setup main theme toggle buttons
        document.querySelectorAll('[data-theme-toggle]').forEach(button => {
            button.addEventListener('click', () => this.toggleTheme());
        });

        // Setup specific theme buttons (for advanced theme selectors)
        // Exclude the html element to avoid conflicts
        document.querySelectorAll('button[data-theme], .theme-button[data-theme], [data-theme-button]').forEach(button => {
            const theme = button.getAttribute('data-theme') || button.getAttribute('data-theme-button');
            button.addEventListener('click', () => this.setTheme(theme));
        });

        // Setup the standard theme-toggle class buttons (for backwards compatibility)
        document.querySelectorAll('.theme-toggle').forEach(button => {
            if (!button.hasAttribute('data-theme-toggle')) {
                button.addEventListener('click', () => this.toggleTheme());
            }
        });
    }

    /**
     * Update button states based on current theme
     */
    updateButtonStates() {
        // Update theme-specific buttons (exclude html element)
        document.querySelectorAll('button[data-theme], .theme-button[data-theme], [data-theme-button]').forEach(button => {
            const theme = button.getAttribute('data-theme') || button.getAttribute('data-theme-button');
            if (theme === this.currentTheme) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        // Update toggle button icons (if they use light-only/dark-only classes)
        const lightIcons = document.querySelectorAll('.light-only');
        const darkIcons = document.querySelectorAll('.dark-only');
        
        if (this.currentTheme === 'dark') {
            lightIcons.forEach(icon => icon.style.display = 'none');
            darkIcons.forEach(icon => icon.style.display = 'block');
        } else {
            lightIcons.forEach(icon => icon.style.display = 'block');
            darkIcons.forEach(icon => icon.style.display = 'none');
        }
    }

    /**
     * Listen for system theme changes
     */
    setupSystemThemeListener() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        mediaQuery.addEventListener('change', (e) => {
            // Only auto-update if no explicit theme is saved
            if (!localStorage.getItem('blue-design-system-theme')) {
                const systemTheme = e.matches ? 'dark' : 'light';
                this.setTheme(systemTheme);
            }
        });
    }

    /**
     * Reset to system preference
     */
    resetToSystem() {
        this.deleteCookie(this.cookieName);
        this.useSystemTheme();
    }

}

// Create global instance
window.ThemeSwitcher = ThemeSwitcher;

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.themeSwitcher = new ThemeSwitcher();
});

// Also provide a simple function for backwards compatibility
window.toggleTheme = function() {
    if (window.themeSwitcher) {
        window.themeSwitcher.toggleTheme();
    }
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeSwitcher;
}