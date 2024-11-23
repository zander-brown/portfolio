import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/zander-brown.github.io/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
