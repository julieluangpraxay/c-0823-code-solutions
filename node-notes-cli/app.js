import { readFile, writeFile } from 'node:fs/promises';

const contents = await readFile('data.json', 'utf-8');
const parsedJSON = JSON.parse(contents);

async function write() {
  try {
    await writeFile('data.json', JSON.stringify(parsedJSON, null, 2));
  } catch (error) {
    console.error(error);
  }
}

async function read() {
  try {
    for (const key in parsedJSON.notes) {
      console.log(`${key}: ${parsedJSON.notes[key]}`);
    }
  } catch (error) {
    console.error('an error occured:', error);
  }
}

async function create(newNote) {
  try {
    const newId = parsedJSON.nextId;
    parsedJSON.notes[newId] = newNote;
    parsedJSON.nextId++;
    await write();
  } catch (error) {
    console.error(error);
  }
}

async function update(id, updateNote) {
  try {
    parsedJSON.notes[id] = updateNote;
    await write();
  } catch (error) {
    console.error(error);
  }
}

async function deleteNote(id) {
  try {
    delete parsedJSON.notes[id];
    await write();
    console.log(parsedJSON);
  } catch (error) {
    console.error(error);
  }
}

const action = process.argv[2];

if (action === 'read') {
  await read();
} else if (action === 'create') {
  await create(process.argv[3]);
} else if (action === 'update') {
  await update(process.argv[3], process.argv[4]);
} else if (action === 'delete') {
  await deleteNote(process.argv[3]);
}
