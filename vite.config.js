import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Keep the original pages available until their React replacements are ready.
export default defineConfig({
  // The site is published at https://nicorugani.github.io/Personal-Portfolio/,
  // so built asset URLs must be prefixed with that subpath.
  base: '/Personal-Portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        projects: fileURLToPath(new URL('./projects.html', import.meta.url)),
        about: fileURLToPath(new URL('./about.html', import.meta.url)),
        contact: fileURLToPath(new URL('./contact.html', import.meta.url)),
      },
    },
  },
});
