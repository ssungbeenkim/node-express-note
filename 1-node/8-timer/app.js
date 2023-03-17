// 타이머와 콜스택의 연관
let num = 1;
const interval = setInterval(() => {
  console.log(num++);
}, 1000);

setTimeout(() => {
  console.log('Timeout!');
  clearInterval(interval);
}, 6000);
