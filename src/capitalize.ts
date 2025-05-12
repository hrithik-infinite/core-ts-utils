/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} str - The input string to be capitalized.
 * @returns {string} The capitalized string.
 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default capitalize;
