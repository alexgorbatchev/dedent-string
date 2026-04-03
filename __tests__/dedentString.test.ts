import { describe, expect, test } from "bun:test";

import { dedentString } from "../dedentString";

describe("dedentString", () => {
  test("should remove common indentation and surrounding blank lines", () => {
    const value = `
      function hello() {
        return "world";
      }
    `;

    expect(dedentString(value)).toMatchInlineSnapshot(`
      "function hello() {
        return \"world\";
      }"
    `);
  });

  test("should preserve relative indentation inside the block", () => {
    const value = `
          root
            child
          sibling
    `;

    expect(dedentString(value)).toMatchInlineSnapshot(`
      "root
        child
      sibling"
    `);
  });

  test("should remove shared tab indentation", () => {
    const value = "\n\t\tfirst\n\t\t\tsecond\n";

    expect(dedentString(value)).toBe("first\n\tsecond");
  });

  test("should return whitespace-only input unchanged", () => {
    const value = "   \n    ";

    expect(dedentString(value)).toBe(value);
  });
});
