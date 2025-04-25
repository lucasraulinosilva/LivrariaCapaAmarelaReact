import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || 10000, 
    host: '0.0.0.0', 
  },
   preview: {
    allowedHosts: ['livrariacapaamarelareact.onrender.com'], // Add your Render domain here
  },
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
})
