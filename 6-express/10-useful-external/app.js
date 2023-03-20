import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

// http://expressjs.com/en/resources/middleware/morgan.html
const app = express();

// cookie-parser
// morgan
// cors -> Access-Control-Allow-Origin 헤더 설정 안해주어도 자동으로 해준다.
// helmet

// cookie-parser
// key: Cookie
// value: yummy_cookie=choco; tasty_cookie=strawberry

const corsOptions = {
  origin: ['http://localhost:3000'], // 해당 도메인에서만 사용이 가능
  optionsSuccessStatus: 200, // for options request, 200으로 자동으로 응답하도록
  credentials: true, // Access-Control-Allow-Credentials: true , 헤더에 토큰이나 사용자 정보를 추가 허용
};

app.use(cookieParser()); // http://expressjs.com/en/resources/middleware/cookie-parser.html
app.use(morgan('common')); // http://expressjs.com/en/resources/middleware/morgan.html
//-> 등록만 해 주면 req 올때마다 로그가 출력된다. 어떤 요청이 왔는지 모니터링 할 때 유용
app.use(cors(corsOptions)); // options 전달하지 않으면 어떤 주소에서 접속하든 데이터를 다 보여준다. 헤더에 "Access-Control-Allow-Origin: *"로 설정됨
app.use(helmet()); // https://github.com/helmetjs/helmet
// -> 공통적으로 보안에 필요한 헤더들을 추가해준다. X-....

app.get('/', (req, res) => {
  console.log(req.cookies); // it will be undefined without cookie-parser
  console.log(req.cookies.yummy_cookie);
  res.send('Welsome!');
});

app.listen(8080);
