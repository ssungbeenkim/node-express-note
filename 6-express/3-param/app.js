import express from 'express';
// 쿼리는 모든 주소에서 받을 수 있음.
const app = express();

app.get('/posts', (req, res) => {
  //localhost:8080/posts/?keyword=vincent // id 없이 들어온 주소.
  http: console.log('handling for /posts');
  console.log('path: ', req.path); ///posts/
  console.log('params: ', req.params); //{}
  console.log('query: ', req.query); //{ keyword: 'vincent' }
  if (req.query) {
    console.log('searching for: ', req.query.search, req.query.max);
  }
  res.sendStatus(200);
});
app.get('/posts/:id', (req, res) => {
  // http://localhost:8080/posts/vincent/?keyword=vincent // id 있는 주소
  console.log('handling for /posts/:id');
  console.log('path: ', req.path); //  /posts/vincent/
  console.log('params: ', req.params); //{ id: 'vincent' }
  console.log('query: ', req.query); //{ keyword: 'vincent' }
  console.log(req.query.keyword); // vincent
  if (req.params) {
    console.log('id is ', req.params.id);
  }
  res.sendStatus(200);
});

app.delete('/posts/:id', (req, res) => {
  res.status(200).send(`${req.params.id} will be deleted`);
});

app.get('/posts/:id/sub', (req, res) => {
  console.log('handling for /post/:id/sub');
  console.log('id is ', req.params.id);
  res.sendStatus(200);
});

// regex
//expressjs.com/en/guide/routing.html
app.get(['/sky', '/blue'], (req, res) => {
  res.send('Blue Sky!');
});

app.listen(8080);
