-- "SELECT Statements(Advanced)
-- 1.หาเลขบัญชีที่เปิดในสาขาเมือง Riverside
SELECT A.account_number FROM branch B LEFT JOIN accounts A ON B.branch_name = A.branch_name WHERE B.branch_city = 'Riverside';

-- 2.หาเลขบัญชีที่เปิดในสาขาชื่อ A หรือ B
SELECT account_number FROM accounts WHERE branch_name = 'A' OR branch_name = 'B';

-- 3.หาจำนวนของเงินทั้งหมดของแต่ละคนฝาก
SELECT customer_name, sum(balance) FROM depositor D LEFT JOIN accounts A ON D.account_number = A.account_number GROUP BY D.customer_name;

-- 4.หาจำนวนของเงินทั้งหมดของแต่ละคนฝากที่มีบัญชีธนาคารอย่างน้อย 2 บัญชี
SELECT customer_name, sum(balance) FROM depositor D LEFT JOIN account A ON D.account_number = A.account_number GROUP BY D.customer_name HAVING count(*) > 1;

-- 5.หาจำนวนของเงินทั้งหมดของแต่ละคนฝากที่มีบัญชีธนาคารอย่างน้อย 2 บัญชี โดยเรียงจากมากไปน้อย"
SELECT customer_name, sum(balance) FROM depositor D LEFT JOIN account A ON D.account_number = A.account_number GROUP BY D.customer_name HAVING count(*) > 1 ORDER BY sum(balance) DESC;