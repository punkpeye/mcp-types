// @ts-expect-error - could not find a way to import the ZodToTypescript class (https://github.com/duplojs/zod-to-typescript/issues/38)
import { ZodToTypescript } from '@duplojs/zod-to-typescript';
import { writeFileSync } from 'fs';

import * as exports from "./schemas.js";

const schemas = Object.fromEntries(Object.entries(exports).filter(([key]) => key.endsWith("Schema")));

const ztt = new ZodToTypescript();

for (const [key, value] of Object.entries(schemas)) {
  ztt.append(
    value,
    key.replace("Schema", ""),
  )
}

const tsType = ztt.toString(true);

writeFileSync("src/types.ts", tsType);