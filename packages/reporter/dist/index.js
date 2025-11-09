// src/vitest-reporter.ts
import {
  classifyError,
  extractValueComparison
} from "@mostest/core";
var MostestReporter = class {
  config;
  constructor(config = {}) {
    this.config = {
      verbosity: "normal",
      ...config
    };
  }
  onInit() {
    if (this.config.verbosity !== "silent") {
      console.log("\u{1F9EA} MosTest Reporter initialized");
      if (!this.config.licenseKey) {
        console.log("   Running in FREE mode (WHY/WHAT analysis)");
        console.log("   Upgrade at https://mostest.dev for AI fix suggestions\n");
      }
    }
  }
  // Modern Vitest 3.x hook - preferred method
  onTestCaseResult(testCase) {
    const result = testCase.result();
    if (result.state === "failed") {
      const errors = result.errors || [];
      errors.forEach((error) => {
        const analysis = this.analyzeError(error, testCase);
        this.printAnalysis(analysis, testCase);
      });
    }
  }
  // Legacy hook for Vitest 2.x (commented out to avoid duplicates in Vitest 3.x)
  // onTaskUpdate(packs: any[], events?: any[]) {
  //   // TaskResultPack is a tuple: [id: string, result: TaskResult | undefined, meta: TaskMeta]
  //   packs.forEach((pack) => {
  //     const [taskId, result, meta] = pack;
  //
  //     if (result?.state === 'fail') {
  //       const errors = result.errors || [];
  //       errors.forEach((error: any) => {
  //         const analysis = this.analyzeError(error, { id: taskId, result, meta });
  //         this.printAnalysis(analysis, { id: taskId, result, meta });
  //       });
  //     }
  //   });
  // }
  analyzeError(error, task) {
    const errorMessage = error.message || String(error);
    const errorType = classifyError(errorMessage);
    const comparison = extractValueComparison(errorMessage);
    const why = this.explainWhy(errorType, errorMessage);
    const what = this.captureWhat(errorType, errorMessage, comparison);
    const context = {
      errorType,
      testName: task.name,
      ...comparison
    };
    return { why, what, context };
  }
  explainWhy(errorType, message) {
    switch (errorType) {
      case "mock-not-called":
        return "Mock function was not called as expected.\nThe test expected a function to be invoked, but it was never called.";
      case "value-mismatch":
        return "Value assertion failed.\nThe actual value does not match the expected value.";
      case "api-error":
        return "API call failed.\nThe network request or API endpoint returned an error.";
      case "timeout":
        return "Test timed out.\nThe operation took longer than the allowed time limit.";
      case "component-error":
        return "Component rendering failed.\nThere was an error while rendering or testing the React component.";
      case "assertion-failed":
        return "Test assertion failed.\nThe condition you expected was not met.";
      default:
        return "Test failed with an error.\n" + message.split("\n")[0];
    }
  }
  captureWhat(errorType, message, comparison) {
    let what = "";
    if (comparison.expected && comparison.received) {
      what += `Expected: ${comparison.expected}
`;
      what += `Received: ${comparison.received}
`;
    } else {
      const lines = message.split("\n").slice(0, 3);
      what += lines.join("\n");
    }
    return what;
  }
  printAnalysis(analysis, task) {
    const { verbosity } = this.config;
    if (verbosity === "silent") return;
    const testName = task.fullName || task.name || task.id || "Unknown test";
    console.log("\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501");
    console.log("\u{1F50D} MOSTEST FAILURE ANALYSIS");
    console.log("\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n");
    console.log(`Test: ${testName}`);
    console.log(`Type: ${analysis.context.errorType}
`);
    console.log("WHY IT FAILED:");
    console.log(this.indent(analysis.why, 2));
    console.log();
    console.log("WHAT WAS WRONG:");
    console.log(this.indent(analysis.what, 2));
    console.log();
    if (!this.config.licenseKey) {
      console.log("\u{1F48E} UPGRADE TO PRO FOR:");
      console.log("   \u2022 AI-powered fix suggestions (HOW to fix)");
      console.log("   \u2022 Suggested code changes");
      console.log("   \u2022 JSON export for Claude Code/LLMs");
      console.log("   \u2022 Enhanced assertions");
      console.log("   Visit: https://mostest.dev/pricing\n");
    } else {
      console.log("HOW TO FIX:");
      console.log("   [Pro feature - AI analysis coming soon]\n");
    }
    console.log("\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n");
  }
  indent(text, spaces) {
    const prefix = " ".repeat(spaces);
    return text.split("\n").map((line) => prefix + line).join("\n");
  }
  onFinished(files) {
  }
};
export {
  MostestReporter
};
