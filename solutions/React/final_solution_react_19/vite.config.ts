import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3008',
        changeOrigin: true,
        rewrite: (path) => path
      },
      '/images': {
        target: 'http://localhost:3008',
        changeOrigin: true,
        rewrite: (path) => path,
      }
    }
  }
});