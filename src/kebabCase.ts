/**
 * Converts a string to kebab-case
 * @param str - The string to convert
 * @returns Kebab cased string
 */
function kebabCase(str: string): string {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string as argument");
  }

  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

export default kebabCase;
