/**
 * Retry a function with exponential backoff
 * @param fn - Async function to retry
 * @param options - Retry options
 * @returns Promise that resolves with the function result
 */
async function retry<T>(
  fn: () => Promise<T>,
  options: {
    maxAttempts?: number;
    initialDelay?: number;
    maxDelay?: number;
    factor?: number;
    onRetry?: (error: Error, attempt: number) => void;
  } = {}
): Promise<T> {
  const { maxAttempts = 5, initialDelay = 100, maxDelay = 10000, factor = 2, onRetry = () => {} } = options;

  let attempt = 0;
  let delay = initialDelay;

  while (true) {
    try {
      return await fn();
    } catch (error) {
      attempt++;

      if (attempt >= maxAttempts) {
        throw error;
      }

      if (error instanceof Error) {
        onRetry(error, attempt);
      }

      // Calculate next delay with exponential backoff
      delay = Math.min(delay * factor, maxDelay);

      // Wait before next attempt
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

export default retry;
