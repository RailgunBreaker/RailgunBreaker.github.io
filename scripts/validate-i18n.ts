import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

const schema = z.record(
  z.string().min(1),
  z
    .object({
      en: z.string().trim().min(1),
      zh: z.string().trim().min(1),
      ja: z.string().trim().min(1),
    })
    .strict(),
);

async function jsonFiles(directory: string): Promise<string[]> {
  const files: string[] = [];

  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await jsonFiles(filePath)));
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      files.push(filePath);
    }
  }

  return files;
}

let hasError = false;

for (const filePath of await jsonFiles("src/assets/i18n")) {
  const fileName = path.relative(process.cwd(), filePath);

  try {
    schema.parse(JSON.parse(await readFile(filePath, "utf8")));
    console.log(`Checked ${fileName}`);
  } catch (error) {
    hasError = true;
    console.error(fileName);
    console.error(error);
  }
}

if (hasError) {
  process.exit(1);
}
