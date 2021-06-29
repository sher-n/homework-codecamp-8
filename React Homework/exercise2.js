//ข้อที่ 1

let animal = {
    jumps: null
  };
  
  let rabbit = {
    __proto__: animal,
    jumps: true
  };

// ในบรรทัดที่มีเลข 1 2 และ 3 จะได้ค่าออกมาเป็นอะไร


alert( rabbit.jumps ); // ? (1) true

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2) null

delete animal.jumps;

alert( rabbit.jumps ); // ? (3) undefined

// ข้อที่ 2 

/* ใช้ __proto__ ในการกำหนด prototype object ดังนี้ 
    pockets → bed → table → head.
 */ 

let pockets = {
    money: 2000
};

let bed = {
    __proto__: pockets,
    sheet: 1,
    pillow: 2
  };

let table = {
    __proto__: bed,
    pen: 3
  };

let head = {
    __proto__: table,
    glasses: 1
  };
  
// ข้อที่ 3 
//การเขียนโค๊ดแบบนี้ object ไหนจะเป็นคนได้ property full ไป 

let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat(); // object rabbit ได้ property full เพราะ this คือ rabbit
  

// ข้อที่ 4 
let hamster = {
  
    eat(food) {
    if (!this.stomach) 
        this.stomach = []
      this.stomach.push(food);
    }
  };

  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  