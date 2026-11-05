import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' uses relative asset paths, so the build works on GitHub Pages
// whether it's served from https://<user>.github.io/ or https://<user>.github.io/<repo>/
export default defineConfig({
  plugins: [react()],
  base: './',
})
