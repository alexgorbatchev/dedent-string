/**
 * Strips common leading whitespace from all lines in a string.
 * This is useful for cleaning up template literals that are indented for readability.
 *
 * @param str - The string to dedent
 * @returns The dedented string with common leading whitespace removed
 *
 * @example
 * ```typescript
 * const indented = `
 *   function hello() {
 *     echo "Hello World"
 *   }
 * `;
 *
 * const dedented = dedentString(indented);
 * // Result:
 * // function hello() {
 * //   echo "Hello World"
 * // }
 * ```
 */
function findCommonPrefix(left: string, right: string): string {
  const maxLength = Math.min(left.length, right.length);
  let prefixLength = 0;

  while (prefixLength < maxLength && left[prefixLength] === right[prefixLength]) {
    prefixLength += 1;
  }

  return left.slice(0, prefixLength);
}

export function dedentString(str: string): string {
  const lines = str.split("\n");
  const nonEmptyLines = lines.filter((line) => line.trim().length > 0);

  if (nonEmptyLines.length === 0) {
    return str;
  }

  const leadingWhitespace = nonEmptyLines.map((line) => line.match(/^[\t ]*/)?.[0] ?? "");
  const commonIndent = leadingWhitespace.reduce((prefix, lineIndent) => findCommonPrefix(prefix, lineIndent));

  return lines
    .map((line) => (line.startsWith(commonIndent) ? line.slice(commonIndent.length) : line))
    .join("\n")
    .trim();
}
