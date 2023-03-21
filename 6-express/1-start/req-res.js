import express from 'express'; // express 가져오기
const app = express(); // express 이용 Aplication 만들기

app.get('/sky/:id', (req, res, next) => {
  console.log('get');
  // console.log(req.headers);
  //http://localhost:8081/sky/vincent/?keyword=bts
  console.log(req.params);
  console.log(req.params.id);
  console.log(req.query);
  console.log(req.query.keyword);
  // res.send('hi!');
  // res.json({ name: 'vincent' });
  // res.sendStatus(400);
  res.setHeader('key', 'value');
  res.status(201).send('created'); // sendStatus. 쓸 수 있다.
});

app.listen(8081); // 특정 포트에서 듣기
// IP 서버가 네트워크상에 어디에 있는지를 알 수 있다.
// Port 서버에 어떤 어플리케이션에 접속하기를 원하는지를 나타냄, 관심있는 어플리케이션을 듣고 나타낼 수 있다.
