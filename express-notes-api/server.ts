import express from 'express';
import { readFile, writeFile } from 'fs/promises';

const app = express();
const port = 8080;

let parsedJSON: any;

async function readData() {
  try {
    const contents = await readFile('data.json', 'utf-8');
    parsedJSON = JSON.parse(contents);
  } catch (err) {
    console.error(err);
  }
}

async function writeData() {
  try {
    await writeFile('data.json', JSON.stringify(parsedJSON, null, 2));
  } catch (err) {
    console.error(err);
  }
}

app.use(express.json());

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
  readData();
});

app.get('/api/notes', (req, res) => {
  if (parsedJSON && parsedJSON.notes) {
    const notesArray = Object.values(parsedJSON.notes);
    res.json(notesArray);
  } else {
    res.json([]);
  }
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (parsedJSON.notes[id]) {
    res.json(parsedJSON.notes[id]);
  } else {
    res.json(404);
  }
});

let nextId = 10;

app.post('/api/notes', (req, res) => {
  const { content } = req.body;
  if (!content) {
    res.status(400).json('Bad Request');
  } else {
    const newNote = {
      id: nextId++,
      content,
    };

    data.notes[newNote.id] = newNote;
    writeData(data);
    res.status(201).json(newNote);
  }
});

readData();
