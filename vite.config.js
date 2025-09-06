import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['555b9fa4-9535-4ea1-80a1-3052989f31eb-00-1oq58915f2sk0.pike.replit.dev']
  }
})
