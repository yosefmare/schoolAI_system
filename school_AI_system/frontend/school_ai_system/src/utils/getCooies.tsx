import Cookie from "js-cookie";

// Simplified function using js-cookie
export function getCookie(name: string): string | undefined {
  if (typeof window === "undefined") return undefined; // Cookies are not available in SSR (Server-Side Rendering)

  return Cookie.get(name); // Directly get the cookie value using js-cookie
}
