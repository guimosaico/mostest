/**
 * Core types for MosTest intelligent test reporter
 */

export interface ErrorAnalysis {
  /** Root cause explanation (WHY) - available in free tier */
  why: string;

  /** State snapshot (WHAT) - available in free tier */
  what: string;

  /** Fix suggestions (HOW) - Pro tier only */
  how?: string;

  /** Suggested code fix - Pro tier only */
  suggestedFix?: string;

  /** Additional context */
  context: Record<string, any>;
}

export interface ReporterConfig {
  /** License key for Pro/Enterprise features */
  licenseKey?: string;

  /** Output verbosity level */
  verbosity?: 'silent' | 'normal' | 'verbose' | 'debug';

  /** Export analysis as JSON for LLM consumption */
  exportJson?: boolean;

  /** Path for JSON export */
  outputPath?: string;
}

export interface LicenseInfo {
  valid: boolean;
  tier: 'free' | 'pro' | 'enterprise';
  features: string[];
  expiresAt?: string;
  seats?: number;
  usedSeats?: number;
}

export type ErrorPattern =
  | 'mock-not-called'
  | 'value-mismatch'
  | 'api-error'
  | 'timeout'
  | 'component-error'
  | 'assertion-failed'
  | 'unknown';

export interface ErrorContext {
  errorType: ErrorPattern;
  message: string;
  stack?: string;
  testName?: string;
  componentName?: string;
  mockCalls?: any[];
  expectedValue?: any;
  receivedValue?: any;
}
