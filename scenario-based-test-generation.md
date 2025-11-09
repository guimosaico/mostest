┌─────────────────────────────────────────────────────┐
│                                                     │
│                      MOSTEST                        │
│         AI-Powered Intelligent Test Reporter       │
│           (Sellable npm Library Product)           │
│                                                     │
└─────────────────────────────────────────────────────┘

**Status**: 🟡 IN DEVELOPMENT
**Priority**: HIGH
**Product Name**: `@mostest/framework` (monorepo with multiple packages)
**Brand**: MosTest - "Test smarter, debug faster with AI"

═══════════════════════════════════════════════════════
PROBLEM STATEMENT
═══════════════════════════════════════════════════════

Current testing workflow requires manual test code writing, which is:
- **Time-consuming**: Writing test boilerplate for every scenario
- **Error-prone**: Manual translation from requirements to code
- **Inconsistent**: Different developers write tests differently
- **Difficult to scale**: As features grow, test coverage lags behind
- **Poor debugging**: Test failures don't explain root cause or how to fix

**Desired Outcome:**
A **sellable, standalone library** (like Vitest, Tiptap, Zod) that provides:
1. **Intelligent Test Reporter** - Actionable failure messages with WHY/WHAT/HOW
2. **Scenario-Based Test Generation** - Gherkin → Executable tests
3. **Enhanced Assertions** - Context-aware expect() wrappers
4. **AI-Friendly Output** - Structured JSON for LLM consumption
5. **Framework Agnostic** - Works with Vitest, Jest, Playwright

**Business Value:**
- **Product Revenue**: Sell as freemium npm package (free tier + paid features)
- **Licensing Options**:
  - Free: Open-source core (intelligent reporter)
  - Pro ($29/mo): AI scenario generation, advanced analysis
  - Enterprise ($299/mo): Team features, custom reporters, priority support
- **Market Positioning**: "Vitest meets AI - Test smarter, debug faster"
- **Competitive Advantage**: Only test framework with AI-native error reporting

**Key Requirements:**
1. **Standalone library** - Zero coupling to Mosaico codebase
2. **npm publishable** - Works via `npm install @mostest/reporter`
3. **Plugin architecture** - Extensible for different test frameworks
4. **TypeScript-first** - Full type safety + excellent DX
5. **Documentation site** - mostest.dev (Next.js + Tailwind, like vitest.dev)
6. **Monetization ready** - License checking, feature gating, analytics

═══════════════════════════════════════════════════════
REQUIREMENTS
═══════════════════════════════════════════════════════

### R1: Library Architecture & Setup
- [ ] Create monorepo structure with pnpm workspaces
- [ ] Package 1: `@mostest/reporter` (intelligent reporter)
- [ ] Package 2: `@mostest/assertions` (enhanced expect wrappers)
- [ ] Package 3: `@mostest/cli` (scenario generation CLI)
- [ ] Package 4: `@mostest/core` (shared types/utils)
- [ ] Configure TypeScript for library build (tsup/rollup)
- [ ] Setup dual ESM/CJS exports
- [ ] Create package.json with proper exports field
- [ ] Configure path aliases for clean imports

### R2: Intelligent Reporter (Core Free Package)
- [ ] Vitest reporter plugin with `onTaskUpdate` hook
- [ ] Error pattern matching engine (mock calls, value mismatches, API errors)
- [ ] State capture system (component props, DB snapshots, network logs)
- [ ] Root cause analysis with LLM-friendly structured output
- [ ] Fix suggestion engine based on error patterns
- [ ] JSON export mode for AI consumption
- [ ] Configurable verbosity levels (silent, normal, verbose, debug)
- [ ] Support for custom error analyzers (plugin system)

### R3: Enhanced Assertions Package
- [ ] `expectWithContext()` wrapper with state capture
- [ ] `expectComponent()` for React component assertions
- [ ] `expectApiCall()` for API request/response assertions
- [ ] `expectDatabase()` for DB state assertions
- [ ] Automatic mock call history tracking
- [ ] Diff generation for complex objects
- [ ] Custom matchers with better error messages
- [ ] Framework adapters (Vitest, Jest, Playwright)

### R4: Monetization & Product Features
- [ ] License validation system (API key checking)
- [ ] Feature gating (free vs pro vs enterprise)
- [ ] Usage analytics (telemetry opt-in)
- [ ] Update notifications for new versions
- [ ] Trial period handling (14 days for Pro features)
- [ ] Team license seat management
- [ ] Offline license caching
- [ ] GDPR-compliant data collection

### R5: Documentation & Marketing
- [ ] Documentation website (Next.js + Tailwind + MDX)
- [ ] Interactive playground for testing reporter output
- [ ] Comparison page (vs standard Vitest reporter)
- [ ] Installation guide for all frameworks
- [ ] Migration guides (from Jest, from standard reporters)
- [ ] API reference with TypeScript types
- [ ] Video tutorials and demos
- [ ] Pricing page with feature comparison

### R6: Distribution & CI/CD
- [ ] npm publish workflow (GitHub Actions)
- [ ] Automated versioning (changesets)
- [ ] Automated changelog generation
- [ ] Bundle size tracking and limits
- [ ] Type checking in CI
- [ ] Unit tests for library code
- [ ] Integration tests with Vitest/Jest
- [ ] E2E tests for CLI tools

═══════════════════════════════════════════════════════
IMPLEMENTATION CHECKLIST
═══════════════════════════════════════════════════════

### Phase 1: Monorepo Setup & Core Package Structure - ❌ NOT COMPLETED
- [ ] Create new GitHub repo `mostest`
- [ ] Initialize pnpm workspace monorepo structure
- [ ] Create `packages/core/` with shared TypeScript types
- [ ] Create `packages/reporter/` for intelligent reporter
- [ ] Create `packages/assertions/` for enhanced assertions
- [ ] Create `packages/cli/` for scenario generation tools
- [ ] Setup tsup for building all packages
- [ ] Configure dual ESM/CJS exports in package.json
- [ ] Add MIT license (or commercial license)
- [ ] Setup prettier, eslint, and TypeScript configs
- [ ] **FALLBACK CHECK**: Verify all packages build successfully
- [ ] **CRITICAL COMPILE**: Run `pnpm -r build` across all packages
- [ ] **CRITICAL CHECK PASS**: Confirm monorepo structure is correct

### Phase 2: Core Package (@mostest/core) - ❌ NOT COMPLETED
- [ ] Define core TypeScript types (ErrorAnalysis, ReporterConfig, etc.)
- [ ] Create error pattern matchers (regex patterns for common errors)
- [ ] Implement error classification system (mock, assertion, API, timeout)
- [ ] Create state capture utilities (component, API, database)
- [ ] Add diff generation utilities for objects/arrays
- [ ] Export shared constants and enums
- [ ] Write unit tests for core utilities
- [ ] Generate TypeScript declaration files (.d.ts)
- [ ] **FALLBACK CHECK**: Verify types are exported correctly
- [ ] **CRITICAL COMPILE**: Run `pnpm build` and check dist/
- [ ] **CRITICAL CHECK PASS**: Confirm core package builds and types work

### Phase 3: Reporter Package (@mostest/reporter) - ❌ NOT COMPLETED
- [ ] Create Vitest reporter class implementing Reporter interface
- [ ] Implement `onTaskUpdate()` hook for failure interception
- [ ] Add error analyzer with pattern matching engine
- [ ] Create root cause analysis with WHY/WHAT/HOW sections
- [ ] Generate fix suggestions based on error type
- [ ] Add JSON export mode for LLM consumption
- [ ] Implement verbosity levels (silent, normal, verbose)
- [ ] Add plugin system for custom analyzers
- [ ] Create Jest adapter for Jest users
- [ ] Write integration tests with Vitest
- [ ] **FALLBACK CHECK**: Verify reporter captures failures correctly
- [ ] **CRITICAL COMPILE**: Run `pnpm build` and test in sample project
- [ ] **CRITICAL CHECK PASS**: Confirm reporter works with Vitest

### Phase 4: Assertions Package (@mostest/assertions) - ❌ NOT COMPLETED
- [ ] Create `expectWithContext()` wrapper with state tracking
- [ ] Implement `expectComponent()` for React assertions
- [ ] Implement `expectApiCall()` for API assertions
- [ ] Implement `expectDatabase()` for DB assertions
- [ ] Add automatic mock call history capture
- [ ] Create custom matchers (toHaveBeenCalledWithShape, etc.)
- [ ] Add framework adapters (Vitest, Jest, Playwright)
- [ ] Write unit tests for all assertion helpers
- [ ] Create TypeScript types for custom matchers
- [ ] **FALLBACK CHECK**: Verify assertions capture context
- [ ] **CRITICAL COMPILE**: Run `pnpm build` and check types
- [ ] **CRITICAL CHECK PASS**: Confirm assertions work in tests

### Phase 5: License & Monetization System - ❌ NOT COMPLETED
- [ ] Create license validation API (Cloudflare Workers + D1)
- [ ] Implement API key checking in reporter package
- [ ] Add feature gating (free features vs pro features)
- [ ] Create trial period system (14-day Pro trial)
- [ ] Add usage telemetry (opt-in, GDPR compliant)
- [ ] Implement offline license caching
- [ ] Create license activation flow
- [ ] Add team seat management for Enterprise
- [ ] Build admin dashboard for license management
- [ ] **FALLBACK CHECK**: Verify license checks work offline
- [ ] **CRITICAL COMPILE**: Run `pnpm build` for all packages
- [ ] **CRITICAL CHECK PASS**: Test free, pro, and enterprise tiers

### Phase 6: Documentation Website - ❌ NOT COMPLETED
- [ ] Create Next.js site at `apps/docs/` (in monorepo)
- [ ] Setup Tailwind CSS + shadcn/ui components
- [ ] Create MDX-based documentation pages
- [ ] Build interactive playground with CodeSandbox embed
- [ ] Add installation guide for Vitest/Jest/Playwright
- [ ] Create API reference with TypeScript types
- [ ] Build pricing page with feature comparison table
- [ ] Add video tutorials and GIF demos
- [ ] Setup Vercel deployment
- [ ] **FALLBACK CHECK**: Verify all docs pages render
- [ ] **CRITICAL COMPILE**: Run `pnpm build` for docs site
- [ ] **CRITICAL CHECK PASS**: Deploy to mostest.dev

### Phase 7: CLI Package (@mostest/cli) - ❌ NOT COMPLETED
- [ ] Create CLI with Commander.js
- [ ] Add `init` command to setup scenario directories
- [ ] Add `generate` command for test generation (calls AI API)
- [ ] Add `analyze` command to analyze failure output
- [ ] Implement Gherkin parser for .feature files
- [ ] Add scenario validation and linting
- [ ] Create progress indicators for generation
- [ ] Add interactive prompts for configuration
- [ ] Write tests for CLI commands
- [ ] **FALLBACK CHECK**: Verify CLI commands work
- [ ] **CRITICAL COMPILE**: Run `pnpm build` and test binary
- [ ] **CRITICAL CHECK PASS**: Test all CLI commands

### Phase 8: Publishing & Distribution - ❌ NOT COMPLETED
- [ ] Setup changesets for versioning
- [ ] Configure npm publish workflow (GitHub Actions)
- [ ] Publish `@mostest/core` to npm
- [ ] Publish `@mostest/reporter` to npm
- [ ] Publish `@mostest/assertions` to npm
- [ ] Publish `@mostest/cli` to npm
- [ ] Add bundle size checking in CI
- [ ] Setup automated changelog generation
- [ ] Create release announcement template
- [ ] Test installation in fresh projects
- [ ] **FALLBACK CHECK**: Verify packages install correctly
- [ ] **CRITICAL COMPILE**: Install in test project and run
- [ ] **CRITICAL CHECK PASS**: Confirm all packages work together

═══════════════════════════════════════════════════════
TEST COVERAGE & VALIDATION
═══════════════════════════════════════════════════════

### Manual Testing Checklist
- [ ] Generate unit test from sample scenario (Component A stores data)
- [ ] Run generated unit test: `npm run test:generated:unit`
- [ ] Verify test compiles without TypeScript errors
- [ ] Verify test executes and passes
- [ ] Generate API E2E test from sample scenario (CRUD workflow)
- [ ] Run generated API E2E test: `npm run test:generated:e2e`
- [ ] Verify API E2E test makes real tRPC calls
- [ ] Verify API E2E test creates/reads/updates/deletes data
- [ ] Test with invalid Gherkin syntax (should fail gracefully)
- [ ] Test with missing tags (should default to @e2e)
- [ ] Test with empty scenario (should skip)

### Sample Test Scenarios

**Unit Test Scenario:**
```gherkin
@unit @component
Scenario: Progress form stores data
  Given a ProgressForm component
  When I enter 80% progress
  And I click Save
  Then the createProgress mutation should be called with 80%
```

**Expected Generated Test:**
```typescript
// scenarios/generated/unit/progress-form-stores-data.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import ProgressForm from '@/app/components/progress/form';

describe('Progress form stores data', () => {
  it('should call createProgress mutation when saved', () => {
    const mockCreate = vi.fn();
    render(<ProgressForm onCreate={mockCreate} />);

    fireEvent.change(screen.getByLabelText('Progress'), { target: { value: '80' } });
    fireEvent.click(screen.getByText('Save'));

    expect(mockCreate).toHaveBeenCalledWith({ value: 80 });
  });
});
```

**API E2E Test Scenario:**
```gherkin
@e2e @api
Scenario: Component A stores progress, Component B retrieves it
  Given an authenticated user context
  When I call createProgress API with 80%
  And I call getProgress API
  Then the response should contain 80%
  And the database should have the record
```

**Expected Generated Test:**
```typescript
// scenarios/generated/e2e/progress-crud-flow.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createCaller } from '@/app/server/routers/_app';
import { createTestContext } from '@/tests/helpers/context';

describe('Component A stores progress, Component B retrieves it', () => {
  let caller: ReturnType<typeof createCaller>;
  let progressId: string;

  beforeEach(async () => {
    const ctx = await createTestContext();
    caller = createCaller(ctx);
  });

  it('should store and retrieve progress via API', async () => {
    // Component A: Store
    const created = await caller.progress.create({
      userId: 'test-user',
      value: 80
    });
    progressId = created.progressId;

    expect(created.value).toBe(80);

    // Component B: Retrieve
    const retrieved = await caller.progress.getById({
      progressId
    });

    expect(retrieved.value).toBe(80);
  });

  afterEach(async () => {
    if (progressId) {
      await caller.progress.delete({ progressId });
    }
  });
});
```

### Validation Criteria
- Generated tests must compile without TypeScript errors
- Generated tests must follow existing code patterns (imports, naming, structure)
- Unit tests must use React Testing Library patterns
- API E2E tests must use tRPC createCaller() pattern
- All tests must include proper cleanup/teardown logic
- Generated code must match style guide (prettier formatting)

═══════════════════════════════════════════════════════
LIBRARY STRUCTURE (MONOREPO)
═══════════════════════════════════════════════════════

### Repository Structure
```
mostest/
├── packages/
│   ├── core/                    (@mostest/core)
│   │   ├── src/
│   │   │   ├── types.ts         # Core TypeScript types
│   │   │   ├── patterns.ts      # Error pattern matchers
│   │   │   ├── analyzers.ts     # Error classification
│   │   │   ├── state-capture.ts # State snapshot utilities
│   │   │   └── index.ts         # Public API
│   │   ├── package.json
│   │   └── tsup.config.ts       # Build config
│   │
│   ├── reporter/                (@mostest/reporter)
│   │   ├── src/
│   │   │   ├── vitest-reporter.ts      # Vitest reporter plugin
│   │   │   ├── jest-reporter.ts        # Jest reporter plugin
│   │   │   ├── error-analyzer.ts       # WHY/WHAT/HOW analysis
│   │   │   ├── fix-suggester.ts        # Fix recommendations
│   │   │   ├── json-exporter.ts        # LLM-friendly output
│   │   │   ├── license-checker.ts      # License validation
│   │   │   └── index.ts                # Public API
│   │   ├── package.json
│   │   └── tsup.config.ts
│   │
│   ├── assertions/              (@mostest/assertions)
│   │   ├── src/
│   │   │   ├── expect-with-context.ts  # Core wrapper
│   │   │   ├── component-matchers.ts   # React assertions
│   │   │   ├── api-matchers.ts         # API assertions
│   │   │   ├── db-matchers.ts          # Database assertions
│   │   │   ├── adapters/
│   │   │   │   ├── vitest.ts           # Vitest adapter
│   │   │   │   ├── jest.ts             # Jest adapter
│   │   │   │   └── playwright.ts       # Playwright adapter
│   │   │   └── index.ts                # Public API
│   │   ├── package.json
│   │   └── tsup.config.ts
│   │
│   └── cli/                     (@mostest/cli)
│       ├── src/
│       │   ├── commands/
│       │   │   ├── init.ts              # Setup command
│       │   │   ├── generate.ts          # Test generation
│       │   │   └── analyze.ts           # Failure analysis
│       │   ├── parsers/
│       │   │   └── gherkin.ts           # Gherkin parser
│       │   ├── ai-client.ts             # AI API integration
│       │   └── index.ts                 # CLI entry
│       ├── package.json
│       └── tsup.config.ts
│
├── apps/
│   └── docs/                    (Documentation website)
│       ├── src/
│       │   ├── app/
│       │   │   ├── page.tsx             # Landing page
│       │   │   ├── docs/                # MDX docs
│       │   │   ├── pricing/             # Pricing page
│       │   │   └── playground/          # Interactive demo
│       │   └── components/              # UI components
│       ├── package.json
│       └── next.config.js
│
├── pnpm-workspace.yaml
├── package.json
├── tsconfig.json
├── .changeset/                  # Versioning config
└── .github/
    └── workflows/
        ├── publish.yml           # npm publish
        ├── ci.yml                # Tests & type checking
        └── docs-deploy.yml       # Deploy docs site
```

### Package Dependencies

**@mostest/core** (no dependencies)
```json
{
  "name": "@mostest/core",
  "version": "0.1.0",
  "type": "module",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    }
  },
  "peerDependencies": {
    "vitest": "^2.0.0 || ^3.0.0"
  }
}
```

**@mostest/reporter** (depends on core)
```json
{
  "name": "@mostest/reporter",
  "version": "0.1.0",
  "dependencies": {
    "@mostest/core": "workspace:*"
  },
  "peerDependencies": {
    "vitest": "^2.0.0 || ^3.0.0"
  }
}
```

**@mostest/assertions** (depends on core)
```json
{
  "name": "@mostest/assertions",
  "version": "0.1.0",
  "dependencies": {
    "@mostest/core": "workspace:*"
  },
  "peerDependencies": {
    "vitest": "^2.0.0 || ^3.0.0"
  }
}
```

**@mostest/cli** (depends on core, reporter, assertions)
```json
{
  "name": "@mostest/cli",
  "version": "0.1.0",
  "bin": {
    "scenario-test": "./dist/index.js"
  },
  "dependencies": {
    "@mostest/core": "workspace:*",
    "@mostest/reporter": "workspace:*",
    "@mostest/assertions": "workspace:*",
    "commander": "^12.0.0",
    "@anthropic-ai/sdk": "^0.32.0"
  }
}
```

### Installation (Customer Perspective)

**Free Tier - Reporter Only:**
```bash
npm install -D @mostest/reporter
```

**Pro Tier - Reporter + Assertions:**
```bash
npm install -D @mostest/reporter @mostest/assertions
```

**Enterprise Tier - Full Suite:**
```bash
npm install -D @mostest/reporter @mostest/assertions @mostest/cli
```

### Configuration (Customer Usage)

**vitest.config.ts:**
```typescript
import { defineConfig } from 'vitest/config';
import { ScenarioTestReporter } from '@mostest/reporter';
import { setupAssertions } from '@mostest/assertions';

export default defineConfig({
  test: {
    reporters: [
      'default',
      new ScenarioTestReporter({
        licenseKey: process.env.SCENARIO_TEST_LICENSE,
        verbosity: 'verbose',
        exportJson: true,
      }),
    ],
    setupFiles: ['./test-setup.ts'],
  },
});
```

**test-setup.ts:**
```typescript
import { setupAssertions } from '@mostest/assertions';

// Enhance expect() globally
setupAssertions();
```

═══════════════════════════════════════════════════════
PRICING & BUSINESS MODEL
═══════════════════════════════════════════════════════

### Tier Structure

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ FREE TIER (Open Source)                            ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
**Price**: $0/month
**Target**: Individual developers, open source projects

**Features:**
✅ Intelligent reporter (WHY/WHAT sections only)
✅ Basic error pattern matching
✅ Standard terminal output
✅ Community support (GitHub Discussions)
✅ MIT licensed core packages

**Limitations:**
❌ No HOW (fix suggestions)
❌ No JSON export for AI
❌ No enhanced assertions
❌ No CLI tools
❌ No priority support

**Packages:**
- `@mostest/reporter` (basic mode)

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ PRO TIER                                           ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
**Price**: $29/month per developer (or $290/year, save 17%)
**Target**: Professional developers, small teams

**Features:**
✅ Everything in Free
✅ Full WHY/WHAT/HOW analysis with fix suggestions
✅ JSON export mode for Claude Code/LLMs
✅ Enhanced assertions (`expectWithContext`, `expectComponent`, etc.)
✅ AI-powered scenario generation
✅ 14-day free trial
✅ Email support (48h response)
✅ License for 1 developer

**Packages:**
- `@mostest/reporter` (full mode)
- `@mostest/assertions`

**License Key Required**: Yes

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ENTERPRISE TIER                                    ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
**Price**: $299/month for 5 seats (+ $49/month per extra seat)
**Target**: Companies, large teams

**Features:**
✅ Everything in Pro
✅ Full CLI tooling (`scenario-test init`, `generate`, `analyze`)
✅ Team license management dashboard
✅ Custom error analyzers and reporters
✅ Usage analytics and insights
✅ Priority support (4h response, Slack/Discord)
✅ Dedicated onboarding session
✅ Early access to new features
✅ Offline license support

**Packages:**
- `@mostest/reporter` (full mode)
- `@mostest/assertions`
- `@mostest/cli`

**License Key Required**: Yes (team license with seat management)

### Feature Comparison Table

| Feature | Free | Pro | Enterprise |
|---------|------|-----|------------|
| Intelligent reporter (WHY/WHAT) | ✅ | ✅ | ✅ |
| Fix suggestions (HOW) | ❌ | ✅ | ✅ |
| JSON export for AI | ❌ | ✅ | ✅ |
| Enhanced assertions | ❌ | ✅ | ✅ |
| CLI tools | ❌ | ❌ | ✅ |
| AI scenario generation | ❌ | ✅ | ✅ |
| Custom analyzers | ❌ | ❌ | ✅ |
| Team dashboard | ❌ | ❌ | ✅ |
| Support | Community | Email (48h) | Priority (4h) |
| License seats | N/A | 1 | 5+ |
| Price/month | $0 | $29 | $299 |

### Revenue Model

**Target Customers:**
1. **Free Tier**: 10,000+ users (lead generation, community building)
2. **Pro Tier**: 500 paid developers (avg $29/mo) = $14,500/mo
3. **Enterprise Tier**: 20 companies (avg 10 seats) = $7,800/mo

**Projected MRR**: $22,300/month ($267,600/year)

**Conversion Funnel:**
- Free → Pro: 5% conversion (500 / 10,000)
- Pro → Enterprise: 8% conversion (40 teams / 500 users)

**Customer Acquisition:**
- Developer community (Twitter, Reddit, HN)
- npm package downloads (viral coefficient)
- Documentation SEO (rank for "vitest testing" etc.)
- Partnership with Vitest team (official plugin?)

### Licensing System Architecture

**License API** (Cloudflare Workers + D1):
```typescript
// License validation endpoint
POST /api/v1/license/validate
{
  "licenseKey": "sk_pro_...",
  "packageName": "@mostest/reporter",
  "version": "1.0.0"
}

Response:
{
  "valid": true,
  "tier": "pro",
  "features": ["full-analysis", "json-export", "assertions"],
  "expiresAt": "2025-12-31T23:59:59Z",
  "seats": 1,
  "usedSeats": 1
}
```

**In-Package License Check**:
```typescript
// packages/reporter/src/license-checker.ts
export async function validateLicense(key?: string) {
  if (!key) {
    return { tier: 'free', features: ['basic-reporter'] };
  }

  // Check local cache first (offline support)
  const cached = await getCachedLicense(key);
  if (cached && !isExpired(cached)) {
    return cached;
  }

  // Validate with API
  const response = await fetch('https://license.mostest.dev/validate', {
    method: 'POST',
    body: JSON.stringify({ licenseKey: key }),
  });

  const license = await response.json();
  await cacheLicense(key, license);
  return license;
}
```

**Feature Gating**:
```typescript
// packages/reporter/src/vitest-reporter.ts
export class ScenarioTestReporter implements Reporter {
  async onTaskUpdate(task: Task) {
    const license = await validateLicense(this.config.licenseKey);

    // WHY/WHAT available to all
    console.log(analysis.why);
    console.log(analysis.what);

    // HOW only for paid tiers
    if (license.features.includes('fix-suggestions')) {
      console.log(analysis.how);
      console.log(analysis.suggestedFix);
    } else {
      console.log('\n💎 Upgrade to Pro for fix suggestions');
      console.log('   Visit: https://scenario-test.dev/pricing');
    }
  }
}
```

═══════════════════════════════════════════════════════
SUCCESS METRICS
═══════════════════════════════════════════════════════

### Product Success Metrics

**Technical Metrics:**
- **npm Downloads**: 10k+/month within 6 months
- **GitHub Stars**: 1k+ stars within 3 months
- **Bundle Size**: < 50KB for reporter package
- **Test Pass Rate**: 90%+ of tests pass after generation

**Business Metrics:**
- **MRR**: $5k in month 3, $15k in month 6, $25k in month 12
- **Conversion Rate**: 5% free → pro, 8% pro → enterprise
- **Churn Rate**: < 10% monthly
- **NPS Score**: > 50

**User Metrics:**
- **Time to First Test**: < 5 minutes from install
- **Debugging Time Saved**: 80% reduction (10min → 2min)
- **Developer Satisfaction**: 4.5+ stars on npm
- **Support Tickets**: < 20/month

### Validation Criteria
- ✅ Library installable via npm in any project
- ✅ Works with Vitest, Jest, Playwright
- ✅ Zero configuration for basic usage
- ✅ License validation works offline
- ✅ Documentation site ranks for "intelligent test reporter"
- ✅ First paying customer within 1 month of launch
- ✅ 100 free tier users within 1 week

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
FRAMEWORK ARCHITECTURE
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

```
┌─────────────────────────────────────────────────────┐
│                   DATA FLOW                         │
└─────────────────────────────────────────────────────┘

1. Developer Writes Scenario
   ↓
   scenarios/features/my-feature.feature

2. Developer Provides Scenario to Claude Code
   ↓
   Via chat: "Generate test for this scenario"

3. Claude Code Analyzes
   ↓
   Reads existing test patterns from codebase
   Understands Gherkin scenario structure

4. Claude Code Generates Test
   ↓
   Writes complete test code following patterns

5. Developer Saves Test
   ↓
   scenarios/generated/{unit|e2e}/test-name.test.ts

6. Test Execution
   ↓
   npm run test:generated:{unit|e2e}

7. Validation
   ↓
   Tests pass ✅ or fail ❌ with clear errors
```

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ WORKFLOW DIAGRAM                                   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

```
[Developer] → [Write .feature scenario]
                    ↓
            [Give to Claude Code]
                    ↓
            [Claude Code reads:]
         ┌──────────┴──────────┐
         ↓                     ↓
  [Existing tests]     [Scenario steps]
   (for patterns)       (for logic)
         ↓                     ↓
         └──────────┬──────────┘
                    ↓
         [Generated Test Code]
                    ↓
  [Developer saves to file]
                    ↓
         [scenarios/generated/]
                    ↓
         [npm run test]
                    ↓
            [Test passes ✅]
```

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
GHERKIN SCENARIO FORMAT
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

### Basic Structure
```gherkin
Feature: [Feature Name]
  [Feature Description]

  @tag1 @tag2
  Scenario: [Scenario Name]
    Given [precondition]
    When [action]
    Then [expected result]
```

### Supported Tags
- `@unit` - Generate Vitest unit test
- `@component` - Generate React Testing Library component test
- `@e2e` - Generate API-level E2E test (default)
- `@api` - Generate tRPC API test
- `@critical` - Mark as high-priority test
- `@smoke` - Mark as smoke test

### Example: Unit Test Scenario
```gherkin
Feature: Progress Management
  Users can save and view progress records

  @unit @component
  Scenario: Progress form calls mutation on save
    Given a ProgressForm component
    And a mocked createProgress mutation
    When I enter 80% in the progress input
    And I click the Save button
    Then the createProgress mutation should be called with 80%
```

### Example: API E2E Test Scenario
```gherkin
Feature: Progress CRUD Workflow
  Full create, read, update, delete cycle for progress

  @e2e @api
  Scenario: Complete CRUD lifecycle
    Given an authenticated user context
    When I create progress record with 60%
    And I read the progress record
    Then the value should be 60%
    When I update progress to 80%
    And I read the progress record again
    Then the value should be 80%
    When I delete the progress record
    Then the record should not exist
```

### Data Tables (Advanced)
```gherkin
@unit
Scenario: Display multiple messages
  Given a ChatPanel with messages:
    | role      | content    |
    | user      | Hello      |
    | assistant | Hi there!  |
  When I render the component
  Then I should see "Hello"
  And I should see "Hi there!"
```

▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
CLAUDE CODE GENERATION STRATEGY
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

### How Claude Code Generates Tests

**1. Developer Provides Scenario**
```gherkin
@unit
Scenario: User saves progress
  Given a ProgressForm component
  When I enter 80%
  Then mutation should be called
```

**2. Claude Code Analyzes Codebase**
- Reads existing test files to learn patterns
- For `@unit`: Reads `app/components/__tests__/*.test.tsx`
- For `@e2e` or `@api`: Reads `app/server/routers/__tests__/*.test.ts`
- Understands project structure (Next.js, TypeScript, tRPC)
- Identifies import paths and naming conventions

**3. Claude Code Understands Requirements**
- Test type from tags (`@unit`, `@e2e`, `@api`)
- Steps translate to test actions:
  - `Given` → Setup/arrange
  - `When` → Action/act
  - `Then` → Assertion/assert
- Component/API names from scenario text
- Expected behaviors from assertions

**4. Claude Code Generates Complete Test**
- Follows existing code patterns exactly
- Uses proper TypeScript types
- Includes all necessary imports
- Adds setup/teardown if needed
- Matches codebase style (formatting, naming)

**5. Developer Saves and Runs**
- Copy generated code to file
- Save in appropriate directory
- Run with npm script
- Test executes successfully ✅

═══════════════════════════════════════════════════════
USAGE EXAMPLES
═══════════════════════════════════════════════════════

### Example 1: Generate Unit Test

**Step 1: Write Scenario**
Create `scenarios/features/progress-form.feature`:
```gherkin
@unit
Scenario: Save progress triggers mutation
  Given a ProgressForm component
  When I enter 75% and save
  Then createProgress should be called with 75%
```

**Step 2: Provide to Claude Code**
```
"Generate a unit test for this scenario:
[paste scenario above]"
```

**Step 3: Claude Code Generates**
Claude Code creates complete test code and provides it to you.

**Step 4: Save Test**
Save to `scenarios/generated/unit/save-progress-triggers-mutation.test.tsx`

**Step 5: Run Test**
```bash
npm run test:generated:unit
```

### Example 2: Generate API E2E Test

**Step 1: Write Scenario**
Create `scenarios/features/progress-crud.feature`:
```gherkin
@e2e @api
Scenario: Store and retrieve progress
  Given an authenticated user
  When I create progress with 80%
  And I retrieve the progress
  Then it should return 80%
```

**Step 2: Provide to Claude Code**
```
"Generate an API E2E test for this scenario:
[paste scenario above]"
```

**Step 3: Claude Code Generates**
Claude Code analyzes tRPC router tests and creates API E2E test.

**Step 4: Save Test**
Save to `scenarios/generated/e2e/store-and-retrieve-progress.test.ts`

**Step 5: Run Test**
```bash
npm run test:generated:e2e
```

### Example 3: Run All Generated Tests

**Run all tests at once:**
```bash
npm run test:generated:unit && npm run test:generated:e2e
```

═══════════════════════════════════════════════════════
NOTES AND CONSIDERATIONS
═══════════════════════════════════════════════════════

### Limitations
- AI-generated tests may require manual review and adjustment
- Complex UI interactions may not generate perfectly on first try
- API E2E tests require tRPC router structure to follow patterns
- Generated tests assume standard component props and patterns

### Best Practices
- Write clear, specific scenario steps
- Use consistent naming conventions in scenarios
- Review generated tests before committing
- Keep scenarios focused on single behavior
- Use tags appropriately (@unit, @e2e, @api)
- Provide examples for AI to learn from

### Future Enhancements (Not in Current Scope)
- Visual regression testing integration
- Storybook interaction tests generation
- Support for Playwright UI E2E tests
- Step library for reusable common steps
- Scenario validation and linting
- VS Code extension for scenario editing

═══════════════════════════════════════════════════════
TEST FAILURE INTELLIGENCE SYSTEM
═══════════════════════════════════════════════════════

### Problem: Standard Test Failures Are Not Actionable

**Standard Vitest Output:**
```
❌ FAIL  scenarios/generated/unit/save-progress.test.tsx
  ✕ should call createProgress mutation when saved (42ms)

  Expected: 80
  Received: undefined

  at expectWithContext (tests/utils/assertion-helpers.ts:15:23)
```

**Issues:**
- No explanation of WHY it failed (root cause)
- No context of WHAT state was wrong
- No guidance on HOW to fix it
- Claude Code would need to ask: "What was the component state? What props were passed? What was mocked?"

### Solution: Intelligent Failure Reporting

**Enhanced Output:**
```
❌ FAIL  scenarios/generated/unit/save-progress.test.tsx
  ✕ should call createProgress mutation when saved (42ms)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔍 FAILURE ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHY IT FAILED:
  Assertion expected mutation to be called with value 80,
  but the mutation was never called (received undefined).

WHAT WAS WRONG:
  Component State:
    - Input value: "80" (string)
    - Form submitted: true
    - onCreate prop: [MockFunction] (provided)

  Mock Call History:
    - onCreate: called 0 times
    - Expected: called 1 time with { value: 80 }

  Root Cause: The form's onSubmit handler didn't trigger onCreate

HOW TO FIX:
  1. Check if ProgressForm's onSubmit handler calls props.onCreate
  2. Verify the form has an onSubmit event listener
  3. Check if preventDefault() is blocking form submission
  4. Ensure onClick on Save button triggers form.submit()

SUGGESTED CODE FIX:
  // In ProgressForm component:
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onCreate({ value: Number(inputValue) }); // ← Add this call
  };

DEBUGGING COMMANDS:
  - Add console.log to ProgressForm's onSubmit handler
  - Check if Save button is type="submit" or type="button"
  - Run: npm run test -- --reporter=verbose --ui

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Key Features of Intelligent Reporting

**1. Root Cause Analysis (WHY)**
- Analyzes error type and context
- Identifies likely cause based on error pattern
- Explains what the test expected vs what happened

**2. State Snapshot (WHAT)**
- Component props at failure time
- Mock function call history
- Database state before/after for API tests
- Request/response data for API tests

**3. Fix Suggestions (HOW)**
- Step-by-step debugging checklist
- Suggested code changes
- Common pitfalls for this error type
- Debugging commands to run

**4. Context Preservation**
- Full stack trace with source code snippets
- Variable values at failure point
- Async operation status (pending/resolved/rejected)
- Network request logs for API tests

### Implementation Strategy

**Custom Vitest Reporter** (`tests/reporters/intelligent-reporter.ts`):
```typescript
import type { Reporter } from 'vitest';
import { analyzeError } from '../utils/error-analyzer';

export default class IntelligentReporter implements Reporter {
  onTaskUpdate(task: Task) {
    if (task.result?.state === 'fail') {
      const analysis = analyzeError(task);
      console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('🔍 FAILURE ANALYSIS');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
      console.log('WHY IT FAILED:');
      console.log(`  ${analysis.rootCause}\n`);
      console.log('WHAT WAS WRONG:');
      console.log(analysis.stateSnapshot);
      console.log('\nHOW TO FIX:');
      analysis.suggestions.forEach((s, i) => {
        console.log(`  ${i + 1}. ${s}`);
      });
      if (analysis.suggestedCodeFix) {
        console.log('\nSUGGESTED CODE FIX:');
        console.log(analysis.suggestedCodeFix);
      }
      console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    }
  }
}
```

**Error Analyzer** (`tests/utils/error-analyzer.ts`):
```typescript
interface ErrorAnalysis {
  rootCause: string;
  stateSnapshot: string;
  suggestions: string[];
  suggestedCodeFix?: string;
}

export function analyzeError(task: Task): ErrorAnalysis {
  const error = task.result?.errors?.[0];
  const errorMessage = error?.message || '';

  // Pattern matching for common errors
  if (errorMessage.includes('mutation should be called')) {
    return {
      rootCause: 'Mock function was not called as expected',
      stateSnapshot: captureComponentState(task),
      suggestions: [
        'Check if event handler calls the prop function',
        'Verify button click triggers the handler',
        'Ensure form submission is not prevented',
      ],
      suggestedCodeFix: generateMockCallFix(task),
    };
  }

  if (errorMessage.includes('Expected') && errorMessage.includes('Received')) {
    return {
      rootCause: 'Value mismatch in assertion',
      stateSnapshot: captureValueDiff(error),
      suggestions: [
        'Check data transformation logic',
        'Verify API response structure',
        'Ensure type conversions are correct',
      ],
    };
  }

  // API test failures
  if (errorMessage.includes('TRPC')) {
    return {
      rootCause: 'API call failed',
      stateSnapshot: captureApiState(task),
      suggestions: [
        'Check database connection',
        'Verify request parameters',
        'Review tRPC procedure implementation',
      ],
    };
  }

  // Generic fallback
  return {
    rootCause: errorMessage,
    stateSnapshot: JSON.stringify(task.meta, null, 2),
    suggestions: ['Review stack trace', 'Check test setup'],
  };
}
```

**Enhanced Assertions** (`tests/utils/assertion-helpers.ts`):
```typescript
import { expect } from 'vitest';

// Wrapper that captures context for better error messages
export function expectWithContext<T>(
  actual: T,
  context: { componentName?: string; propName?: string; state?: any } = {}
) {
  const originalExpect = expect(actual);

  // Store context for reporter to access
  (globalThis as any).__testContext = {
    ...((globalThis as any).__testContext || {}),
    [expect.getState().currentTestName || 'unknown']: context,
  };

  return originalExpect;
}

// Component-specific assertion with state capture
export function expectComponent(
  component: any,
  props: Record<string, any>
) {
  return expectWithContext(component, {
    componentName: component.type?.name,
    state: { props },
  });
}

// API assertion with request/response capture
export function expectApiCall<T>(
  result: T,
  request: any
) {
  return expectWithContext(result, {
    state: {
      request,
      response: result,
      timestamp: new Date().toISOString(),
    },
  });
}
```

### Usage in Generated Tests

**Unit Test with Enhanced Assertions:**
```typescript
import { expectWithContext } from '@/tests/utils/assertion-helpers';

test('should call createProgress mutation', () => {
  const mockCreate = vi.fn();
  render(<ProgressForm onCreate={mockCreate} />);

  fireEvent.change(screen.getByLabelText('Progress'), {
    target: { value: '80' }
  });
  fireEvent.click(screen.getByText('Save'));

  // Enhanced assertion with context
  expectWithContext(mockCreate.mock.calls.length, {
    componentName: 'ProgressForm',
    propName: 'onCreate',
    state: {
      inputValue: '80',
      mockCalls: mockCreate.mock.calls,
    },
  }).toBe(1);

  expectWithContext(mockCreate.mock.calls[0][0], {
    state: { expectedValue: 80 },
  }).toEqual({ value: 80 });
});
```

**API E2E Test with Request/Response Capture:**
```typescript
import { expectApiCall } from '@/tests/utils/assertion-helpers';

test('should create and retrieve progress', async () => {
  const createRequest = { userId: 'test', value: 80 };
  const created = await caller.progress.create(createRequest);

  // Enhanced assertion captures request/response
  expectApiCall(created.value, createRequest).toBe(80);

  const retrieved = await caller.progress.getById({
    progressId: created.progressId
  });

  expectApiCall(retrieved.value, {
    progressId: created.progressId
  }).toBe(80);
});
```

### Configuration

**vitest.config.ts:**
```typescript
import { defineConfig } from 'vitest/config';
import IntelligentReporter from './tests/reporters/intelligent-reporter';

export default defineConfig({
  test: {
    reporters: [
      'default', // Keep standard reporter
      new IntelligentReporter(), // Add intelligent reporter
    ],
  },
});
```

### Benefits for Claude Code

**Before (Standard Failure):**
```
User: "Test failed"
Claude: "Can you show me the component state? What props were passed?
         What was in the mock calls?"
User: "How do I check that?"
Claude: "Add console.logs and re-run..."
[Multiple back-and-forth exchanges]
```

**After (Intelligent Failure):**
```
User: [Pastes intelligent failure output]
Claude: "I can see the issue - the form's onSubmit handler isn't calling
         onCreate. Here's the fix: [provides exact code]"
[Fixed immediately]
```

### Success Metrics

- **Debugging Time**: Reduce from 10+ minutes to < 2 minutes
- **Context Gathering**: 0 back-and-forth questions (all info in output)
- **Fix Accuracy**: Claude Code can fix 80%+ of failures from output alone
- **Developer Experience**: Copy failure output → Paste to Claude Code → Get fix
