import express from 'express';

const app = express();

app.use(express.json()); // 모든 request에 express에서 제공하는 json을 사용.
// express에서 body의 내용을 읽기 위해서는, 제공되는 미들웨어를 사용한다.
// 요청이 들어오는 body 부분을 자돌으로 parsing해서 우리에게 보여줌

app.post('/', (req, res, next) => {
  console.log(req.body); // 사용자가 무언가 만들기 원하기 때문에 body를 읽어와야 한다.
});
// POST request 들어오면 { vincent: 'hello' } 출력됨.
app.listen(8081);
ls;
