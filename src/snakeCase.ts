/**
 * Converts a string to snake_case
 * @param str - The string to convert
 * @returns Snake cased string
 */
function snakeCase(str: string): string {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string as argument");
  }

  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .toLowerCase();
}

export default snakeCase;
