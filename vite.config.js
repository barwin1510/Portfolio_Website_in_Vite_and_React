import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  basename="/Portfolio_Website_in_Vite_and_React/",
  plugins: [react()],
})
