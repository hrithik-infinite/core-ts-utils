/**
 * Pauses execution for a specified number of milliseconds.
 *
 * @param {number} [ms=1000] - The number of milliseconds to sleep. Defaults to 1000ms.
 * @returns {Promise<void>} - A promise that resolves after the specified delay.
 *
 * @example
 * await sleep(2000); // Pauses execution for 2 seconds
 * await sleep(); // Pauses execution for 1 second (default)
 */
function sleep(ms: number = 1000): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export default sleep;
