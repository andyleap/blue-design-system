# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Build System:**
- `npm run build` - Complete build (CSS + minified + tokens)
- `npm run build:css` - Bundle main CSS with sourcemaps  
- `npm run build:min` - Create minified version
- `npm run build:tokens` - Build design token bundles
- `npm run watch` - Development mode with live rebuild

**Component-Specific Builds:**
- `npm run build:tokens:css` - Build design tokens bundle
- `npm run build:components:css` - Build components bundle
- `npm run build:themes:css` - Build themes bundle

## Architecture Overview

**Design System Structure:**
This is a pure CSS design system built with a token-first approach using modern CSS features and ESBuild for bundling.

**Core Architecture:**
- `tokens/` - Design tokens (colors, typography, spacing, breakpoints) - the foundation layer
- `components/` - UI components (button, card, input, modal) that consume tokens
- `themes/` - Theme variants (dark/light) using CSS custom properties
- `layouts/` - Layout systems (grid, utilities)
- `design-system.css` - Main entry point that imports everything

**Modular Import System:**
Components can be imported independently:
- Full system: `blue-design-system`
- Tokens only: `blue-design-system/tokens`
- Components only: `blue-design-system/components` 
- Themes only: `blue-design-system/themes`

**Theme System:**
Uses CSS custom properties for runtime theme switching. Dark mode is the primary focus with blue gradient specialization.

**Key Design Decisions:**
- Pure CSS (no preprocessors) using modern features
- Token-based architecture with CSS custom properties
- Dark-mode-first approach with blue color specialization
- Framework-agnostic design works with React/Vue/Angular
- Production-ready with TypeScript definitions and CI/CD

**Testing:**
No formal testing framework. Manual testing via demo page at `index.html`. Build validation runs through GitHub Actions CI.