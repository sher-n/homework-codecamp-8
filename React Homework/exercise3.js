//ข้อที่ 1 
//ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); //ได้ true

//ข้อที่ 2
// ถ้ามีการ Rabbit.prototype.eats = false; จะเป็นอย่างไร

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // false

//ข้อทีี่ 3 ถ้ามีการ delete rabbit.eats; จะเป็นอย่างไร

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // true

//ข้อที่ 4 ถ้ามีการ delete Rabbit.prototype.eats; จะเป็นอย่างไร
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // undefined 

//ข้อที่ 5
// ถ้าเราต้องการสร้างใช้ constructor ของ obj เราสามารถเขียนแบบนี้ได้ไหม
let obj2 = new obj.constructor(); //สามารถเขียนได้ 