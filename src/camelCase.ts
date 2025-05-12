/**
 * Converts a string to camelCase
 * @param str - The string to convert
 * @returns Camel cased string
 */
function camelCase(str: string): string {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string as argument");
  }

  return str.replace(/[\s_-]+(.)?/g, (_, char) => (char ? char.toUpperCase() : "")).replace(/^([A-Z])/, (match) => match.toLowerCase());
}

export default camelCase;
