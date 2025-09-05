// TypeScript declarations for Blue Design System

// CSS Modules support
declare module '*.css' {
  const content: string;
  export default content;
}

// Design System CSS imports
declare module 'blue-design-system' {
  const content: string;
  export default content;
}

declare module 'blue-design-system/css' {
  const content: string;
  export default content;
}

declare module 'blue-design-system/css/min' {
  const content: string;
  export default content;
}

declare module 'blue-design-system/tokens' {
  const content: string;
  export default content;
}

declare module 'blue-design-system/components' {
  const content: string;
  export default content;
}

declare module 'blue-design-system/themes' {
  const content: string;
  export default content;
}

// Theme utilities
export type Theme = 'light' | 'dark';

export interface ThemeUtils {
  setTheme: (theme: Theme) => void;
  getTheme: () => Theme;
  toggleTheme: () => void;
  initTheme: () => void;
}

// Component class names (for CSS-in-JS or className helpers)
export interface ComponentClasses {
  // Buttons
  btn: string;
  'btn--primary': string;
  'btn--secondary': string;
  'btn--ghost': string;
  'btn--sm': string;
  'btn--lg': string;
  'btn--full': string;
  'btn--loading': string;
  
  // Cards
  card: string;
  card__header: string;
  card__title: string;
  card__subtitle: string;
  card__body: string;
  card__text: string;
  card__footer: string;
  card__actions: string;
  
  // Forms
  'form-group': string;
  'form-label': string;
  'form-label--required': string;
  'form-help': string;
  'form-error': string;
  'form-success': string;
  input: string;
  'input--error': string;
  'input--success': string;
  'input-with-icon': string;
  'input-with-icon__icon': string;
  
  // Modals
  modal: string;
  'modal--open': string;
  'modal-backdrop': string;
  'modal-backdrop--open': string;
  modal__dialog: string;
  modal__header: string;
  modal__title: string;
  modal__close: string;
  modal__body: string;
  modal__footer: string;
  
  // Layout
  container: string;
  'container--narrow': string;
  'container--wide': string;
  'container--fluid': string;
  
  // Grid
  grid: string;
  'grid-cols-1': string;
  'grid-cols-2': string;
  'grid-cols-3': string;
  'grid-cols-4': string;
  'grid-cols-12': string;
  'col-span-1': string;
  'col-span-2': string;
  'col-span-3': string;
  'col-span-4': string;
  'col-span-full': string;
  
  // Flexbox
  flex: string;
  'flex-1': string;
  'flex-none': string;
  'items-center': string;
  'items-start': string;
  'items-end': string;
  'justify-center': string;
  'justify-between': string;
  'justify-start': string;
  'justify-end': string;
  
  // Spacing
  'gap-1': string;
  'gap-2': string;
  'gap-3': string;
  'gap-4': string;
  'gap-6': string;
  'gap-8': string;
  
  // Theme utilities
  'theme-toggle': string;
  'light-only': string;
  'dark-only': string;
  'bg-theme-surface': string;
  'text-theme-primary': string;
  
  // Typography
  'heading-1': string;
  'heading-2': string;
  'heading-3': string;
  'heading-4': string;
  'text-sm': string;
  'text-lg': string;
  'text-xl': string;
}