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
import { dedentString, dedentTemplate } from "@alexgorbatchev/dedent-string";

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

### `dedentTemplate(template: string, values: Record<string, string>): string`

Dedents the template first, then replaces placeholders in two modes:

- inline placeholders like `Hello {name}`
- standalone placeholders like `{body}` that can expand into multiline blocks while inheriting the line indentation

## Development

```bash
bun install
bun test
bun run build
```
