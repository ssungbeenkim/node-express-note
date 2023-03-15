const path = require('path');
const fs = require('fs');
const os = require('os');

const folder = process.argv[2]; // 실행 인자를 받아오기
const workingDir = path.join(os.homedir(), 'Pictures', folder);
// console.log(fs.existsSync('/Users/wandakim/Pictures/test')); // 경로 존재하는지 확인
if (!folder || !fs.existsSync(workingDir)) {
  console.error('Please enter folder name in Pictures');
}

const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');
!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

fs.promises
  .readdir(workingDir) //
  .then((files) => console.log(files))
  .catch(console.error);
