/**
 * Pipes value through a series of functions from left to right
 * @param fns - Functions to pipe through
 * @returns Piped function
 */
function pipe<T>(...fns: Array<(arg: T) => T>): (arg: T) => T {
  if (fns.length === 0) {
    return (x: T) => x;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return (x: T) => fns.reduce((acc, fn) => fn(acc), x);
}

export default pipe;
