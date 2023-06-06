import express from 'express';

const app = express();

/* 
Cors란? 
브라우저에서 가지고 있는 Cross-origin resource sharing 정책이 있다. 
client 와 server가 동일한 IP주소에서 동작하고 있을 때만 데이터를 주고 받을 수 있다. 
만약 다른 도메인에서 데이터를 주고 받으려고 하면 브라우저에서는 보안상의 이유로 데이터를 주고 받지 못하게 한다.
데이터를 주고받을 수 있게 하려면 header에 Access-Control-Allow-Origin을 추가해야 한다.
*/

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  // 서버와 도메인이 다른 클라가 데이터를 읽을 수 있게 허용해줌
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, DELETE' //사용할 수 있는 메서드 설정해줌
  ); // 위 두 설정을 통해 다른 도메인에 있는 클라에서 데이터를 받을 수 있음
  next();
}); // !! 헤더 이름에 대해 정확히 알고 있어야 하고 오타나면 동작 안되어서 불편할 수 있다.
// => npm corse, 편하게 쓸 수 있는 미들웨어가 있음.

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(8081);
