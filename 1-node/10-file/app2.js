const fs = require('fs').promises;

// reading a file
fs.readFile('./text.txt', 'utf8') //인코딩 해주지 않으면 버퍼 형태로 출력됨
  .then((data) => console.log(data))
  .catch(console.error);

// writing a file 기존의 데이터가 있으면 덮어쓰기
fs.writeFile('./file.txt', 'Hello, Dream Coders! :) ') // 아무것도 리턴되지 않지만
  .catch(console.error); // Void 리턴이므로 에러 발생 대비하여캐치는 꼭 해주기

fs.appendFile('./file.txt', 'Yo!, Dream Coders! :) ') // 기존의 데이터 유지
  .catch(console.error);

// copy
fs.copyFile('./file.txt', './file2.txt') // 파일에 아무런 내용이 없다. 비동기적으로 처리가 되기 때문.
  .catch(console.error); // 위에서 쓴 다음 처리를 해 주고 싶다면 .then()에 콜백 형태로 전달해주자.

// folder
fs.mkdir('sub-folder') //
  .catch(console.error);

fs.readdir('./') // 배열의 형태로 파일과 폴더의 이름이 리턴된다.
  .then(console.log)
  .catch(console.error);
