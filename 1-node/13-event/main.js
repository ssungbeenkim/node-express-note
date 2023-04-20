const logger = require('./logger.js');
const emitter = new logger.Logger(); // EventEmitter를 상속받은 Logger 클래스의 인스턴스를 생성

emitter.on('log', (event) => {
  console.log(event);
});

emitter.log(() => {
  console.log('..... ꝍ loopings ꝍ....');
  for (let i = 0; i < 5; i++) {
    console.log('count', i);
  }
});
