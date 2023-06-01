// https://expressjs.com/en/4x/api.html
import express from 'express';

const app = express();
app.get('/', (req, res, next) => {
  res.send('<h1>Index page</h1>');
});

app.get('/hello', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ name: 'Vincent', age: 20 });
});

app.use((req, res, next) => {
  // 지정하지 않은경로로 요청이 왔을 때 처리해 준다.
  res.setHeader('node-course', 'special middleware');
  next();
});

app.use((req, res) => {
  res.send('<h1>Not Found!</h1>');
});

app.listen(8080);
