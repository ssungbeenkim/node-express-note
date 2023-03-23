const bcrypt = require('bcrypt');

const password = 'abcd1234';
const hashed = bcrypt.hashSync(password, 10);
console.log(`password: ${password}, hashed: ${hashed}`);
// 암호화 과정은 cpu를 사용한다. 서버에 따라 다르지만 8~12 정도를 추천한다.

const result = bcrypt.compareSync('abcd123s4', hashed);
console.log(result); // false

// bcript를 사용하면 password를 좀더 안전하게 보관할 수 있다.
// Salt는 암호화를 좀더 확실하고 안전하게 하기 위해서 쓰는 추가적인 데이터인데, 너무 길게 사용하면
// 성능에 영향을 미칠 수 있다.
// Salt 길이별로 성능 측정: https://auth0.com/blog/hashing-in-action-understanding-bcrypt/
