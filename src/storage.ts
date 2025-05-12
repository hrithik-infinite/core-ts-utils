/**
 * Enhanced localStorage wrapper with expiration and object support
 */
const storage = {
  /**
   * Set a value in localStorage with optional expiration
   * @param key - Storage key
   * @param value - Value to store
   * @param expiresInMs - Milliseconds until expiration (optional)
   */
  set(key: string, value: any, expiresInMs?: number): void {
    if (typeof localStorage === "undefined") {
      throw new Error("storage.set() requires a browser environment");
    }

    const item = {
      value,
      expires: expiresInMs ? Date.now() + expiresInMs : null
    };

    localStorage.setItem(key, JSON.stringify(item));
  },

  /**
   * Get a value from localStorage
   * @param key - Storage key
   * @param defaultValue - Default value if not found or expired
   * @returns Stored value or defaultValue
   */
  get<T>(key: string, defaultValue: T | null = null): T | null {
    if (typeof localStorage === "undefined") {
      throw new Error("storage.get() requires a browser environment");
    }

    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return defaultValue;
    }

    try {
      const item = JSON.parse(itemStr);

      // Check if expired
      if (item.expires && Date.now() > item.expires) {
        localStorage.removeItem(key);
        return defaultValue;
      }

      return item.value;
    } catch (e) {
      return defaultValue;
    }
  },

  /**
   * Remove a value from localStorage
   * @param key - Storage key
   */
  remove(key: string): void {
    if (typeof localStorage === "undefined") {
      throw new Error("storage.remove() requires a browser environment");
    }

    localStorage.removeItem(key);
  },

  /**
   * Clear all values in localStorage
   */
  clear(): void {
    if (typeof localStorage === "undefined") {
      throw new Error("storage.clear() requires a browser environment");
    }

    localStorage.clear();
  }
};

export default storage;
