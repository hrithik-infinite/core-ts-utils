/**
 * Creates a new object excluding the specified properties
 * @param object - The source object
 * @param paths - The property paths to omit
 * @returns New object without the omitted properties
 */
function omit<T extends Record<string, any>, K extends keyof T>(object: T, paths: K[] | K): Omit<T, K> {
  if (typeof object !== "object" || object === null) {
    throw new TypeError("Expected an object as the first argument");
  }

  const result = { ...object };
  const keysToOmit = Array.isArray(paths) ? paths : [paths];

  for (const key of keysToOmit) {
    delete result[key];
  }

  return result as Omit<T, K>;
}

export default omit;
