import { defineConfig } from 'vitest/config';
import { MostestReporter } from './packages/reporter/src/index.js';

export default defineConfig({
  test: {
    reporters: [
      'default',
      new MostestReporter({ verbosity: 'verbose' }),
    ],
    // Make timeout test fail quickly
    testTimeout: 1000,
  },
});
