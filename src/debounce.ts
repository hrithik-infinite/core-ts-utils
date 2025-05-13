/**
 * Creates a debounced version of the given function that delays its execution
 * until after the specified delay has elapsed since the last time it was invoked.
 *
 * @template T - The type of the original function.
 * @param {T} func - The function to debounce.
 * @param {number} [delay=300] - The number of milliseconds to delay.
 * @returns {T} - A debounced version of the original function.
 *
 * @example
 * const log = (msg: string) => console.log(msg);
 * const debouncedLog = debounce(log, 500);
 * window.addEventListener('resize', () => debouncedLog('resized'));
 */
function debounce<T extends (...args: any[]) => void>(func: T, delay: number = 300): T {
  let timer: ReturnType<typeof setTimeout>;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  } as T;
}

export default debounce;
