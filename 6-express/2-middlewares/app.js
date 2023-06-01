import express from 'express';
/* 
미들웨어는 설정된 순서가 중요. 

*/
const app = express();

app.get(
  //
  '/',
  (req, res, next) => {
    // next();
    next('route'); // second middleware 무시하고 바로 다음 라우터로 이동
    // next(new Error('error')) // 에러 던지기
    // res.send..
    console.log('first middleware');
    // res.send('<h1>Index page</h1>'); // 같은 경로에서 send를 하면 다음 미들웨어는 호출되지 않는다.
    // next();
  },
  (req, res, next) => {
    // 첫 미들웨어에서 next를 호출하지 않으면 실행되지 않는다.
    console.log('second middleware');
    return next();
    res.send('<h1>Index page</h1>');
  }
);

app.get('/', (req, res, next) => {
  // 위의 것과 동일한 경로에 또 등록할 수 있다.
  res.send('<h1>Index page</h1>');
});

app.use((err, req, res, next) => {
  // 에러 핸들링 미들웨어
  console.error(err);
  res.sendStatus(500); // status(500).send('Interner Ser...') f
});

app.listen(8080);
