/**
 * Creates a throttled version of the given function that only allows it to be executed
 * once within a specified time limit.
 *
 * @template T - The type of the function to throttle.
 * @param {T} func - The function to throttle.
 * @param {number} limit - The minimum time (in milliseconds) between function calls.
 * @returns {T} - A new function that will only execute the original function at most once per `limit` period.
 *
 * @example
 * const log = (message: string) => console.log(message);
 * const throttledLog = throttle(log, 1000);
 * throttledLog("Hello"); // Executes immediately
 * throttledLog("World"); // Ignored
 * setTimeout(() => throttledLog("Delayed"), 1200); // Executes after 1200ms
 */
function throttle<T extends (...args: any[]) => void>(func: T, limit: number): T {
  let lastExecuted = 0;
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const context = this;
    const now = Date.now();

    if (now - lastExecuted >= limit) {
      func.apply(context, args);
      lastExecuted = now;
    } else if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(context, args);
        lastExecuted = Date.now();
        timeout = null;
      }, limit - (now - lastExecuted));
    }
  } as T;
}

export default throttle;
