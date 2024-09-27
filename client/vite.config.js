// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Asegúrate de que el directorio de salida sea 'dist'
  },
  server: {
    port: 8080
  }
})
