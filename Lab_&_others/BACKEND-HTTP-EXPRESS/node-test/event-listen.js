const Em1 = require('./event-emit');
const em1 = new Em1()

em1.emit1()
em1.emit2()
em1.on('twosec',(e) => console.log(e))