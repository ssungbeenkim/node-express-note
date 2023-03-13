const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(callback) {
    this.emit('log', 'started...');
    callback();
    this.emit('log', 'ended!');
  }
}

module.exports.Logger = Logger; // 외부에서 쓸 수 있도록 만들어준다.
