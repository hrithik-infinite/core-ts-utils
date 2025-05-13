/**
 * Generates a pseudo-random alphanumeric string ID of the specified length.
 * Combines current timestamp and random characters, then shuffles them.
 *
 * @param {number} [length=10] - The desired length of the generated ID.
 * @returns {string} - A random string ID of the specified length.
 *
 * @example
 * randomId(); // e.g., "k1x9v2q38z"
 * randomId(5); // e.g., "a8z3f"
 */
function randomId(length: number = 16): string {
  const id1 = Date.now().toString();
  const id2 = Math.random().toString(36).substr(2);
  const shuffled = (id1 + id2)
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  return shuffled.slice(0, length);
}

export default randomId;
