/**
 * Checks if a value is numeric
 * @param value - Value to check
 * @returns Boolean indicating if the value is numeric
 */
function isNumeric(value: any): boolean {
  if (typeof value === "number") {
    return !isNaN(value) && isFinite(value);
  }

  if (typeof value !== "string") {
    return false;
  }

  return !isNaN(Number(value)) && isFinite(Number(value));
}

export default isNumeric;
