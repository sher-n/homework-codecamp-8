//Lab ให้สร้าง decorator ฟังก์ชัน ชื่อ spy(func) โดยทำให้ work ที่รับ argument เข้าไป return ค่า ออกมาเป็น “call : argument1, agrument2”

let worker = {
    calls: [],
    work(a, b) {
        console.log( a + b ); // work จะเป็น ฟังก์ชัน หรือ method ก็ได้
        this.calls.push([a,b]);
      }
    }

function spy(func, hash) {
    let cache = new Map();
    return function() {
        let key = hash(arguments); // arguments มีค่า [3,5]
        if (cache.has(key)) {
        return cache.get(key);
        }
        let result = func.call(this, ...arguments); 
    // ...arguments กระจาย 3,5 ออกจาก [3,5]
        cache.set(key, result);
        return result;
    };
    }
    
    function hash(args) {
        return args[0] + ',' + args[1];
      }
    
      worker.work = spy(worker.work, hash);

      worker.work(1, 2); //3
      worker.work(4, 5); //9

      for (let args of worker.calls) {
        alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
      }