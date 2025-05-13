/**
 * Checks if a given value is empty.
 *
 * A value is considered empty if it is:
 * - an empty string
 * - null or undefined
 * - an empty object (`{}`)
 * - an empty array (`[]`)
 *
 * @param {any} obj - The value to check.
 * @returns {boolean} - `true` if the value is empty, otherwise `false`.
 *
 * @example
 * isEmpty(""); // true
 * isEmpty([]); // true
 * isEmpty({}); // true
 * isEmpty(null); // true
 * isEmpty(undefined); // true
 * isEmpty("text"); // false
 * isEmpty([1, 2]); // false
 */
function isEmpty(obj: any): boolean {
  return obj === "" || obj === null || obj === undefined || (typeof obj === "object" && !Array.isArray(obj) && Object.keys(obj).length === 0) || (Array.isArray(obj) && obj.length === 0);
}

export default isEmpty;
