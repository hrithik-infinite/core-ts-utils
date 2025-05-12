/**
 * Splits an array into chunks of specified size
 * @param array - The array to chunk
 * @param size - The size of each chunk
 * @returns Array of chunks
 */
function chunk<T>(array: T[], size: number = 1): T[][] {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array as the first argument");
  }

  if (size <= 0) {
    throw new Error("Chunk size must be greater than 0");
  }

  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

export default chunk;
