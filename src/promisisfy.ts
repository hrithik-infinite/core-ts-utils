/**
 * Convert callback-style function to Promise-based function
 * @param fn - Function with callback as last argument
 * @returns Promise-based function
 */
function promisify<T>(fn: (...args: any[]) => void): (...args: any[]) => Promise<T> {
  return (...args: any[]): Promise<T> => {
    return new Promise((resolve, reject) => {
      fn(...args, (error: Error | null, result: T) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };
}

export default promisify;
