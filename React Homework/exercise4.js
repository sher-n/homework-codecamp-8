//ข้อที่ 1 ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้จะทำหน้าที่ alert ข้อความออกมาหลังจากผ่านไป ms
Function.prototype.defer = function (ms) {
    setTimeout(this, ms)
    
    };

    function f() {
alert("Hello")
};
f.defer(1000);


//ข้อ 2 ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้จะทำหน้าที่ return Function ให้ alert(a+b) เมื่อผ่านไป ms

Function.prototype.defer = function (ms) {
    let f = this;
    return function(a, b) {
        setTimeout(() => f(a,b), 3000)
    }
    
    };

function f(a, b) {
    alert( a + b );
  }
  
  f.defer(1000)(1, 2); // แสดง 3 หลังจากผ่านไป 1 