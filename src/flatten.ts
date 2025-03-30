function flatten<T>(arr: any[]): T[] {
  return arr.reduce<T[]>((acc, val) => (Array.isArray(val) ? acc.concat(flatten<T>(val)) : acc.concat(val)), []);
}

export default flatten;
