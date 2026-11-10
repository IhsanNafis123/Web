import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      canvg: path.resolve(import.meta.dirname, 'src/shims/empty.ts'),
      html2canvas: path.resolve(import.meta.dirname, 'src/shims/empty.ts'),
      dompurify: path.resolve(import.meta.dirname, 'src/shims/empty.ts'),
    },
  },
})

