/**
 * Recursively flattens a nested array of any depth.
 *
 * @template T - The type of the elements in the array.
 * @param {any[]} arr - The nested array to flatten.
 * @returns {T[]} - A new flattened array containing all the elements.
 *
 * @example
 * flatten<number>([1, [2, [3, 4]], 5]); // [1, 2, 3, 4, 5]
 */
function flatten<T>(arr: any[]): T[] {
  return arr.reduce<T[]>((acc, val) => (Array.isArray(val) ? acc.concat(flatten<T>(val)) : acc.concat(val)), []);
}

export default flatten;
