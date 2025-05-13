/**
 * Creates a function that invokes the provided function only once.
 * Subsequent calls return the result of the first invocation.
 *
 * @template T - The type of the original function.
 * @param {T} fn - The function to be executed once.
 * @returns {(...args: Parameters<T>) => ReturnType<T>} - A new function that only executes once.
 *
 * @example
 * const init = () => console.log("Initialized");
 * const runOnce = once(init);
 * runOnce(); // "Initialized"
 * runOnce(); // No output
 */
function once<T extends (...args: any[]) => void>(fn: T) {
  let called = false;
  let result: any;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

export default once;
