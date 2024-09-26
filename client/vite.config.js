import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080 // Solo afecta al entorno de desarrollo
  },
  build: {
    outDir: 'dist' // La salida del build de Vite
  }
});