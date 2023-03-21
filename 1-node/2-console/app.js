console.log('logging....');
console.clear();

// log level
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warn'); // 경보
console.error('error'); // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2 === 3, 'not same!'); // 특정 조건일 때 print
console.assert(2 === 2, 'same!');

// print object
const student = { name: 'ellie', age: 20, company: { name: 'AC' } };
console.log(student);
console.table(student); // table 형태로 출력
console.dir(student, { showHidden: true, colors: false, depth: 0 }); // 몇 단계까지 출력할지 depth로 할 수 있다.

// measuring time
console.time('for loop');
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('for loop'); // 성능

// counting
function a() {
  console.count('a function');
}
a();
console.countReset('a function');
a();

// trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log('f3');
  console.trace();
}
/* Trace
    at f3 (/Users/wandakim/Projects/nodejsStudy/test.js:10:11)
    at f2 (/Users/wandakim/Projects/nodejsStudy/test.js:6:3)
    at f1 (/Users/wandakim/Projects/nodejsStudy/test.js:3:3)
    at Object.<anonymous> (/Users/wandakim/Projects/nodejsStudy/test.js:12:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47 */
f1(); // 디버깅
