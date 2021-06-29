const EventEmitter = require('events');

class Em1 extends EventEmitter {
    emit1() {
        setInterval(() => {
            this.emit('onesec', 111111)
        }, 1000);
    }
    emit2() {
        setInterval(() => {
            this.emit('twosec', 222222)
        }, 2000);
    }
}

module.exports = Em1;