import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Portfolio_Website_in_Vite_and_React/",
  server: {
    historyApiFallback: true, // Ensures all routes point to index.html
  },
  plugins: [react()],
})
