# @alexgorbatchev/dedent-string

Small string utilities for two closely related jobs:

- `dedentString()` removes shared leading indentation from a block of text
- `dedentTemplate()` dedents a template and replaces `{placeholders}`, including multiline values with preserved indentation

## Installation

```bash
npm install @alexgorbatchev/dedent-string
```

## Usage

```ts
import dedentString, { dedentTemplate } from "@alexgorbatchev/dedent-string";

const text = dedentString(`
    function hello() {
      return "world";
    }
`);

console.log(text);
// function hello() {
//   return "world";
// }

const template = `
  function main() {
    {body}
  }
`;

const rendered = dedentTemplate(template, {
  body: `if (ready) {
  console.log("done");
}`,
});

console.log(rendered);
// function main() {
//   if (ready) {
//     console.log("done");
//   }
// }
```

## API

### `dedentString(str: string): string`

Removes the smallest shared leading indentation from all non-empty lines, then trims leading and trailing blank lines.

This function is available as both the package default export and a named export.

### `dedentTemplate(template: string, values: Record<string, string>): string`

Dedents the template first, then replaces placeholders in two modes:

- inline placeholders like `Hello {name}`
- standalone placeholders like `{body}` that can expand into multiline blocks while inheriting the line indentation

## Development

```bash
bun install
bun run build
bun test
bun run typecheck
npm pack --dry-run
```

See `RELEASING.md` for the tag-based npm release workflow and GitHub release notes process.
