const EventEmitter = require('events');
const emitter = new EventEmitter(); //

const callback1 = (args) => {
  console.log('first callback - ', args);
};
emitter.on('ellie', callback1); // 특정 이벤트가 들어왔을 때 수행할 콜백 등록.

emitter.on('ellie', (args) => {
  console.log('second callback - ', args);
});

emitter.emit('ellie', { message: 1 }); // 임의로 이벤트를 발생
emitter.emit('ellie', { message: 2 });
emitter.removeAllListeners(); // 모든 이벤트에 대하여 등록된 콜백을 제거
emitter.emit('ellie', { message: 3 });

// 이벤트에 관심있는 콜백함수를 만들어 두고 특정 이벤트를 발생시켜 줄 수 있다.
