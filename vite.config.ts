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
      '@/contexts': '/src/core/contexts',
      '@/utils': '/src/core/utils',
      '@/services': '/src/core/services',
      '@/hooks': '/src/core/hooks',
      '@/interfaces': '/src/core/interfaces',
      '@/constants': '/src/core/constants',
      '@/store': '/src/core/store',
      '@/libs': '/src/core/libs',
      '@/types': '/src/core/types',
      '@/icons': '/src/core/components/icons',
      '@/atoms': '/src/core/components/atoms',
      '@/molecules': '/src/core/components/molecules',
      '@/organisms': '/src/core/components/organisms',
      '@/layouts': '/src/core/components/layouts',
      '@/sections': '/src/core/components/sections',
      '@/custom': '/src/core/components/custom',

      '@/modules': '/src/modules',
    },
  },
})
