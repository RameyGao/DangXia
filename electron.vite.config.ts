// @ts-nocheck
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer]
      }
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()],
    server: {
      watch: {
        usePolling: true
      }
    }
  }
})
