/**
 * Parse and manipulate URL query parameters
 */
const queryParams = {
  /**
   * Get all query parameters as an object
   * @param url - URL to parse (defaults to current URL)
   * @returns Object with all query parameters
   */
  getAll(url?: string): Record<string, string> {
    const searchParams = new URLSearchParams(url ? new URL(url).search : typeof window !== "undefined" ? window.location.search : "");

    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    return params;
  },

  /**
   * Get a specific query parameter
   * @param name - Parameter name
   * @param url - URL to parse (defaults to current URL)
   * @returns Parameter value or null if not found
   */
  get(name: string, url?: string): string | null {
    const searchParams = new URLSearchParams(url ? new URL(url).search : typeof window !== "undefined" ? window.location.search : "");

    return searchParams.get(name);
  },

  /**
   * Set query parameters and return the new URL
   * @param params - Parameters to set
   * @param url - Base URL (defaults to current URL)
   * @returns New URL with updated parameters
   */
  set(params: Record<string, string>, url?: string): string {
    const baseUrl = url || (typeof window !== "undefined" ? window.location.href : "");
    const urlObj = new URL(baseUrl);

    Object.entries(params).forEach(([key, value]) => {
      urlObj.searchParams.set(key, value);
    });

    return urlObj.toString();
  },

  /**
   * Remove query parameters and return the new URL
   * @param paramNames - Parameter names to remove
   * @param url - Base URL (defaults to current URL)
   * @returns New URL with parameters removed
   */
  remove(paramNames: string | string[], url?: string): string {
    const baseUrl = url || (typeof window !== "undefined" ? window.location.href : "");
    const urlObj = new URL(baseUrl);

    const paramsToRemove = Array.isArray(paramNames) ? paramNames : [paramNames];
    paramsToRemove.forEach((name) => {
      urlObj.searchParams.delete(name);
    });

    return urlObj.toString();
  }
};

export default queryParams;
