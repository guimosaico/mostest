# MosTest

**AI-Powered Intelligent Test Reporter for Vitest**

MosTest transforms test failures into actionable insights with AI-powered analysis that tells you WHY tests failed, WHAT went wrong, and HOW to fix it.

## Features

✅ **Intelligent Failure Analysis** - Understand WHY your tests fail
✅ **State Snapshots** - See WHAT was wrong at the moment of failure
💎 **AI Fix Suggestions** - Get HOW to fix (Pro tier)
💎 **JSON Export for LLMs** - Claude Code integration (Pro tier)

## Installation

```bash
npm install -D @mostest/reporter
```

## Quick Start

**Step 1:** Install the reporter
```bash
# From npm (coming soon)
npm install -D @mostest/reporter

# Or locally for development/testing
npm install -D /path/to/mostest/packages/reporter
```

**Step 2:** Configure in `vitest.config.mts` (or `.ts`)
```typescript
import { defineConfig } from 'vitest/config';
import { MostestReporter } from '@mostest/reporter';

export default defineConfig({
  test: {
    reporters: [
      'default',
      new MostestReporter({ verbosity: 'verbose' }),
    ],
  },
});
```

**Step 3:** Run your tests
```bash
npx vitest run
```

You'll see intelligent analysis for every failure:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔍 MOSTEST FAILURE ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHY IT FAILED:
  Mock function was not called as expected.
  The test expected a function to be invoked, but it was never called.

WHAT WAS WRONG:
  Expected: mutation to be called with { value: 80 }
  Received: mutation was never called

💎 UPGRADE TO PRO FOR:
   • AI-powered fix suggestions
   • JSON export for Claude Code
   Visit: https://mostest.dev/pricing
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Packages

- `@mostest/core` - Core types and utilities
- `@mostest/reporter` - Vitest reporter plugin
- `@mostest/assertions` - Enhanced assertions (coming soon)
- `@mostest/cli` - CLI tools (coming soon)

## License

MIT

## Development

This is a monorepo managed with pnpm workspaces.

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Development mode
pnpm dev
```
