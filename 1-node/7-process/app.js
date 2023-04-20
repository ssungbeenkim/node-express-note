const process = require('process');
// process 모듈은 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고 있다.

console.log(process.execPath); // 노드의 경로
console.log(process.version); // 노드의 버전
console.log(process.pid); // 프로세스의 아이디
console.log(process.ppid); // 부모 프로세스의 아이디
console.log(process.platform); // 운영체제 플랫폼
console.log(process.env); // 시스템 환경 변수 ** 중요 **
console.log(process.uptime()); // 현재 프로세스가 실행된 시간
console.log(process.cwd()); // 현재 프로세스가 실행되는 위치
console.log(process.cpuUsage()); // 현재 cpu 사용량

setTimeout(() => {
  // task queue에 콜백을 넣는다.
  console.log('setTimeout');
}, 0);

process.nextTick(() => {
  // 현재 callstack에 있는 것들을 다 실행한 후 콜백을 실행해 달라고 하는것.
  console.log('nextTick');
});

for (let i = 0; i < 10; i++) {
  console.log('for loop');
}
// for loop 다 돌고 나서 위의 두개가 실행된다. 순서는 nextTick()이 먼저 출력 *
// task queue에 다른 콜백이 들어있어도 우선순위를 높여서 taskqueue의 제일 앞에서 콜백이 실행되도록 함.
