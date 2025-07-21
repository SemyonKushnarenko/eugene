import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

// https://vite.dev/config/
export default defineConfig({
  base: '/pgs/',
  plugins: [
    react(),
    mkcert(),
  ],
  server: {
      fs: {
          allow: ["../sdk", "./"],
      },
      port: 3000,
      https: true,
      host: '0.0.0.0',
  },
});
