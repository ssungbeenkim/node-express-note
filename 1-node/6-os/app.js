/* os module
os 모듈은 운영체제의 정보를 제공하는 모듈이다.*/
const os = require('os');

/* 줄바꿈 문자열 
Windows에서는 줄바꿈 문자열이 \r\n이고, MacOS나 Linux에서는 줄바꿈 문자열이 \n이다. */
console.log(os.EOL === '\n'); // true
console.log(os.EOL === '\r\n'); // false

console.log(os.totalmem()); // 시스템의 총 메모리를 바이트 단위로 반환
console.log(os.freemem()); // 시스템의 사용 가능한 메모리를 바이트 단위로 반환
console.log(os.type()); // 운영체제의 이름을 반환
console.log(os.userInfo()); // 사용자 정보를 담은 객체를 반환
console.log(os.cpus()); // CPU의 정보를 담은 객체를 반환
console.log(os.homedir()); // 홈 디렉터리의 경로를 문자열로 반환
console.log(os.hostname()); // 컴퓨터의 이름을 문자열로 반환
