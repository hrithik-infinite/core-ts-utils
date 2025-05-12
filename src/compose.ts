/**
 * Composes functions from right to left
 * @param fns - Functions to compose
 * @returns Composed function
 */
function compose<T>(...fns: Array<(arg: T) => T>): (arg: T) => T {
  if (fns.length === 0) {
    return (x: T) => x;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return fns.reduce((a, b) => (arg: T) => a(b(arg)));
}

export default compose;
