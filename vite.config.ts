import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  pages: {
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/pages/index/main.ts'),
          // page2: resolve(__dirname, 'src/page2/main.js')
        }
      }
    }
  }
})
