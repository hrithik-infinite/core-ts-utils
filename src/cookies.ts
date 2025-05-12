/**
 * Simple cookie management utility
 */
const cookies = {
  /**
   * Get cookie value by name
   * @param name - Cookie name
   * @returns Cookie value or null if not found
   */
  get(name: string): string | null {
    if (typeof document === "undefined") {
      throw new Error("cookies.get() requires a browser environment");
    }

    const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1")}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1]) : null;
  },

  /**
   * Set a cookie
   * @param name - Cookie name
   * @param value - Cookie value
   * @param options - Cookie options
   */
  set(
    name: string,
    value: string,
    options: {
      expires?: number | Date | string;
      path?: string;
      domain?: string;
      secure?: boolean;
      sameSite?: "strict" | "lax" | "none";
      [key: string]: any;
    } = {}
  ): void {
    if (typeof document === "undefined") {
      throw new Error("cookies.set() requires a browser environment");
    }

    const optionsWithDefaults = {
      path: "/",
      ...options
    };

    if (optionsWithDefaults.expires instanceof Date) {
      optionsWithDefaults.expires = optionsWithDefaults.expires.toUTCString();
    } else if (typeof optionsWithDefaults.expires === "number") {
      const days = optionsWithDefaults.expires;
      const t = (optionsWithDefaults.expires = new Date());
      t.setTime(t.getTime() + days * 86400000);
      optionsWithDefaults.expires = t.toUTCString();
    }

    let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    for (const [key, val] of Object.entries(optionsWithDefaults)) {
      if (val === true) {
        updatedCookie += `; ${key}`;
      } else if (val !== false) {
        updatedCookie += `; ${key}=${val}`;
      }
    }

    document.cookie = updatedCookie;
  },

  /**
   * Delete a cookie
   * @param name - Cookie name
   * @param options - Cookie options
   */
  delete(name: string, options: { path?: string; domain?: string } = {}): void {
    this.set(name, "", {
      ...options,
      expires: -1
    });
  }
};

export default cookies;
