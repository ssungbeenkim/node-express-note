const fs = require('fs');

const readStream = fs.createReadStream('./file.txt', {
  // highWaterMark: 8, // 64 kbytes이 기본값, 어느 정도씩 처리를 해 줄지.
  encoding: 'utf-8',
});

const beforeMem = process.memoryUsage().rss;
const data = [];
readStream.on('data', (chunk) => {
  // readStream에서 데이터가 들어오면 콜백 호출.
  // console.log(chunk);
  data.push(chunk);
  // console.count('data');
  // readStream.close();
});

readStream.on('end', () => {
  // console.log(data);
});

readStream.on('close', () => {
  // console.log(data.join(''));
  // calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`);
});
readStream.on('error', (error) => {
  console.log(error);
});
