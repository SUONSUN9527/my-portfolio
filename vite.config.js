import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 相对路径，保证部署在 GitHub Pages 子路径下资源能正确加载
  base: './',
})
