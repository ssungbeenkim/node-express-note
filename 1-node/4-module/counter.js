// node 자체적으로 만든 exports 시스템(예전방식)

// ES6+ 에서는 Javascript 자체적으로 모듈을 지원해 주고 있다. (export,import)
// 사용하려면 npm init 후 package.json 의 type을 module로 바꿔주면 JS 자체 모듈 사용이 가능
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
exports.increase = increase; // 이렇게 해도 Module.exports에 추가 되기는 한다.
console.log(module); // Module {..., exports: { getCount: [Function: getCount], increase: [Function: increase] }, ...}
console.log(module.exports === exports); // true

/* exports 말고 module.exports에 할당해야 하는 이유 */
exports = {}; // exports에 새로운 객체를 할당하면 exports는 더이상 module.exports를 참조하지 않는다.
console.log(module.exports === exports); // flase
exports.increase = increase; // 위의 것과 엄밀히 다르다. 빈 객체에 increase를 추가한 것이다.

/* 
exports에 다른 값을 할당하면 위험할 수 있다. 
처음에는 module.exports === exports true 이지만 
exports에 다른 값을 할당하면 달라지는 것을 볼 수 있다. 
*/
// console.log(module);
