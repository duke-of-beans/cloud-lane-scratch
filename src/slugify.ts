/**
 * Convert text to a URL-safe slug.
 *
 * - Lowercased
 * - ASCII only (non-ASCII characters removed)
 * - Words joined by single hyphens
 * - No leading or trailing hyphens
 *
 * @param text - The input string to slugify
 * @returns A URL-safe slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    // Replace accented chars with ASCII equivalents where possible
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    // Remove any remaining non-ASCII
    .replace(/[^a-z0-9\s-]/g, '')
    // Replace whitespace and multiple hyphens with single hyphen
    .replace(/[\s-]+/g, '-')
    // Trim leading/trailing hyphens
    .replace(/^-+|-+$/g, '');
}
