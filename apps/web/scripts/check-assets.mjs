import { readdir, stat } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const publicDirectory = fileURLToPath(new URL("../public/", import.meta.url));
const maximumFileBytes = 512 * 1024;
const maximumTotalBytes = 2 * 1024 * 1024;

async function collect(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collect(path)));
    else files.push(path);
  }
  return files;
}

const files = await collect(publicDirectory);
const measurements = await Promise.all(
  files.map(async (path) => ({ path, bytes: (await stat(path)).size })),
);
const totalBytes = measurements.reduce((sum, file) => sum + file.bytes, 0);
const oversized = measurements.filter((file) => file.bytes > maximumFileBytes);
const autoplayMedia = measurements.filter((file) =>
  /\.(webm|mp4|mov)$/i.test(file.path),
);

console.log(
  `Public assets: ${measurements.length} files, ${totalBytes.toLocaleString()} bytes`,
);
for (const file of measurements.sort((a, b) => b.bytes - a.bytes)) {
  console.log(
    `${relative(publicDirectory, file.path)}: ${file.bytes.toLocaleString()} bytes`,
  );
}

if (totalBytes > maximumTotalBytes)
  throw new Error(
    `Public assets exceed the ${maximumTotalBytes.toLocaleString()} byte budget.`,
  );
if (oversized.length)
  throw new Error(
    `Oversized assets: ${oversized.map((file) => file.path).join(", ")}`,
  );
if (autoplayMedia.length)
  throw new Error(
    `Video assets require an explicit reviewed exception: ${autoplayMedia.map((file) => file.path).join(", ")}`,
  );
