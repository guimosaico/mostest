import { Reporter, File } from 'vitest';
import { ReporterConfig } from '@mostest/core';
export { ReporterConfig } from '@mostest/core';

/**
 * MosTest Vitest Reporter
 * Intelligent test failure analysis with AI-powered insights
 */

declare class MostestReporter implements Reporter {
    private config;
    constructor(config?: ReporterConfig);
    onInit(): void;
    onTaskUpdate(packs: any[]): void;
    private analyzeError;
    private explainWhy;
    private captureWhat;
    private printAnalysis;
    private indent;
    onFinished(files?: File[]): void;
}

export { MostestReporter };
