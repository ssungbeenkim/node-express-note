import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
import 'express-async-errors'; // 5버전과 같이 비동기 에러 처리가 됨
// 서버는 많은 클라이언트의 요청을 처리하는 곳이므로 에러처리는 중요하다.
// express에서의 동기적, 비동기적 에러 처리 방법.
// 처리하고 있는 미들웨어에서 예상되는 에러가 있다면 에러처리를 적절히 해주는 것이 좋다.
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
app.get('/file2', async (req, res) => {
  return fsAsync // 비동기로 동작하기 때문에 마지막 app.use 에러처리가 소용 없다.
    .readFile('/file2.txt')
    .then((data) => res.send(data));
  // .catch((error) => {
  // res.sendStatus(404);
  // }
});
// 4. 비동기적인 특성을 유지하면서 동기적으로 보이게.
app.get('/file3', async (req, res) => {
  // try {
  // 똑같이 에러 핸들링을 해 주어야 한다.
  const data = await fsAsync.readFile('/file2.txt');
  res.send(data);
  // } catch {
  // res.sendStatus(404);
  // }
});

// 버전 5 이하에서는: require('express-async-errors'); 라이브러리가 있다.
// 에러행들링 개별적으로 해주는게 best.

// Express 5 부터는 이렇게 // 버전 5부터는 promise또한 이렇게 작성해도 에러핸들러에서 잡힌다.

app.use((error, req, res, next) => {
  // 혹시나 중간에 에러처리를 안했을 경우 처리해주도록 마지막에 에러핸들링을 해 주는 것이 좋다.
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8081);
