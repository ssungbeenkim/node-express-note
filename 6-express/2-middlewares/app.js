import express from 'express';

const app = express();

app.get(
  '/',
  (req, res, next) => {
    // 꼭 하나로 끝나야 함
    // next();
    // next('router');
    // next(new Error('error'))
    // res.send..
    res.send('<h1>Index page</h1>');
  },
  (req, res, next) => {
    return next();
    res.send('<h1>Index page</h1>');
  }
);

app.get('/', (req, res, next) => {
  // 위의 것과 동일한 경로에 또 등록할 수 있다.
  res.send('<h1>Index page</h1>');
});

app.use((err, req, res, next) => {
  console.error('error!');
  res.sendStatus(500); // status(500).send('Interner Ser...') f
});

app.listen(8080);
