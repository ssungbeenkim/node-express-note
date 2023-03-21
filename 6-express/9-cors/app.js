import express from 'express';

const app = express();

/* 
Cors란? 
브라우저에서 가지고 있는 Cross-origin resource sharing 정책이 있다. 
*/

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  // 서버와 도메인이 다른 클라가 데이터를 읽을 수 있게 허용해줌
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, DELETE' //사용할 수 있는 메서드 설정해줌
  ); // 위 두 설정을 통해 다른 도메인에 있는 클라에서 데이터를 받을 수 있음
  next();
}); // !! 헤더 이름에 대해 정확히 알고 있어야 하고 오타나면 동작 안되어서 불편!
// => npm corse, 편하게 끌 수 있는 미들웨어가 있음.

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(8081);
