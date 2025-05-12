/**
 * Truncates a string if it's longer than the given maximum length
 * @param str - The string to truncate
 * @param maxLength - Maximum length of the string
 * @param suffix - String to add at the end if truncated (default: '...')
 * @returns Truncated string
 */
function truncate(str: string, maxLength: number, suffix: string = "..."): string {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string as first argument");
  }

  if (str.length <= maxLength) {
    return str;
  }

  const truncatedLength = maxLength - suffix.length;
  return truncatedLength <= 0 ? suffix : str.slice(0, truncatedLength) + suffix;
}

export default truncate;
