function once<T extends (...args: any[]) => void>(fn: T) {
  let called = false;
  let result: any;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

export default once;
