# Blue Design System

A modern, accessible design system optimized for dark mode with beautiful blue color palettes and gradients. Perfect for authentication services, dashboards, and modern web applications.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 [View Live Demo](https://andyleap.github.io/blue-design-system)

See all components in action with interactive examples and theme switching.

## Features

- 🎨 **Blue-focused color palette** with deep blues and electric accents
- 🌓 **Dark mode optimized** with beautiful gradients and shadows
- ♿ **Accessibility first** with proper contrast ratios and focus states
- 📱 **Responsive design** with mobile-first approach
- 🎯 **Modern aesthetics** with smooth animations and clean typography
- 🔧 **Highly customizable** with CSS custom properties

## Quick Start

### Installation

#### Option 1: Use Pre-built CSS (Recommended)

Download the bundled CSS file from the [releases page](https://github.com/andyleap/blue-design-system/releases) or use the built version:

```html
<link rel="stylesheet" href="https://andyleap.github.io/blue-design-system/dist/design-system.css">
```

#### Option 2: Build from Source

If you want to customize the design system or use it with a build process:

1. Clone this repository
2. Install dependencies: `npm install`
3. Build the CSS: `npm run build:dev`
4. Use the bundled file from `dist/design-system.css`

**Recommended**: Use ESBuild or another CSS preprocessor to handle the @import statements and bundle everything into a single file.

### Theme Setup

Add the theme data attribute to your HTML element:

```html
<!-- Light theme (default) -->
<html data-theme="light">

<!-- Dark theme -->
<html data-theme="dark">

<!-- Auto theme (follows system preference) -->
<html class="theme-auto">
```

### Basic Usage

```html
<!DOCTYPE html>
<html data-theme="dark">
<head>
    <link rel="stylesheet" href="design-system.css">
</head>
<body>
    <div class="container">
        <h1 class="heading-1">Welcome to the Design System</h1>
        <div class="card">
            <div class="card__header">
                <h2 class="card__title">Authentication</h2>
            </div>
            <div class="card__body">
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input type="email" class="input" placeholder="Enter your email">
                </div>
                <button class="btn btn--primary btn--full">Sign In</button>
            </div>
        </div>
    </div>
</body>
</html>
```

## Components

### Buttons

```html
<!-- Primary button -->
<button class="btn btn--primary">Primary</button>

<!-- Secondary button -->
<button class="btn btn--secondary">Secondary</button>

<!-- Ghost button -->
<button class="btn btn--ghost">Ghost</button>

<!-- Sizes -->
<button class="btn btn--primary btn--sm">Small</button>
<button class="btn btn--primary">Default</button>
<button class="btn btn--primary btn--lg">Large</button>

<!-- States -->
<button class="btn btn--primary" disabled>Disabled</button>
<button class="btn btn--primary btn--loading">Loading</button>
```

### Cards

```html
<div class="card">
    <div class="card__header">
        <h3 class="card__title">Card Title</h3>
        <p class="card__subtitle">Card subtitle</p>
    </div>
    <div class="card__body">
        <p class="card__text">Card content goes here...</p>
    </div>
    <div class="card__footer">
        <div class="card__actions">
            <button class="btn btn--primary">Action</button>
            <button class="btn btn--ghost">Cancel</button>
        </div>
    </div>
</div>
```

### Form Inputs

```html
<div class="form-group">
    <label class="form-label form-label--required">Username</label>
    <input type="text" class="input" placeholder="Enter username">
    <p class="form-help">This will be your unique identifier</p>
</div>

<!-- Input with error state -->
<div class="form-group">
    <label class="form-label">Password</label>
    <input type="password" class="input input--error" placeholder="Enter password">
    <p class="form-error">Password must be at least 8 characters</p>
</div>

<!-- Input with icon -->
<div class="form-group">
    <label class="form-label">Search</label>
    <div class="input-with-icon">
        <span class="input-with-icon__icon">🔍</span>
        <input type="search" class="input" placeholder="Search...">
    </div>
</div>
```

### Modals

```html
<div class="modal-backdrop modal-backdrop--open">
    <div class="modal modal--open">
        <div class="modal__dialog">
            <div class="modal__header">
                <h3 class="modal__title">Confirm Action</h3>
                <button class="modal__close">×</button>
            </div>
            <div class="modal__body">
                <p>Are you sure you want to proceed with this action?</p>
            </div>
            <div class="modal__footer">
                <button class="btn btn--ghost">Cancel</button>
                <button class="btn btn--primary">Confirm</button>
            </div>
        </div>
    </div>
</div>
```

## Layout System

### Container

```html
<div class="container">
    <!-- Your content here -->
</div>

<!-- Container variants -->
<div class="container container--narrow">Narrow container</div>
<div class="container container--wide">Wide container</div>
<div class="container container--fluid">Full width</div>
```

### Grid System

```html
<!-- CSS Grid -->
<div class="grid grid-cols-3 gap-4">
    <div class="card">Item 1</div>
    <div class="card">Item 2</div>
    <div class="card col-span-2">Item 3 (spans 2 columns)</div>
</div>

<!-- Flexbox -->
<div class="flex items-center justify-between gap-4">
    <div class="flex-1">Flexible item</div>
    <div class="flex-none">Fixed item</div>
</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="card">Responsive item</div>
    <div class="card">Responsive item</div>
    <div class="card">Responsive item</div>
</div>
```

## Theme System

### JavaScript Theme Switching

```javascript
// Set theme
document.documentElement.setAttribute('data-theme', 'dark');

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
}
```

### Theme-aware Utilities

```html
<!-- Theme-aware colors -->
<div class="bg-theme-surface text-theme-primary">
    Themed content
</div>

<!-- Show/hide based on theme -->
<span class="light-only">Light mode content</span>
<span class="dark-only">Dark mode content</span>

<!-- Theme toggle button -->
<button class="theme-toggle" onclick="toggleTheme()">
    <span class="light-only">🌙</span>
    <span class="dark-only">☀️</span>
</button>
```

## Design Tokens

### Colors

The design system uses a blue-focused palette:

- **Primary**: Deep blues (`--color-primary-500`)
- **Secondary**: Electric blues (`--color-secondary-500`)
- **Surface**: Dark backgrounds in dark mode
- **Text**: High contrast text colors

### Typography

- **Primary font**: System font stack with fallbacks
- **Display font**: Inter with fallbacks for headings
- **Monospace**: SF Mono, Monaco, Cascadia Code

### Spacing

Based on 8px grid system:
- `--space-1` (4px) through `--space-96` (384px)
- Consistent spacing scale for all components

## Customization

### CSS Custom Properties

Override design tokens in your CSS:

```css
:root {
  /* Custom primary color */
  --color-primary-500: #0066cc;
  
  /* Custom border radius */
  --radius-base: 8px;
  
  /* Custom font family */
  --font-primary: 'Your Font', -apple-system, sans-serif;
}
```

### Component Variants

Extend components with custom variants:

```css
.btn--custom {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  border: none;
}

.card--feature {
  background: var(--gradient-brand);
  color: white;
  transform: scale(1.05);
}
```

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- iOS Safari 14+
- Android Chrome 88+

## Accessibility

- WCAG 2.1 AA compliance
- Proper focus management
- High contrast mode support
- Reduced motion support
- Screen reader friendly markup

## File Structure

```
design-system/
├── tokens/           # Design tokens (colors, typography, spacing)
├── components/       # Component styles
├── layouts/          # Layout utilities and grid system
├── themes/           # Theme variants (light/dark)
├── dist/             # Compiled CSS files
├── docs/             # Documentation
└── design-system.css # Main entry point
```

## License

MIT License - feel free to use in personal and commercial projects.