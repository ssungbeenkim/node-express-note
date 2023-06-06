import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

// http://expressjs.com/en/resources/middleware/morgan.html
const app = express();

// cookie-parser -> 쿠키에 접근할 수 있다.
// morgan -> 사용자에게 요청이 왔을 때 자동으로 로그를 남겨준다.
// cors -> Access-Control-Allow-Origin 헤더 설정 안해주어도 자동으로 해준다.
// helmet

// cookie-parser -> postman에서 헤더에 쿠키를 추가해서 확인해 볼 수 있다.
// key: Cookie
// value: yummy_cookie=choco; tasty_cookie=strawberry

const corsOptions = {
  origin: ['http://localhost:5500'], // 해당 도메인에서만 CORS policy 를 허용할 수 있음
  optionsSuccessStatus: 200, // for options request, 200으로 자동으로 응답하도록
  credentials: true,
  // Access-Control-Allow-Credentials: true , 헤더에 토큰이나 사용자 정보를 추가하는 허용
};
app.use(express.json());
app.use(cookieParser()); // http://expressjs.com/en/resources/middleware/cookie-parser.html
// req.body를 보려고 하면 undefined가 나온다. app.use(express.json())을 해줘야 한다.
// 이것고 마찬가지로, req.cookies를 출력하면 기본적으로 undefined 가 나옴. 쿠키에 접근 가능하게 해준다.

app.use(morgan('common')); // http://expressjs.com/en/resources/middleware/morgan.html
//-> 등록만 해 주면 req 올때마다 로그가 출력된다. 어떤 요청이 왔는지, 얼마나 걸렸는지 모니터링 할 때 유용. 포맷을 지정할 수 있는 옵션이 있음. 위 링크 보기.

app.use(cors(corsOptions)); // 사용하는 미들웨어를 한눈에 보기 위해서 밖으로 빼줌.
// options 전달하지 않으면 어떤 주소에서 접속하든 데이터를 다 보여준다. 자동으로 헤더에 "Access-Control-Allow-Origin: *"로 설정됨

app.use(helmet()); // https://github.com/helmetjs/helmet
// -> 공통적으로 보안에 필요한 헤더들을 자동으로 추가해준다. X-....

app.get('/', (req, res) => {
  console.log(req.body);
  console.log(req.cookies); // it will be undefined without cookie-parser
  console.log(req.cookies.yummy_cookie);
  res.send('Welsome!');
});

app.listen(8080);
