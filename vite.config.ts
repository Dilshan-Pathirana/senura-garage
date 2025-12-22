import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: (() => {
    // GitHub Pages serves the site from: https://<user>.github.io/<repo>/
    // When building in Actions, compute the repo name from GITHUB_REPOSITORY.
    const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
    if (process.env.GITHUB_ACTIONS && repo) return `/${repo}/`
    return '/'
  })(),
  plugins: [react()],
})
