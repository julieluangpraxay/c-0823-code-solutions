import { readFile } from 'node:fs/promises';
const filePath = process.argv.slice(2);

try {
  for (let i = 0; i < filePath.length; i++) {
    const contents = await readFile(filePath[i], 'utf8');
    console.log(contents);
  }
} catch (err) {
  console.error(err);
}
