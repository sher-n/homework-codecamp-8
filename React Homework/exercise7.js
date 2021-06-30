// ข้อที่ 1 this มีค่าเป็นอะไร

function f() {
    alert( this ); // this คือ window object alert(this) มีค่าเท่ากับ alert(window)
  }
  let user = {
    g: f.bind(null)
  };
    user.g();

//lab  ผลลัพธ์ที่ได้คืออะไร

function f() {
    alert(this.name);
  }
  
  f = f.bind( {name: "John"} ).bind( {name: "Ann" } );
  
  f(); // John

//lab  ค่าของ value ในฟังก์ชันจะเปลี่ยนไปไหมหลังจาก bind
function sayHi() {
    alert( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "John"
  });
  
  alert( bound.test ); // undefined เนื่องจาก bound ถูกเรียกจาก object { name: john} 


  //lab  ทำให้ code ด้านล่างนี้ทำงานได้
  function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  let user = {
    name: 'John',
    loginOk() {
      alert(`${this.name} logged in`);
    },
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  };
  // แก้ไข code ด้านล่างนี้
  askPassword(user.loginOk, user.loginFail);
  // คำตอบ
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); 

  //lab  ทำให้ code ด้านล่างนี้ทำงานได้
  function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };

//สามารถทำได้ 2 วิธี 
//วิธีแรก
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  let user = {
    name: 'John',
  
    login(result) {
      return function() {
        alert( this.name + (result ? ' logged in' : ' failed to log in') );
      }    
}
  };
  askPassword(user.login(true), user.login(false));
  // วิธีที่สอง 
  function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  askPassword(() => user.login(true), () => user.login(false));