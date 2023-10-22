import express from 'express';

express();
const app = express();

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  console.log(req.method);
  res.send('Hello World!');
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
