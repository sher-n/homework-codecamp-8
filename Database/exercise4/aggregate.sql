-- "Aggregate Operators


-- 1.หาจำนวนของกะลาสีเรือทั้งหมด
SELECT count(*) FROM Sailors
-- 2.หาผลรวมของอายุกะลาสีเรือที่มี rating เท่ากับ 10
SELECT sum(age) FROM Sailors WHERE Rating = 10;
-- 3.หาค่าเฉลี่ยอายุของกะลาสีที่มี rating เท่ากับ 10
SELECT avg(age) FROM Sailors WHERE Rating = 10;
-- 4.หาชื่อของคนที่มีอายุมากที่สุด
SELECT DISTINCT sname FROM Sailors WHERE max(age);
-- 5.หาชื่อของคนที่มีอายุตั้งแต่ 25 ถึง 35"
SELECT DISTINCT sname FROM Sailors WHERE age BETWEEN 25 AND 35;