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
  // 1. good
  // fs.readFile('/file1.txt', (err, data) => {
  //   if (err) {
  //     res.sendStatus(404); // good
  //   }
  // });
  // 2. 동기적인 경우
  try {
    const data = fs.readFileSync('/file1.txt'); // blocking. 에러 처리해주기
  } catch (error) {
    res.sendStatus(404); // 요청한 파일이 없으니 Not Found를 보내준다.
  } // 마지막에 app.use로 에러처리를 해주었지만 이렇게 발생한 곳에서 핸들링 해주는 것이 좋음.
});

// 3. promise 비동기적인 경우 : promise에서 발생한 에러는 node서버를 중지할 수 있다.
app.get('/file2', (req, res) => {
  return fsAsync // async하게 동작하기 때문에 에러 처리 해주지 않으면 잡히지 않는다.
    .readFile('/file2.txt')
    .then((data) => res.send(data));
  //  .catch((error) => {
  // res.sendStatus(404); // 마지막 미들웨어에서 잡히지 않으므로 catch를 꼭 해 주어야 한다.
  // }
});
// 4. 프로미스의 비동기적인 특성을 유지하면서 동기적으로 보이게.
app.get('/file3', async (req, res) => {
  // try {
  // 똑같이 에러 핸들링을 해 주어야 한다.
  const data = await fsAsync.readFile('/file2.txt'); // 이렇게 해도 마지막 핸들링에서 잡히지 않는건 마찬가지.
  res.send(data);
  // } catch {
  // res.sendStatus(404);
  // }
});

// 버전 5 이하에서는: require('express-async-errors'); 라이브러리가 있다.
// but 에러핸들링을 개별적으로 해주는게 best이고, 콜백 내부의 프로미스의 경우에는 async await 해주거나 프로미스를 리턴해주어야 한다. 외부에서 알 수 있어야 마지막에 잡아줌.

// 버전 5부터는 promise또한 reutrn 해주거나 콜백을 async/await 해주면 마지막 미들웨어에서 잡을 수 있다.

app.use((error, req, res, next) => {
  // 혹시나 중간에 에러처리를 안했을 경우 마지막에 처리해 줄 수 있도록 마지막에 에러핸들링을 해 주는 것이 좋다.
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8081);
