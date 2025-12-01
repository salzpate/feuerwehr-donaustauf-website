import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    include: ['**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', '.next', 'dist'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', '.next/', 'vitest.setup.ts', 'vitest.config.ts', '**/*.config.*', '**/*.test.*', '**/*.spec.*', '**/types/**', '**/index.ts', 'app/**/layout.tsx', 'app/**/not-found.tsx'],
    },
  },
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './components'),
      '@/data': path.resolve(__dirname, './data'),
      '@/features': path.resolve(__dirname, './features'),
      '@/hooks': path.resolve(__dirname, './hooks'),
      '@/lib': path.resolve(__dirname, './lib'),
      '@/styles': path.resolve(__dirname, './styles'),
      '@/types': path.resolve(__dirname, './types'),
    },
  },
});
