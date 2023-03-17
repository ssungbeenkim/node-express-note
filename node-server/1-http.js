const http = require('http');

const server = http.createServer((req, res) => {
  console.log('incoming...');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.rul);
  res.write('hi');
  res.end();
});

server.listen(8080);
