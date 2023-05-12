const fs = require('fs');
const zlib = require('zlib'); // node.js애서 제공하는 압축 모듈 등 여러가지를 파이핑 할 수 있다.

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./file4.zip');
// pipe() 메서드로 스트림을 연결
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish', () => {
  // finish 이벤트는 모든 데이터가 writeStream에 기록된 후 발생
  console.log('done!!');
}); // 최종 파일에는 압축된 데이터가 들어있는 것을 확인할 수 있다.

const http = require('http'); //  서버를 만들 때 유용하게 사용할 수 있음.
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('./file.txt');
  stream.pipe(res); // 파일을 전부 읽어서 응답하는 것 보다 스트림으로 응답하는 것이 효율적이다.
});
server.listen(3000);
