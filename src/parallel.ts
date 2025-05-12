/**
 * Run async functions in parallel with concurrency limit
 * @param tasks - Array of async functions to run
 * @param concurrency - Maximum number of concurrent tasks
 * @returns Promise that resolves to array of results
 */
async function parallel<T>(tasks: Array<() => Promise<T>>, concurrency: number = Infinity): Promise<T[]> {
  if (!Array.isArray(tasks)) {
    throw new TypeError("Expected tasks to be an array of functions");
  }

  if (tasks.length === 0) {
    return [];
  }

  const results: T[] = new Array(tasks.length);
  const runningTasks: Set<Promise<void>> = new Set();
  let nextIndex = 0;

  return new Promise((resolve, reject) => {
    const startNext = () => {
      if (nextIndex >= tasks.length) {
        if (runningTasks.size === 0) {
          resolve(results);
        }
        return;
      }

      const index = nextIndex++;
      const task = tasks[index]();

      const runningTask = task
        .then((result) => {
          results[index] = result;
          runningTasks.delete(runningTask);
          startNext();
        })
        .catch((error) => {
          reject(error);
        });

      runningTasks.add(runningTask);

      if (runningTasks.size < concurrency) {
        startNext();
      }
    };

    // Start initial batch of tasks
    for (let i = 0; i < Math.min(concurrency, tasks.length); i++) {
      startNext();
    }
  });
}

export default parallel;
