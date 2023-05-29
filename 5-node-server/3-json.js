// 안드로이드나 아이폰 등 브라우저가 아닌 다른 클라이언트에서 다른 목적으로 서버의 데이터를 가져오기 위해서는
// json 이나 다른 형태의 데이터를 제공할 수 있는 서버를 만들어야 한다.
// 사용자게에 고정된, ui적인 html 파일을 제공하는 것이 아니라 json의 형태로 데이터를 제공하는 서버를 만들어보자.

const http = require('http');
const courses = [
  // 실제로 사용한다면 데이터베이스에 저장해 두고 사용할 것
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'Node' },
  { name: 'Front-end' },
];

const server = http.createServer((req, res) => {
  const url = req.url; // what?
  const method = req.method; //how?, action?
  if (url === '/courses') {
    if (method === 'GET') {
      res.writeHead(200, { 'content-Type': 'application/json' });
      res.end(JSON.stringify(courses)); // end -> final chunk of data to be written before closing stream.
    } else if (method === 'POST') {
      // postman 이용 POST request 요청
      const body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      });
      req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const course = JSON.parse(bodyStr);
        courses.push(course);
        console.log(course);
        res.writeHead(201);
        res.end();
      });
    }
  }
});

server.listen(8080);
// 메모리에 데이터가 보관된다.
// 다음 예제에서 database와 express를 사용할 예정.
