import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node', // Simulates a Node.js environment for Hono
  },
})
