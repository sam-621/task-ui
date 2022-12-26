import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@/contexts': '/src/contexts',
      '@/helpers': '/src/helpers',
      '@/services': '/src/services',
      '@/hooks': '/src/hooks',
      '@/icons': '/src/components/icons',
      '@/atoms': '/src/components/atoms',
      '@/molecules': '/src/components/molecules',
      '@/organisms': '/src/components/organisms',
      '@/layouts': '/src/components/layouts',
      '@/pages': '/src/pages',
      '@/interfaces': '/src/models',
      '@/theme': '/src/theme',
      '@/constants': '/src/constants',
    },
  },
})
