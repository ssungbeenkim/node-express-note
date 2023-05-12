const fs = require('fs');

// 💩
const beforeMem = process.memoryUsage().rss; // 메모리 상태를 저장 *rss는 Resident Set Size의 약자로 현재 메모리 사용량을 의미 * method returns an integer representing the Resident Set Size (RSS) in bytes.
fs.readFile('./file.txt', (_, data) => {
  // 파일을 읽어서
  fs.writeFile('./file2.txt', data, () => {}); // 파일을 동기적으로 다 읽은 후 새로운 파일에 저장
  // calculate
  const afterMem = process.memoryUsage().rss; // 수행 후 메모리 상태를 저장
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024; // 바이트 단위로 계산된 것을 MB 단위로 변환
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`); // 메모리 사용변화를 출력
});

// 데이터를 모두 읽어서 메모리에 저장했다가 메모리에 다시 쓰는 것은 비효율적이다.
// => stream을 쓰자! (데이터를 조각조각 읽어서 처리하는 방식)
