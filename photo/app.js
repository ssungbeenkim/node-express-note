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

fs.promises.readdir(workingDir).then(processFiles).catch(console.error);
// readdir로 배열의 형태로 파일 이름들을 받아온다.

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(workingDir);
    } else if (isCapturedFile(file)) {
      console.log('captured', file);
    } else if (isDuplicatedFile(files, file)) {
      console.log('duplicated', file);
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isDuplicatedFile(files, file) {
  // IMG_XXXX -> IMG_EXXXX
  if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
    return false;
  }
  const editted = `IMG_E${file.split('_')[1]}`;
  const found = files.find((v) => v.includes(editted));
  return !!found;
}
