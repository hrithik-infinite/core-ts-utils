/**
 * Creates a new object with only the specified properties
 * @param object - The source object
 * @param paths - The property paths to pick
 * @returns New object with only the picked properties
 */
function pick<T extends Record<string, any>, K extends keyof T>(object: T, paths: K[] | K): Pick<T, K> {
  if (typeof object !== "object" || object === null) {
    throw new TypeError("Expected an object as the first argument");
  }

  const result = {} as Pick<T, K>;
  const keysToPick = Array.isArray(paths) ? paths : [paths];

  for (const key of keysToPick) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result[key] = object[key];
    }
  }

  return result;
}

export default pick;
