/**
 * Groups the elements of an array based on the result of a callback function
 * @param array - The array to group
 * @param iteratee - The function or property name to group by
 * @returns An object with keys representing groups and values as arrays of matching elements
 */
function groupBy<T>(array: T[], iteratee: ((item: T) => string | number) | string): Record<string, T[]> {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array as the first argument");
  }

  const result: Record<string, T[]> = {};
  const callback = typeof iteratee === "function" ? iteratee : (item: T) => (item as any)[iteratee];

  for (const item of array) {
    const key = callback(item).toString();
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
}

export default groupBy;
