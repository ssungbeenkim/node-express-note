import express from 'express'; // express 가져오기
const app = express(); // express 이용 Aplication 만들기

app.get('/sky/:id', (req, res, next) => {
  console.log('get');
  console.log(req.headers);
  console.log(req.params);
  console.log(req.params.id);
  console.log(req.query);
  console.log(req.query.keyword);
  //http://localhost:8081/sky/vincent/?keyword=bts

  //   get
  // {
  //   host: 'localhost:8081',
  //   connection: 'keep-alive',
  //   'cache-control': 'max-age=0',
  //   'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
  //   'sec-ch-ua-mobile': '?0',
  //   'sec-ch-ua-platform': '"macOS"',
  //   'upgrade-insecure-requests': '1',
  //   'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
  //   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  //   'sec-fetch-site': 'none',
  //   'sec-fetch-mode': 'navigate',
  //   'sec-fetch-user': '?1',
  //   'sec-fetch-dest': 'document',
  //   'accept-encoding': 'gzip, deflate, br',
  //   'accept-language': 'en,ko-KR;q=0.9,ko;q=0.8'
  // }
  // { id: 'vincent' }
  // vincent
  // { keyword: 'bts' }
  // bts

  // res.send('hi!');
  // res.json({ name: 'vincent' });
  // res.sendStatus(400);
  res.setHeader('key', 'value');
  res.status(201).send('created'); // sendStatus. 쓸 수 있다.
});

app.listen(8081); // 특정 포트에서 듣기
// IP 서버가 네트워크상에 어디에 있는지를 알 수 있다.
// Port 서버에 어떤 어플리케이션에 접속하기를 원하는지를 나타냄, 관심있는 어플리케이션을 듣고 나타낼 수 있다.
