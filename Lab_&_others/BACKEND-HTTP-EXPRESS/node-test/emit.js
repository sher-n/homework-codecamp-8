const EventEmitter = require('events')
const em1 = new EventEmitter()

setInterval(() => {
    em1.emit('onesec', {id: 1, txt: 'hello'})
}, 1000);

em1.on('onesec', function(e) {
    console.log(e.txt)
})