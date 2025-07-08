# MCP Types

Zod schemas and static TypeScript types for Model Context Protocol ([MCP](https://modelcontextprotocol.io/)) SDK.

## Usage

Import types as you would from `@modelcontextprotocol/sdk/types.js`:

```typescript
import type { Prompt, Tool, Resource } from "mcp-types";
```

Zod schemas are also available:

```typescript
import { PromptSchema, ToolSchema, ResourceSchema } from "mcp-types";
```

## Migrating

Replace all imports from `'@modelcontextprotocol/sdk/types.js' to 'mcp-types'` with `mcp-types`, e.g.,

```diff
- import type { Prompt, Tool, Resource } from "@modelcontextprotocol/sdk/types.js";
+ import type { Prompt, Tool, Resource } from "mcp-types";
```

```diff
- import { PromptSchema, ToolSchema, ResourceSchema } from "@modelcontextprotocol/sdk/types.js";
+ import { PromptSchema, ToolSchema, ResourceSchema } from "mcp-types";
```

That's it!

## Key Differences

The exported schemas and types are identical to the ones available from `@modelcontextprotocol/sdk`, except for the following differences:

* `mcp-types` removes `passthrough()` from all Zod schemas.
* `mcp-types` uses the `zod-to-typescript` library to generate static types.

## Motivation

The main difference and motivation behind creating this repository is that the original Zod schemas excessively use the `passthrough()` Zod feature ([#182](https://github.com/modelcontextprotocol/typescript-sdk/issues/182)), which effectively allows arbitrary properties to pass through. This creates both an unsafe environment (since arbitrary properties will be passed through) and degrades the Developer Experience because you won't get type errors if you accidentally make a typo.

To fix this, `mcp-types` effectively copied schema definitions from the original repository and removed `passthrough()` from all schema definitions. Furthermore, we've used the `zod-to-typescript` library to generate static types which are much easier to work with since your type inference will show you clean, readable types.

## Last Compatible Commit

The contents of the repository are based on the following version of MCP:

* v1.15.0 ([commit](https://github.com/modelcontextprotocol/typescript-sdk/blob/22dc79b2a482fa10422d3e79ad5051d91e74e5b6/src/types.ts))

## Contributing

To contribute an update:

1. copy the contents of the [types.ts](https://github.com/modelcontextprotocol/typescript-sdk/blob/main/src/types.ts) from the original repository
2. override Zod schemas in `src/schemas.ts` with the copied contents
3. run `pnpm run format` to fix linting errors
4. run `pnpm run generate` to generate the types
5. Update the `Last Compatible Commit` section in this README.md

That's it!
