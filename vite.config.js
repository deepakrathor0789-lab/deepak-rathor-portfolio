// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';  // ✅ Yeh import karein

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // ✅ Tailwind plugin add karein
  ],
  server: {
    port: 5173,
    open: true,
  },
});