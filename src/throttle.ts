function throttle<T extends (...args: any[]) => void>(func: T, limit: number): T {
  let lastExecuted = 0;
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const context = this;
    const now = Date.now();

    if (now - lastExecuted >= limit) {
      func.apply(context, args);
      lastExecuted = now;
    } else if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(context, args);
        lastExecuted = Date.now();
        timeout = null;
      }, limit - (now - lastExecuted));
    }
  } as T;
}

export default throttle;
