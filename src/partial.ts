/**
 * Partially applies a function, binding some arguments
 * @param fn - Function to partially apply
 * @param args - Arguments to bind
 * @returns Partially applied function
 */
function partial<T, R>(fn: (...args: any[]) => R, ...args: any[]): (...remainingArgs: any[]) => R {
  return (...remainingArgs: any[]) => fn(...args, ...remainingArgs);
}

export default partial;
