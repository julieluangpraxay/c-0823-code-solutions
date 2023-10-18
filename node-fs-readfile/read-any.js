import { readFile } from 'node:fs/promises';

try {
  const filePath = process.argv[2];
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err);
}
