// Humboldt-inspired design tokens

export const colors = {
  forest: {
    charcoal: '#0d1419',
    dark: '#141d24',
    medium: '#1e2a35',
    light: '#273642',
  },
  fog: {
    50: '#e8ecf0',
    100: '#d1d9e1',
    200: '#a8b5c2',
    300: '#8a9aab',
    400: '#6b7d92',
    500: '#5c6b78',
    600: '#4d5a66',
    700: '#3d4f5c',
    800: '#2e3d48',
    900: '#1f2b34',
  },
  amber: {
    50: '#fdf6eb',
    100: '#f9e9cc',
    200: '#f2d399',
    300: '#eabb66',
    400: '#e3a333',
    500: '#c4913c',
    600: '#a37832',
    700: '#825f28',
    800: '#61461e',
    900: '#412d14',
  },
  sage: {
    50: '#e8f0ea',
    100: '#c5d9cb',
    200: '#9fbfa8',
    300: '#4a5d4f',
  },
  accent: {
    primary: '#c4913c',
    secondary: '#e3a333',
    light: '#f2d399',
  },
}

export const animations = {
  duration: {
    fast: '0.15s',
    normal: '0.3s',
    slow: '0.5s',
    slower: '0.8s',
  },
  easing: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
}

/** Tiny gray JPEG data URL for Next/Image placeholder="blur" (improves perceived load). */
export const IMAGE_BLUR_PLACEHOLDER =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQADEP8A/9k='
