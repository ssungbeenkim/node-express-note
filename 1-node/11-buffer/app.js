// Fixed-size chuck of memory
// array of integers, byte of data
const fs = require('fs');

const buf = Buffer.from('Hi');
console.log(buf); // <Buffer 48 69> 유니코드 형태로 출력된다.
// 별도로 인코딩을 지정하지 않으면 UTF-8 인코딩 방식을 쓰게 됨
// * If provided, the {encoding} parameter identifies the character encoding.
// * If not provided, {encoding} defaults to 'utf8'.
console.log(buf.length); // 2
console.log(buf[0]); // 72 배열에 있는 형태로 접근하면 ASCII code 출력이 된다.
console.log(buf[1]); // 105
console.log(buf.toString()); // Hi

// create
const buf2 = Buffer.alloc(2); // 2바이트 크기의 버퍼를 생성하고 0으로 초기화
const buf3 = Buffer.allocUnsafe(2); // 빠르지만 초기화는 시키지 않음
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString()); // Hi
console.log(buf3.toString()); // Hi

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]); // 버퍼를 합쳐준다.
console.log(newBuf.toString()); // HiHiHi
