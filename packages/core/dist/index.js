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
export {
  ERROR_PATTERNS,
  classifyError,
  extractValueComparison
};
