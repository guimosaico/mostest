"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ERROR_PATTERNS: () => ERROR_PATTERNS,
  classifyError: () => classifyError,
  extractValueComparison: () => extractValueComparison
});
module.exports = __toCommonJS(index_exports);

// src/patterns.ts
var ERROR_PATTERNS = {
  mockNotCalled: /mutation should be called|expected.*to have been called|mock.*not.*called/i,
  valueMismatch: /Expected:.*Received:|expected.*to (be|equal)|AssertionError/i,
  apiError: /TRPC|fetch.*failed|network error|request failed|HTTP error/i,
  timeout: /timeout|timed out|exceeded.*time/i,
  componentError: /render|component|react|hook/i,
  assertionFailed: /assertion.*failed|expect.*to/i
};
function classifyError(message) {
  if (ERROR_PATTERNS.mockNotCalled.test(message)) return "mock-not-called";
  if (ERROR_PATTERNS.valueMismatch.test(message)) return "value-mismatch";
  if (ERROR_PATTERNS.apiError.test(message)) return "api-error";
  if (ERROR_PATTERNS.timeout.test(message)) return "timeout";
  if (ERROR_PATTERNS.componentError.test(message)) return "component-error";
  if (ERROR_PATTERNS.assertionFailed.test(message)) return "assertion-failed";
  return "unknown";
}
function extractValueComparison(message) {
  const expectedMatch = message.match(/Expected:?\s*(.+)/i);
  const receivedMatch = message.match(/Received:?\s*(.+)/i);
  return {
    expected: expectedMatch?.[1]?.trim(),
    received: receivedMatch?.[1]?.trim()
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ERROR_PATTERNS,
  classifyError,
  extractValueComparison
});
