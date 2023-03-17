const fs = require('fs');

// 💩
const beforeMem = process.memoryUsage().rss; // 메모리 상태를 저장
fs.readFile('./file.txt', (_, data) => {
  fs.writeFile('./file2.txt', data, () => {}); // 파일을 다 읽은 후 새로운 파일에 저장
  // calculate
  const afterMem = process.memoryUsage().rss; // 수행 후 메모리 상태를 저장
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`); // 메모리 사용변화를 출력
});

// 데이터를 모두 읽어서 메모리에 저장했다가 메모리에 다시 쓰는 것은 비효율적이다.
// => stream을 쓰자!
