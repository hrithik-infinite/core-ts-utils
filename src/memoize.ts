/**
 * Memoizes a function by caching its computed results based on arguments.
 *
 * Works for functions with serializable arguments (i.e., JSON.stringify-compatible).
 *
 * @template T - The type of the function to memoize.
 * @param {T} fn - The function to memoize.
 * @returns {T} - A new memoized version of the function.
 *
 * @example
 * const slowFn = (a: number, b: number) => a + b;
 * const memoizedFn = memoize(slowFn);
 * memoizedFn(1, 2); // Computes and caches
 * memoizedFn(1, 2); // Returns cached result
 */
function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map<string, ReturnType<T>>();

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>;
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  } as T;
}

export default memoize;
