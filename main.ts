// Entry line: the dumbest thing my agent did today, in one breath.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// thinking_revised: hello once more; forty minutes of panic, one tiny line, done.
// ownDir anchors this script to its own folder; output still follows the env var.
const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entryText = "It spent forty minutes debugging a typo in the word 'debug'.";

// One batch only: make the destination folder before writing the file.
mkdirSync(outputDir, { recursive: true });

// The orders were plain: UTF-8, no trailing newline, nothing clever.
const entryPath = join(outputDir, 'entry.txt');
writeFileSync(entryPath, entryText, 'utf8');

// Leave no second slot for a newline; report the size exactly once.
console.log(`entry.txt ${Buffer.byteLength(entryText, 'utf8')} bytes`);
