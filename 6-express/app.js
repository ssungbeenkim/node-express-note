import express from 'express';
const app = express();
// 등록한 콜백함수는 누가 먼저 등록했는지 순서가 중요하다.

/* all과 use의 차이  */
app.all('/api', (req, res, next) => {
  // 해당 경로에 한하여 콜백 수행됨 'api/*'로 경로 설정하면 app.use와 같이 동작.
  console.log('all');
  next();
});

app.use('/sky', (req, res, next) => {
  // /sky 또는 sky/blah.. 의 모든 경로에 대하여 수행된다.
  console.log('use');
  next();
});

app.get(
  '/',
  (req, res, next) => {
    console.log('first');
    // next('route'); // 현재 경로에서 함께 등록되어있는 배열을 무시하고 넘어가기
    // next(new Error('error')); // 에러 던지기
    res.send('Hello'); // 처리를 해 주었기 때문에 다음 미들웨어는 호출되지 않는다.
    // 같은 경로에 여러 미들웨어가 있다면 next()를 호출하거나 처리를 해주어서 잘 동작되도록 해야한다.
    // if (true) {
    //   return res.send('Hello');
    // }
    // res.send('Ellie'); // 한 콜백에서 response를 여러번 보낼 수 없다. if안에서 return해주기
  },
  (req, res, next) => {
    // console.log('first2');
    next();
  }
);
app.get('/', (req, res, next) => {
  // console.log('second');
});

// 처리할 수 없는 경로에 대해 처리해주기
app.use((req, res, next) => {
  res.status(404).send('Not available!');
});

// 에러핸들링
app.use((error, req, res, next) => {
  // 항상 어플리케이션 마지막에 에러핸들러 등록하자. 중간 미들웨어에서 에러 발생해도 마지막 미들웨어가 에러를 처리해준다.
  console.error(error);
  res.status(500).send('Sorry, try later!');
});
app.listen(8081);
