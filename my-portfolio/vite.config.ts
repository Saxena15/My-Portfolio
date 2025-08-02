import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/My-Portfolio/', // 👈 This is necessary for GitHub Pages
  plugins: [react()],
})
