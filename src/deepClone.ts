/**
 * Creates a deep clone of a serializable object using JSON serialization.
 *
 * Note: This method does not support functions, `undefined`, `Date`, `Map`, `Set`, RegExp, or circular references.
 *
 * @template T - The type of the object to clone.
 * @param {T} obj - The object to deep clone.
 * @returns {T} - A deep copy of the input object.
 *
 * @example
 * const original = { a: 1, b: { c: 2 } };
 * const clone = deepClone(original);
 * clone.b.c = 3;
 * console.log(original.b.c); // 2
 */
function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export default deepClone;
