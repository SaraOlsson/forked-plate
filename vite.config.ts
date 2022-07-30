import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['favicon.ico', 'logo192_c.png', 'logo512_c.png', 'maskable-dummy'],
      devOptions: {
        enabled: true
      },
      manifest: {
        "name": "ForkedPlate",
        "short_name": "Forked Plate",
        "description": "Your goto recipe platform",
        "theme_color": "#ffffff",
        "background_color": "#ffffff",
        "icons": [
          {
            src: "logo192_c.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "logo512_c.png",
            type: "image/png",
            sizes: "512x512"
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
})
