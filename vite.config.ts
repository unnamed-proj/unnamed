import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, '404.html'),
        register: resolve(__dirname, 'register.html'),
        portal: resolve(__dirname, 'portal.html'),
      }
    }
  },
  assetsInclude: [],
  server: {
    proxy: {
      '/alpha': {
        target: 'https://alpha.unnamed.org.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/alpha/, ''),
      }
    }
  }
})
