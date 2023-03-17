// ejs를 사용할 수도 있지만 실제로는 react와 next.js를 활용하여 더 화려하고 심플하게
// server side rendering을 할 수 있다.
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const name = 'Ellie';
const courses = [
  // 실제로 사용한다면 데이터베이스에 저장해 두고 사용할 것이지만 예시임.
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'Node' },
];
const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader('Content-Type', 'text/html'); //setHeader를 지정해줘서 html임을 알려준다.
  if (url === '/') {
    ejs
      .renderFile('./template/index.ejs', { name })
      .then((data) => res.end(data));
  } else if (url === '/course') {
    ejs
      .renderFile('./template/courses.ejs', { courses })
      .then((data) => res.end(data));
  } else {
    ejs
      .renderFile('./template/not-found.ejs', { name })
      .then((data) => res.end(data));
  }

  // 서버에 있는 resource를 클라이언트에 보내줄 수 있다.
});

server.listen(8080);
