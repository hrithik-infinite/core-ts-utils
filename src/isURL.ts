/**
 * Checks if a string is a valid URL
 * @param value - String to check
 * @returns Boolean indicating if the string is a valid URL
 */
function isURL(value: string): boolean {
  if (typeof value !== "string") {
    return false;
  }

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export default isURL;
