function curry<T extends (...args: any[]) => void>(fn: T): any {
  return function curried(this: ThisParameterType<T>, ...args: any[]): any {
    if (args.length >= fn.length) {
      return fn.apply(this, args as Parameters<T>);
    }
    return (...nextArgs: any[]) => curried.apply(this, [...args, ...nextArgs]);
  };
}

export default curry;
