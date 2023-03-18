import express from 'express';

const app = express();

app.use(express.json());
// express에서 body의 내용을 읽기 위해서는, 제공되는 미들웨어를 사용한다.

app.post('/', (req, res, next) => {
  console.log(req.body); // 사용자가 무언가 만들기 원하기 때문에 body를 읽어와야 한다.
});

app.listen(8081);
