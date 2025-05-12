/**
 * Simple string template function with placeholders
 * @param template - String template with {placeholder} syntax
 * @param data - Object with values to replace placeholders
 * @returns Formatted string
 */
function template(template: string, data: Record<string, any>): string {
  if (typeof template !== "string") {
    throw new TypeError("Expected a string as first argument");
  }

  return template.replace(/{([^{}]*)}/g, (match, key) => {
    const value = key.split(".").reduce((obj: any, prop: string) => {
      return obj && obj[prop] !== undefined ? obj[prop] : undefined;
    }, data);

    return value !== undefined ? String(value) : match;
  });
}

export default template;
