import assert from "node:assert/strict";

import packageDefaultExport, { dedentString as packageDedentString, dedentTemplate } from "./dist/index.js";
import dedentStringDefaultExport, { dedentString as dedentStringNamedExport } from "./dist/dedentString.js";

const sampleValue = `
  alpha
    beta
`;

assert.equal(typeof packageDefaultExport, "function");
assert.equal(typeof packageDedentString, "function");
assert.equal(typeof dedentTemplate, "function");
assert.equal(packageDefaultExport, packageDedentString);
assert.equal(dedentStringDefaultExport, dedentStringNamedExport);
assert.equal(packageDefaultExport(sampleValue), dedentStringDefaultExport(sampleValue));
