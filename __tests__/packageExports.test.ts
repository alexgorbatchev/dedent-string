import { describe, expect, test } from "bun:test";

import rootDefaultExport, { dedentString as rootNamedExport } from "../index";
import dedentStringDefaultExport, { dedentString as dedentStringNamedExport } from "../dedentString";

describe("package exports", () => {
  test("should expose dedentString as the package default export", () => {
    expect(rootDefaultExport).toBe(rootNamedExport);
    expect(rootDefaultExport).toBe(dedentStringNamedExport);
    expect(rootDefaultExport).toBe(dedentStringDefaultExport);
  });

  test("should preserve the default export behavior", () => {
    const value = `
      alpha
        beta
    `;

    expect(rootDefaultExport(value)).toMatchInlineSnapshot(`
      "alpha
        beta"
    `);
  });
});
