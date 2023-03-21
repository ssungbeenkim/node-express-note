const fs = require('fs');

const writeStream = fs.createWriteStream('./file3.txt');
writeStream.on('finish', () => {
  console.log('finished!');
}); // 여러번 해도 새로운 파일을 생성하고 쓴다. append는 어떻게?

writeStream.write('hello!');
writeStream.write('world!');
writeStream.end();
