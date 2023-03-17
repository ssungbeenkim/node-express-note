// node 자체적으로 만든 exports 시스템(예전방식)

// ES6+ 에서는 Javascript 자체적으로 모듈을 지원해 주고 있다.
// 사용하려면 npm init 후 package.json 의 type을 module로 바꿔주어야 한다.
// refer to 5-module

let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

module.exports.getCount = getCount;
module.exports.increase = increase;
console.log(module.exports === exports); // true
// exports = {};
// console.log(module.exports === exports);
// exports.increase = increase; // 위의 것과 엄밀히 다르다.
/* 
exports에 다른 값을 할당하면 위험할 수 있다. 
처음에는 module.exports === exports true 이지만 
exports에 다른 값을 할당하면 달라지는 것을 볼 수 있다. 
*/
console.log(module);
