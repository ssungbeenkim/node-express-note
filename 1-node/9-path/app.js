const path = require('path');

// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname);
console.log(__filename);
// 노드는 __filename, __dirname 이라는 키워드로 경로에 대한 정보를 제공한다.
// 운영체제에 상관없이 잘 동작할 수 있도록 프로그램을 만드는것이 중요하다.
// 파일에 __filename, __dirname 변수를 넣어두면 실행시 현재 파일명과 파일 경로로 바뀐다

console.log(path.sep); // 경로 구분자
console.log(path.delimiter); // 환경변수 구분자

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

// dirname
console.log(path.dirname(__filename));

// extension
console.log(path.extname(__filename)); // 확장자

//parse
const parsed = path.parse(__filename); // 객체 형태로 root, dir, base, ext, name이 담겨진다.
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed);
console.log(str);

// isAbsolute 절대경로인지 확인
console.log('isAbsolute?', path.isAbsolute(__dirname)); // /Users/
console.log('isAbsolute?', path.isAbsolute('../')); //상대경로

// normalize
console.log(path.normalize('./folder////////sub')); // 알아서 수정

// join
console.log(__dirname + path.sep + 'image'); // 운영체제별로 다르게
console.log(path.join(__dirname, 'image')); // 더 간단하게 경로 만들기
