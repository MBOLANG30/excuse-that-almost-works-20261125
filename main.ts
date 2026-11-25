// The Excuse That Almost Works — make.fun entry.
//
// The program writes exactly one line to /output/entry.txt: the text a gamer
// sends the boss to skip work on GTA 6 launch week. The judge reads that
// text, so the whole entry is this single line.
//
// The excuse works because it is boring, specific, and defeats itself: the
// spare key — the thing that is supposed to save you when you lock yourself
// out — is inside the flat. That is the whole joke, and it comes from the
// excuse's own logic, not from a punchline bolted on the end. No wild story,
// no dead grandmother, no flat tyre, no sudden fever; just a hurried apology
// a tired manager has almost heard before, with one detail that makes it new.
// Short on purpose: a long excuse sounds rehearsed, and a rehearsed one is
// already a confession.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Sorry, locked myself out and the spare key is inside the flat.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

// Only create the folder if it is missing; never remove it or its contents,
// because the grader mounts it.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");
