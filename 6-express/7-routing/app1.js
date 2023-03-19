import express from 'express';

const app = express();

// 반복되는 느낌을 지울 수 없다.
// 라우터? 를 사용하면 된다.

app.use(express.json());

app.get('/posts', (req, res) => {
  res.status(201).send('GET: /posts');
});

app.post('/posts', (req, res) => {
  res.status(201).send('POST: /posts');
});

app.put('/posts/:id', (req, res) => {
  res.status(201).send('PUT: /posts/:id');
});

app.delete('/posts/:id', (req, res) => {
  res.status(201).send('DELETE: /posts/:id');
});

app.listen(8080);
