import { writeFile } from 'node:fs/promises';

const contents = process.argv[2];

try {
  await writeFile('note.txt', contents + '\n', 'utf8');
} catch (error) {
  console.error('This is an error', error);
}
