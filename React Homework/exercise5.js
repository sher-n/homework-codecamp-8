
// ข้อที 1
// มี Object Dictionary ที่สร้างจาก Object.create(null) เพื่อเก็บ key/value pairs 
//ให้เพิ่ม Method dictionary.toString() และคืนค่าเป็น key ทั้งหมดออกมาที่คั้นด้วย comma

let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join()
        }
    }
});
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

alert(dictionary); // "apple,__proto__"

//ข้อที่ 2
//สร้าง object rabbit ด้วย new keyword

function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    alert(this.name);
  };
  
  let rabbit = new Rabbit("Rabbit");
  
  // คำสั่งทั้งหมดนี้ทำงานเหมือนกันหรือไม่

function Rabbit(name) {
    this.name = name;
  }
Rabbit.prototype.sayHi = function() {
    alert(this.name);
  };
  
let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // true
Rabbit.prototype.sayHi(); // undefined เนื่องจาก Rabbit ไม่ได้กำหนด name เป็นของตัวเอง 
Object.getPrototypeOf(rabbit).sayHi(); //undefined เนื่องจาก Rabbit ไม่ได้กำหนด name เป็นของตัวเอง 
rabbit.__proto__.sayHi(); // undefined เนื่องจาก rabbit.name ไม่ได้อยู่ใน _proto_