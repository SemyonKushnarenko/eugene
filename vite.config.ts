import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mkcert(),
  ],
  server: {
      fs: {
          allow: ["../sdk", "./"],
      },
      port: 3000,
      https: false,
      host: '0.0.0.0',
      allowedHosts: ['127.0.0.1', 'acetest.site'],
  },
});
