import express from 'express';

const app = express();

app.get('/posts', (req, res) => {
  //localhost:8080/posts/?keyword=vincent
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
  // http://localhost:8080/posts/vincent/?keyword=vincent
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
