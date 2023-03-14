console.log('code1');
console.time('timeout 0');
setTimeout(() => {
  console.log('setTimeout 0'); // 2
  console.timeEnd('timeout 0'); // 정확하게 0초가 보장되지 않는다. 콜스택이 비어야 콜백이 수행됨.
}, 0);

console.log('code2');
setImmediate(() => {
  // setTimeout과 거의 동일하게 동작한다.
  console.log('setImmediate'); //3
});

console.log('code3');
process.nextTick(() => {
  console.log('process.nextTick'); //1
});
