import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ZahidAli-Portfolio/', // match the repo name exactly
  plugins: [react()],
})
