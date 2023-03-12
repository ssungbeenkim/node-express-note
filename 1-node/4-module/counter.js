// node 자체적으로 만든 exports 시스템
// ES6+ 에서는 Javascript 자체적으로 모듈을 지원해 주고 있다.

let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

module.exports.getCount = getCount;
module.exports.increase = increase;
console.log(module.exports === exports);
// exports = {};
// console.log(module.exports === exports);
exports.increase = increase; // 위의 것과 엄밀히 다르다.
/* 
exports에 다른 값을 할당하면 위험할 수 있다. 
처음에는 module.exports === exports true 이지만 
exports에 다른 값을 할당하면 달라지는 것을 볼 수 있다. 
*/
console.log(module);
