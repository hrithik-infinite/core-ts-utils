/**
 * Checks if a string is a valid email address
 * @param value - String to check
 * @returns Boolean indicating if the string is a valid email
 */
function isEmail(value: string): boolean {
  if (typeof value !== "string") {
    return false;
  }

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export default isEmail;
