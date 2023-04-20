const EventEmitter = require('events');

class Logger extends EventEmitter {
  // EventEmitter를 상속받는다.
  log(callback) {
    this.emit('log', 'started...');
    callback();
    this.emit('log', 'ended!');
  }
}
// EventEmitter는 객체를 만들면 그 객체의 이벤트에 한해서 이벤트를 들을 수 있다.
module.exports.Logger = Logger; // 외부에서 쓸 수 있도록 만들어준다.
