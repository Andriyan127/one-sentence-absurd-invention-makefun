// One-Sentence Absurd Invention Pitch — make.fun competition
// u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a (sponsor: suroso)
// Entry: the BlameShift Umbrella — a ridiculous invention that fixes a tiny
// everyday annoyance (rain ruining your hair after a wrong forecast) by
// blaming the forecast itself and filing a formal complaint against the
// clouds on your behalf. One sentence, 164 characters, UTF-8.
// Deterministic, no network, no secrets. Writes exactly one sentence
// (164 characters) to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "Behold the BlameShift Umbrella: it opens itself indoors, blames the forecast for your bad hair day, then files a formal complaint against the clouds on your behalf.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE + "\n", "utf8");
