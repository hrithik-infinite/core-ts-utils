function isEmpty(obj: any): boolean {
  return obj === "" || obj === null || obj === undefined || (typeof obj === "object" && !Array.isArray(obj) && Object.keys(obj).length === 0) || (Array.isArray(obj) && obj.length === 0);
}

export default isEmpty;
