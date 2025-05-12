/**
 * Deep merges multiple objects into a new object
 * @param objects - Objects to merge
 * @returns A new object with properties from all input objects
 */
function merge<T extends Record<string, any>>(...objects: (T | undefined | null)[]): T {
  return objects.reduce((result: any, current: any) => {
    if (!current) return result;

    Object.keys(current).forEach((key) => {
      const resultValue = result[key];
      const currentValue = current[key];

      // Handle array merging
      if (Array.isArray(resultValue) && Array.isArray(currentValue)) {
        result[key] = [...resultValue, ...currentValue];
      }
      // Handle object merging (recursive)
      else if (resultValue && currentValue && typeof resultValue === "object" && typeof currentValue === "object" && !Array.isArray(resultValue) && !Array.isArray(currentValue)) {
        result[key] = merge(resultValue, currentValue);
      }
      // Simple value replacement
      else {
        result[key] = currentValue;
      }
    });

    return result;
  }, {}) as T;
}

export default merge;
