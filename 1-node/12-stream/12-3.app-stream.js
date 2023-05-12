const fs = require('fs');

/* 체이닝 가능하다. */

const readStream = fs.createReadStream('./file.txt', {
  // highWaterMark: 8, // 64 kbytes이 기본값, 어느 정도씩 처리를 해 줄지.
  encoding: 'utf-8',
});

const beforeMem = process.memoryUsage().rss;
const data = []; //
readStream.on('data', (chunk) => {
  // data 이벤트는 데이터가 들어올 때마다 발생, readStream에서 데이터가 들어오면 콜백 호출.
  // console.log(chunk);
  data.push(chunk);
  // console.count('data');
  // readStream.close();
});

readStream.on('end', () => {
  // end 이벤트는 모든 데이터를 다 읽은 후 발생
  // console.log(data);
  console.log(data.join(''));
});

readStream.on('close', () => {
  // close 이벤트는 스트림을 닫은 후 발생
  // console.log(data.join(''));

  // calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`);
});
readStream.on('error', (error) => {
  // error 이벤트는 에러가 발생했을 때 발생
  console.log(error);
});
