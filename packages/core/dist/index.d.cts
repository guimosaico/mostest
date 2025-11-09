/**
 * Core types for MosTest intelligent test reporter
 */
interface ErrorAnalysis {
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
interface ReporterConfig {
    /** License key for Pro/Enterprise features */
    licenseKey?: string;
    /** Output verbosity level */
    verbosity?: 'silent' | 'normal' | 'verbose' | 'debug';
    /** Export analysis as JSON for LLM consumption */
    exportJson?: boolean;
    /** Path for JSON export */
    outputPath?: string;
}
interface LicenseInfo {
    valid: boolean;
    tier: 'free' | 'pro' | 'enterprise';
    features: string[];
    expiresAt?: string;
    seats?: number;
    usedSeats?: number;
}
type ErrorPattern = 'mock-not-called' | 'value-mismatch' | 'api-error' | 'timeout' | 'component-error' | 'assertion-failed' | 'unknown';
interface ErrorContext {
    errorType: ErrorPattern;
    message: string;
    stack?: string;
    testName?: string;
    componentName?: string;
    mockCalls?: any[];
    expectedValue?: any;
    receivedValue?: any;
}

/**
 * Error pattern matching for intelligent analysis
 */

declare const ERROR_PATTERNS: {
    readonly mockNotCalled: RegExp;
    readonly valueMismatch: RegExp;
    readonly apiError: RegExp;
    readonly timeout: RegExp;
    readonly componentError: RegExp;
    readonly assertionFailed: RegExp;
};
/**
 * Classify error based on message pattern matching
 */
declare function classifyError(message: string): ErrorPattern;
/**
 * Extract expected vs received values from error message
 */
declare function extractValueComparison(message: string): {
    expected?: string;
    received?: string;
};

export { ERROR_PATTERNS, type ErrorAnalysis, type ErrorContext, type ErrorPattern, type LicenseInfo, type ReporterConfig, classifyError, extractValueComparison };
