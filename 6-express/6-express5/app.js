import express from 'express';
import fsAsync from 'fs/promises';

const app = express();
// express 5 이상 버전에서는 express-async-errors 사용과 동일하게 동작한다. 아직 alpha 버전임(20.3기준)
app.get('/file2', (req, res, next) => {
  return fsAsync // 리턴하지 않으면 에러 처리되지 않는다. 혹은 콜백 앞에 async 붙여주어야 함.
    .readFile('/file2.txt')
    .then((data) => res.send(data));
});

app.get('/file3', async (req, res) => {
  const data = await fsAsync.readFile('/file2.txt');
  res.send(data); // 에러가 처리되고 있다.
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
  next();
});

//github.com/expressjs/express/issues/2259#issuecomment-433586394
//github.com/blakeembrey/async-middleware

app.listen(8081);
