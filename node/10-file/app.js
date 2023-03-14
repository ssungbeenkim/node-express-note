const fs = require('fs');

// 모든 API는 3가지 형태로 제공 되어진다.
// rename(...., callback(error, data)) 비동기
// renameSync(....) // 블럭킹. 끝날때까지 다음줄로 넘어가지 않는다.
// try { renameSync(....) } catch(e) { } // 항상 try와 catch로 감싸주어야 한다.
// promises.rename().then().catch(0)

try {
  fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
  console.error(error); // 에러핸들링을 해주자.
}

fs.rename('./text-new.txt', './text.txt', (error) => {
  // 비동기
  console.log(error);
});
console.log('hello');

fs.promises
  .rename('./text2.txt', './text-new.txt') //
  .then(() => console.log('Done!'))
  .catch(console.error);

// Sync 는 사용하지 않는것이 좋다.
