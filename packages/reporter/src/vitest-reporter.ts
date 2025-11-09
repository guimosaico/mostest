/**
 * MosTest Vitest Reporter
 * Intelligent test failure analysis with AI-powered insights
 */

import type { Reporter, File } from 'vitest';
import {
  classifyError,
  extractValueComparison,
  type ErrorAnalysis,
  type ReporterConfig,
  type ErrorPattern,
} from '@mostest/core';

export class MostestReporter implements Reporter {
  private config: ReporterConfig;

  constructor(config: ReporterConfig = {}) {
    this.config = {
      verbosity: 'normal',
      ...config,
    };
  }

  onInit() {
    if (this.config.verbosity !== 'silent') {
      console.log('🧪 MosTest Reporter initialized');
      if (!this.config.licenseKey) {
        console.log('   Running in FREE mode (WHY/WHAT analysis)');
        console.log('   Upgrade at https://mostest.dev for AI fix suggestions\n');
      }
    }
  }

  onTaskUpdate(packs: any[]) {
    packs.forEach((pack) => {
      const task = pack.result;
      if (task?.state === 'fail') {
        const errors = task.errors || [];
        errors.forEach((error: any) => {
          const analysis = this.analyzeError(error, pack);
          this.printAnalysis(analysis, pack);
        });
      }
    });
  }

  private analyzeError(error: any, task: any): ErrorAnalysis {
    const errorMessage = error.message || String(error);
    const errorType = classifyError(errorMessage);
    const comparison = extractValueComparison(errorMessage);

    // Build WHY explanation (free tier)
    const why = this.explainWhy(errorType, errorMessage);

    // Build WHAT snapshot (free tier)
    const what = this.captureWhat(errorType, errorMessage, comparison);

    // HOW would be Pro tier (not implemented yet)
    const context = {
      errorType,
      testName: task.name,
      ...comparison,
    };

    return { why, what, context };
  }

  private explainWhy(errorType: ErrorPattern, message: string): string {
    switch (errorType) {
      case 'mock-not-called':
        return 'Mock function was not called as expected.\nThe test expected a function to be invoked, but it was never called.';

      case 'value-mismatch':
        return 'Value assertion failed.\nThe actual value does not match the expected value.';

      case 'api-error':
        return 'API call failed.\nThe network request or API endpoint returned an error.';

      case 'timeout':
        return 'Test timed out.\nThe operation took longer than the allowed time limit.';

      case 'component-error':
        return 'Component rendering failed.\nThere was an error while rendering or testing the React component.';

      case 'assertion-failed':
        return 'Test assertion failed.\nThe condition you expected was not met.';

      default:
        return 'Test failed with an error.\n' + message.split('\n')[0];
    }
  }

  private captureWhat(
    errorType: ErrorPattern,
    message: string,
    comparison: { expected?: string; received?: string }
  ): string {
    let what = '';

    if (comparison.expected && comparison.received) {
      what += `Expected: ${comparison.expected}\n`;
      what += `Received: ${comparison.received}\n`;
    } else {
      // Show first few lines of error message
      const lines = message.split('\n').slice(0, 3);
      what += lines.join('\n');
    }

    return what;
  }

  private printAnalysis(analysis: ErrorAnalysis, task: any) {
    const { verbosity } = this.config;
    if (verbosity === 'silent') return;

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🔍 MOSTEST FAILURE ANALYSIS');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    console.log(`Test: ${task.name}`);
    console.log(`Type: ${analysis.context.errorType}\n`);

    console.log('WHY IT FAILED:');
    console.log(this.indent(analysis.why, 2));
    console.log();

    console.log('WHAT WAS WRONG:');
    console.log(this.indent(analysis.what, 2));
    console.log();

    if (!this.config.licenseKey) {
      console.log('💎 UPGRADE TO PRO FOR:');
      console.log('   • AI-powered fix suggestions (HOW to fix)');
      console.log('   • Suggested code changes');
      console.log('   • JSON export for Claude Code/LLMs');
      console.log('   • Enhanced assertions');
      console.log('   Visit: https://mostest.dev/pricing\n');
    } else {
      // Pro tier features would go here
      console.log('HOW TO FIX:');
      console.log('   [Pro feature - AI analysis coming soon]\n');
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  }

  private indent(text: string, spaces: number): string {
    const prefix = ' '.repeat(spaces);
    return text
      .split('\n')
      .map((line) => prefix + line)
      .join('\n');
  }

  onFinished(files?: File[]) {
    // Could add summary here
  }
}
