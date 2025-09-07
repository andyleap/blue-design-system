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

## Recent Improvements (v1.1.0)

**CSS Architecture Optimization:**
- Consolidated spacing utilities in `layouts/utilities.css` (removed duplicates from `tokens/spacing.css`)
- Centralized shadow definitions as single source of truth in `tokens/spacing.css`
- Enhanced utility classes with directional padding/margin (`px-`, `py-`, `mx-`, `my-`)
- Streamlined theme system by removing redundant color definitions

**Theme System Enhancements:**
- Fixed theme switcher JavaScript selector conflict that prevented proper theme switching
- Removed focus border on theme button clicks (maintains keyboard accessibility via `:focus-visible`)
- Added comprehensive system preference detection with smooth fallbacks
- Improved theme transition performance and reduced flash of unstyled content (FOUC)

**New Components:**
- `components/header.css` - Complete responsive header with navigation, mobile menu, user profile
- `js/theme-switcher.js` - Advanced theme switching with cookie persistence and system detection
- Example templates in `examples/` folder (blog, gallery, wiki with admin panels)
- Added `tokens/z-index.css` for proper stacking context management

**Bundle Optimization:**
- **Tokens bundle**: 11.9kb (design tokens only)
- **Components bundle**: 23.5kb (all UI components including new header)
- **Themes bundle**: 12.9kb (theme system and utilities)
- **Main bundle**: 70.2kb (complete optimized system)

**Build System Improvements:**
- Created `themes/index.css` for proper theme bundle support
- All build commands working correctly with new architecture
- Modular import capability maintained while optimizing performance