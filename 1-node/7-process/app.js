const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log('setTimeout');
}, 0);

process.nextTick(() => {
  console.log('nextTick');
}); // 위의 것과 동일. 현재 callstack에 있는 것들을 먼저 수행 후 콜백을 실행해 달라고 하는것.

for (let i = 0; i < 10; i++) {
  console.log('for loop');
}
// for loop 다 돌고 나서 위의 두개가 실행된다. 순서는 nextTick()이 먼저 출력
// task queue에 다른 콜백이 들어있어도 우선순위를 높여서 taskqueue의 제일 앞에서 콜백이 실행되도록 함.
