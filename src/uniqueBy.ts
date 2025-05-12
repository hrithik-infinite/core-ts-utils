/**
 * Returns unique array elements based on a key or function result
 * @param array - The array to process
 * @param iteratee - The function or property name to determine uniqueness
 * @returns Array with unique elements
 */
function uniqueBy<T>(array: T[], iteratee: ((item: T) => any) | keyof T): T[] {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array as the first argument");
  }

  const seen = new Set();
  const callback = typeof iteratee === "function" ? iteratee : (item: T) => item[iteratee as keyof T];

  return array.filter((item) => {
    const key = callback(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

export default uniqueBy;
