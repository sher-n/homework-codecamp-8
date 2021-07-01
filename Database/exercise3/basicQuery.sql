-- "Query พื้นฐานของ SQL

-- 1.ค้นหาชื่อและอายุจาก กะลาสีทุกคน
SELECT DISTINCT sname age FROM Sailors;
-- 2.หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือรหัส 103;
SELECT S.sname FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid WHERE R.bid = 103;
-- 3.หา sids ทั้งหมดของกะลาสีเรือที่จองเรือสีแดง
SELECT * FROM Reserves R LEFT JOIN Boats B ON R.bid = B.bid WHERE B.color = ‘Red’;
-- 4.หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือสีแดง
SELECT DISTINCT S.sname FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid WHERE B.color = 'Red'; 
-- 5.หาสีของเรือทั้งหมดที่ถูกจองโดยกะลาสีเรือชื่อ ‘Lubber’
SELECT DISTINCT B.color FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid WHERE S.sname = 'Lubber';
-- 6.หาชื่อของกะลาสีเรือที่จองเรืออย่างน้อย 1 ลำ
SELECT DISTINCT S.sname FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid WHERE bid IS NOT NULL;
-- 7.หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือสีแดงหรือเขียว
SELECT DISTINCT S.sname FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid WHERE B.color = 'Red' OR B.color = 'Green'; 
-- 8.หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือสีแดงและเขียว
SELECT S.sname FROM Sailors S WHERE S.sid IN 
(SELECT DISTINCT S.sid FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid WHERE B.color = 'Red')
AND S.sid IN 
(SELECT DISTINCT S.sid FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid WHERE B.color = 'Green');

-- 9.หา sids ทั้งหมดของกะลาสีเรือที่จองเรือสีแดงแต่ไม่จองเรือสีเขียว"
SELECT S.sid FROM Sailors S WHERE S.sid IN 
(SELECT DISTINCT S.sid FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid WHERE B.color = 'Red')
AND S.sid NOT IN 
(SELECT DISTINCT S.sid FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid WHERE B.color = 'Green');

