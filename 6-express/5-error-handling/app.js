import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
// 서버는 많은 클라이언트의 요청을 처리하는 곳이므로 에러처리는 중요하다.
// express에서의 동기적, 비동기적 에러 처리 방법.
const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
  // 1.
  // fs.readFile('/file1.txt', (err, data) => {
  //   if (err) {
  //     res.sendStatus(404); // good
  //   }
  // });

  // 2. 동기적인 경우
  try {
    const data = fs.readFileSync('/file1.txt');
  } catch (error) {
    res.sendStatus(404); // 데이터가 존재하지 않는다.
  }
});
// 3. promise 비동기적인 경우
app.get('/file2', (req, res) => {
  fsAsync
    .readFile('/file2.txt') //
    .catch((error) => {
      res.sendStatus(404);
    });
});

app.get('/file3', async (req, res) => {
  try {
    const data = await fsAsync.readFile('/file2.txt');
  } catch {
    res.sendStatus(404);
  }
});

// 버전 5 이하에서는: require('express-async-errors');

// Express 5 부터는 이렇게
app.use((error, req, res, next) => {
  // 마지막에 에러핸들링을 해 주는 것이 좋다.
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8081);
