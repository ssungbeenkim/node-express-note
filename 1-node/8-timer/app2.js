console.log('code1');
console.time('timeout 0'); // 0초가 보장되는지 확인해보자.
setTimeout(() => {
  console.log('setTimeout 0'); // 2
  console.timeEnd('timeout 0'); // 정확하게 0초가 보장되지 않는다. 콜스택이 비어야 콜백이 수행됨.
}, 0);

console.log('code2');
setImmediate(() => {
  // setTimeout과 별 차이 없음
  console.log('setImmediate'); //3
});

console.log('code3');
process.nextTick(() => {
  // task queue 가장 앞으로 들어감
  console.log('process.nextTick'); //1
});

// for(let i = 0; i < 1000000000; i++) { ... }
// 이런식으로 무거운 작업을 하면 콜스택이 비어야 task queue가 실행됨. 즉, 더더욱 0초가 보장되지 않음.
