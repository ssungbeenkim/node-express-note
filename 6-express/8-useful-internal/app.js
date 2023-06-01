import express from 'express';

const app = express();
// express 내부에서 제공하는 유용한 미들웨어들

app.use(express.json()); //-> REST API에서 body parse

app.use(express.urlencoded({ extended: false }));
/*
HTML form에서 submit 하면 발생되는 request에서 전달되는 data를 자동으로 parse 
서버사이드 렌더링 등에 유리 
옵션 필수 
*/

app.use(express.static('public')); // public 폴더 안에 있는 리소스를 자동으로 보내줄 수 있다.
/* /index.html 또는 /image.png로 요청이 오면 해당 폴더만 등록해도 자동처리 해줌
다양한 옵션 전달 가능
->app.get('/index.html', ....) 이렇게 작성해 줄 필요가 없다. */

app.use(express.json());
app.post('/posts', (req, res) => {
  console.log(req.body);
  res.status(201).send('Thanks, Created');
});

const options = {
  // express.static() options
  dotfiles: 'ignore', // 숨겨진 파일 보이지 않토록
  etag: false,
  index: false,
  maxAge: '1d', // 캐싱 얼마나 오래할지
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now()); //해더에 추가
  },
};

app.use(express.static('public', options)); // 다양한 옵션을 줄 수가 있다.
app.listen(8081);

// 이전 버전에서는 지원하지 않았으나 커뮤니티에서 유용하고 많이 사용되다 보니 자체적으로 지원해 주게 됨
