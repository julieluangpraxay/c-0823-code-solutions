import express from 'express';

const app = express();
const port = 3000;

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Håkon Wium Lie',
    course: 'CSS',
    score: 92,
  },
};

// Route to get all grades
app.get('/api/grades', (req, res) => {
  res.json(Object.values(grades));
});

// Route to delete a grade by ID
app.delete('/api/grades/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (grades[id]) {
    delete grades[id];
    res.sendStatus(204); // No content
  } else {
    res.sendStatus(404); // This error code: Not found
  }
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
