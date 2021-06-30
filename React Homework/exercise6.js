//Lab ให้สร้าง decorator ฟังก์ชัน ชื่อ spy(func) โดยทำให้ work ที่รับ argument เข้าไป return ค่า ออกมาเป็น “call : argument1, agrument2”

let worker = {
    calls: [],
    work(a, b) {
        console.log( a + b ); 
        this.calls.push([a,b]);
      }
    }

function spy(func, hash) {
    let cache = new Map();
    return function() {
        let key = hash(arguments); 
        if (cache.has(key)) {
        return cache.get(key);
        }
        let result = func.call(this, ...arguments); 
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
      
// ข้อ 2 ให้สร้าง decorator ฟังก์ชัน ชื่อ delay () รับค่า argument 2 ตัว
//เป็น f และ เวลาในการ delay เป็นหน่วย มิลลิวินาที 

      function delay (func, ms){
        let cache = new Map();
        if (cache.has(x)) {
           return function() {
            setTimeout(() => caches.get(x) ,ms) 
        }
        }
        let result = func(x); // (**)
            cache.set(x, result);
        return function() {
        setTimeout(() => result ,ms)
        }
        }
      function f(x) {
        alert(x);
        }
        // ให้สร้าง decorator ฟังก์ชันที่ ครอบ f ฟังก์ชัน
        let f1000 = delay(f, 1000);
        let f1500 = delay(f, 1500);
        f1000("test"); // แสดง "test" หลังจาก 1000ms
        f1500("test"); // แสดง "test" หลังจาก 1500ms
        