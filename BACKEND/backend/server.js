import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/api/jokes', (req, res) => {
  const jokes = [
    { id: 1, title: 'Joke 1', content: 'This is the first joke.' },
    { id: 2, title: 'Joke 2', content: 'This is the second joke.' },
    { id: 3, title: 'Joke 3', content: 'This is the third joke.' },
  ];
  res.json(jokes);
});

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
