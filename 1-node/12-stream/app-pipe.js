const fs = require('fs');
const zlib = require('zlib'); // node.js애서 제공하는 압축 모듈

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./file4.zip');
const piping = readStream.pipe(zlibStream).pipe(writeStream); // pipe() 메서드로 스트림을 연결
piping.on('finish', () => {
  // finish 이벤트는 모든 데이터가 writeStream에 기록된 후 발생
  console.log('done!!');
});

const http = require('http'); //  서버를 만들 때 유용하게 사용할 수 있음.
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('./file.txt');
  stream.pipe(res);
});
server.listen(3000);
