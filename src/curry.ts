/**
 * Transforms a function into its curried version.
 *
 * A curried function allows partial application of arguments until all expected arguments are received.
 *
 * @template T - The type of the original function.
 * @param {T} fn - The original function to curry.
 * @returns {Function} - A curried version of the original function.
 *
 * @example
 * const add = (a: number, b: number, c: number) => a + b + c;
 * const curriedAdd = curry(add);
 * curriedAdd(1)(2)(3); // 6
 * curriedAdd(1, 2)(3); // 6
 * curriedAdd(1)(2, 3); // 6
 */
function curry<T extends (...args: any[]) => void>(fn: T): any {
  return function curried(this: ThisParameterType<T>, ...args: any[]): any {
    if (args.length >= fn.length) {
      return fn.apply(this, args as Parameters<T>);
    }
    return (...nextArgs: any[]) => curried.apply(this, [...args, ...nextArgs]);
  };
}

export default curry;
