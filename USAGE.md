# Blue Design System - Usage Guide

This guide shows you how to use the Blue Design System package in your projects.

## Installation

```bash
npm install blue-design-system
```

## Usage Options

### 1. Complete Design System (Recommended)

Import the full bundled CSS:

```css
/* In your CSS file */
@import 'blue-design-system';

/* Or import the minified version */
@import 'blue-design-system/css/min';
```

```html
<!-- In your HTML -->
<link rel="stylesheet" href="node_modules/blue-design-system/dist/design-system.css">
```

### 2. Modular Imports

Import only specific parts you need:

```css
/* Just design tokens (colors, typography, spacing) */
@import 'blue-design-system/tokens';

/* Just components */
@import 'blue-design-system/components';

/* Just themes */
@import 'blue-design-system/themes';
```

### 3. Build Tool Integration

#### Webpack/Vite

```javascript
// In your main CSS or JavaScript file
import 'blue-design-system';
// or
import 'blue-design-system/css';
```

#### PostCSS

```css
@import 'blue-design-system';
```

#### Sass/SCSS

```scss
@import '~blue-design-system';
```

## Framework Integration

### React

```jsx
// App.js or index.js
import 'blue-design-system';

function LoginForm() {
  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <h2 className="card__title">Sign In</h2>
        </div>
        <div className="card__body">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="input" placeholder="Enter email" />
          </div>
          <button className="btn btn--primary btn--full">Sign In</button>
        </div>
      </div>
    </div>
  );
}
```

### Vue

```vue
<template>
  <div class="container">
    <div class="card">
      <div class="card__header">
        <h2 class="card__title">Sign In</h2>
      </div>
      <div class="card__body">
        <div class="form-group">
          <label class="form-label">Email</label>
          <input type="email" class="input" placeholder="Enter email" />
        </div>
        <button class="btn btn--primary btn--full">Sign In</button>
      </div>
    </div>
  </div>
</template>

<script>
// In your main.js
import 'blue-design-system';
</script>
```

### Angular

```typescript
// In your styles.css or angular.json
@import 'blue-design-system';
```

```html
<!-- component.html -->
<div class="container">
  <div class="card">
    <div class="card__header">
      <h2 class="card__title">Sign In</h2>
    </div>
    <div class="card__body">
      <div class="form-group">
        <label class="form-label">Email</label>
        <input type="email" class="input" placeholder="Enter email" />
      </div>
      <button class="btn btn--primary btn--full">Sign In</button>
    </div>
  </div>
</div>
```

### Svelte

```svelte
<!-- App.svelte -->
<style>
  @import 'blue-design-system';
</style>

<div class="container">
  <div class="card">
    <div class="card__header">
      <h2 class="card__title">Sign In</h2>
    </div>
    <div class="card__body">
      <div class="form-group">
        <label class="form-label">Email</label>
        <input type="email" class="input" placeholder="Enter email" />
      </div>
      <button class="btn btn--primary btn--full">Sign In</button>
    </div>
  </div>
</div>
```

## Theme Setup

Add the theme attribute to your HTML root:

```html
<!-- Dark theme (recommended) -->
<html data-theme="dark">

<!-- Light theme -->
<html data-theme="light">

<!-- Auto theme (follows system preference) -->
<html class="theme-auto">
```

### JavaScript Theme Switching

```javascript
// Theme utilities
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'light';
}

function toggleTheme() {
  const currentTheme = getTheme();
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  }
}

// Initialize theme on page load
initTheme();
```

## TypeScript Support

The package includes TypeScript declarations for better IDE support:

```typescript
import type { Theme, ComponentClasses } from 'blue-design-system';

const theme: Theme = 'dark';

// Component class names are available for type safety
const classes: ComponentClasses['btn'] = 'btn';
```

## CDN Usage

For quick prototyping without npm:

```html
<link rel="stylesheet" href="https://unpkg.com/blue-design-system@latest/dist/design-system.css">
```

## Customization

Override CSS custom properties to customize the design system:

```css
:root {
  /* Override primary color */
  --color-primary-500: #0066cc;
  
  /* Override border radius */
  --radius-base: 8px;
  
  /* Override font family */
  --font-primary: 'Inter', -apple-system, sans-serif;
}

/* Custom component variants */
.btn--custom {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  border: none;
}
```

## Bundle Size

- Full bundle: ~60KB (uncompressed), ~50KB (minified)
- Tokens only: ~13KB
- Components only: ~17KB  
- Themes only: ~11KB

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- iOS Safari 14+
- Android Chrome 88+