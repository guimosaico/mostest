import { describe, it, expect, vi } from 'vitest';

describe('MosTest Demo - Free Tier Features', () => {
  it('should show intelligent analysis for value mismatch', () => {
    const result = { score: 75, status: 'passing' };
    expect(result.score).toBe(80);
  });

  it('should explain mock not called errors', () => {
    const mockCallback = vi.fn();

    // Mock is created but never called
    expect(mockCallback).toHaveBeenCalled();
  });

  it('should clarify timeout issues', async () => {
    await new Promise((resolve) => {
      // Never resolves - will timeout
    });
  }, { timeout: 100 });

  it('should explain API/network errors', async () => {
    const response = await fetch('https://invalid-domain-that-does-not-exist-12345.com/api');
    expect(response.ok).toBe(true);
  });
});

describe('Component Testing Examples', () => {
  it('should explain prop mismatch errors', () => {
    const props = { isOpen: true, count: 5 };
    expect(props.isOpen).toBe(false);
    expect(props.count).toBe(10);
  });
});
