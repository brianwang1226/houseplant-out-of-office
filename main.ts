import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 120;

// Sealed gate: entry must be 1-120 chars of non-whitespace UTF-8 text.
const ENTRY =
  "Out of office. The fern is now in charge. It has killed 3 plants and 2 deadlines. Water it. It is watching.";

if (ENTRY.length > MAX_CHARS) {
  throw new Error(`Entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
