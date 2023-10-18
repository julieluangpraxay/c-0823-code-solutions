import { writeFile } from 'node:fs/promises';

try {
  await writeFile('random.txt', Math.random() + '\n', 'utf8');
  console.log(`${writeFile}`);
} catch (error) {
  console.error('An error occurred:', error);
  process.exit(1);
}
