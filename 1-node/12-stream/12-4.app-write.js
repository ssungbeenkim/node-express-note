const fs = require('fs');

const writeStream = fs.createWriteStream('./file3.txt');
writeStream.on('finish', () => {
  console.log('finished!');
}); // finish 이벤트는 모든 데이터가 writeStream에 기록된 후 발생

writeStream.write('hello!');
writeStream.write('world!');
writeStream.end(); // end() 메서드를 호출해야 finish 이벤트가 발생
