// ข้อ 1


let user = {
    name: "John",
    years: 30
};

/* ให้เขียน Destrcutring assignment ที่ให้
property ที่ชื่อ name ไปอยู่ในตัวแปร name
property ที่ชื่อ years ไปอยู่ในตัวแปร age
property ที่ชื่อ isAdmin ไปอยู่ในตัวแปร isAdmin (ให้เป็น false ถ้าไม่มีค่าให้กำหนด) */

let { name , years: age, isAdmin = false } = user

// ข้อ 2

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

/*ให้สร้าง function topSalary(salaries) ที่คืนค่าชื่อคนที่มีเงินเดือนสูงสุด
ถ้า salaries 
1.ไม่มีข้อมูลให้คืนค่าเป็น null
2.ถ้าสูงสุดมีหลายคน ก็ให้คืนใครก็ได้สักคน
 */

function topSalary(salaries) {
    let mostSalary = 0
    let whomMostSalary = null 
     for (name in salaries) {
      if (salaries[name] > mostSalary) {
          mostSalary = salaries[name]
          whomMostSalary = name
      } 
     }  
      return whomMostSalary;
  }

