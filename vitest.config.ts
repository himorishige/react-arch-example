/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import env from 'vite-plugin-env-compatible';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
    tsconfigPaths(),
    env({ prefix: 'REACT_APP_' }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './.vitest/setup.ts',
    css: true,
    testTimeout: 60_000,
    hookTimeout: 60_000,
    exclude: [...configDefaults.exclude, 'e2e/*'],
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
      lines: 60,
      branches: 60,
      functions: 60,
      statements: 60,
    },
  },
});
