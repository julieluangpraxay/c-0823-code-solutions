// import express from 'express';
// import { write } from 'node:fs';
// import { readFile, writeFile } from 'node:fs/promises';

// type Note = {
//   id: number;
//   content: string;
// };

// // type Data = {
// //   nextId: number;
// //   notes: Record<number, Note>;
// // };

// const app = express();
// app.use(express.json());

// app.get('/api/notes', async (req, res) => {
//   const data = await readData();
//   console.log('read', data);
//   const notes: Note[] = [];
//   for (const id in data.notes) {
//     notes.push(data.notes[+id]);
//   }
//   writeData(data);
//   res.json(data);
// });

// app.get('/api/notes/:noteId', async (req, res) => {
//   const data = await readData();
//   const { noteId } = req.params;
//   res.json(data.notes[+noteId]);
// });

// app.post('/api/notes', async (req, res) => {
//   const data = await readData();
//   const { content } = req.body;
//   res.json(data.notes[+noteId]);
//   const newNote = {
//     id: data.nextId,
//     content,
//   };
//   data.notes[data.nextId++] = newNote;
//   await writeData(data);
//   res.json(newNote);
// });

// app.put('/api/notes', (req, res) => {});
// app.delete('/api/notes/:noteId', (req, res) => {});

// app.listen(8080, () => {
//   console.log('Listening on port 8080');
// });

// async function readData(): Promise<Data> {
//   const data = await readFile('data.json', 'utf8');
//   return JSON.parse(data);
// }
// async function writeData(data: Data): Promise<void> {
//   const value = JSON.stringify(data, null, 2);
//   await writeFile('data.json', data, 'utf8');

// let parsedJSON: any;

// async function readData() {
//   try {
//     const contents = await readFile('data.json', 'utf-8');
//     parsedJSON = JSON.parse(contents);
//   } catch (err) {
//     console.error(err);
//   }
// }

// async function writeData() {
//   try {
//     await writeFile('data.json', JSON.stringify(parsedJSON, null, 2));
//   } catch (err) {
//     console.error(err);
//   }
// }

// app.listen(port, () => {
//   console.log(`Express server listening on port ${port}`);
//   readData();
// });

// app.get('/api/notes', (req, res) => {
//   if (parsedJSON && parsedJSON.notes) {
//     const notesArray = Object.values(parsedJSON.notes);
//     res.json(notesArray);
//   } else {
//     res.json([]);
//   }
// });

// app.get('/api/notes/:id', (req, res) => {
//   const id = req.params.id;
//   if (parsedJSON.notes[id]) {
//     res.json(parsedJSON.notes[id]);
//   } else {
//     res.json(404);
//   }
// });

// let nextId = 10;

// app.post('/api/notes', (req, res) => {
//   const { content } = req.body;
//   if (!content) {
//     res.status(400).json('Bad Request');
//   } else {
//     const newNote = {
//       id: nextId++,
//       content,
//     };

//     data.notes[newNote.id] = newNote;
//     writeData(data);
//     res.status(201).json(newNote);
//   }
// });

// readData();
