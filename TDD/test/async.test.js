const myReadFile = require('../async');

// test('myReadFile can read file without error', (done) => {  // test async หรือ callback function ต้องใส่ done ด้วน เพื่อให้ค่าไม่คาดเคลื่อน
//     myReadFile('mytest.js', function(err, result){
//         if (err)
//             throw new Error(err);
//         else {
//             expect(result.length).toBeGreaterThan(0);
//             done();
//         }
//     });
// });


// test('myReadFile can read file without error : Promise', () => {
//     return myReadFile('mytest.js').then(result => {
//         expect(result.length).toBeGreaterThan(0);
//     });
// });

test('myReadFile can read file without error : Async Await', async () => {
    const result = await myReadFile('mytest.js');
    expect(result.length).toBeGreaterThan(0);
});

test('myReadFile must throw error when file could not be found', async () => {
    try {
        await myReadFile('my-test.js');
    } catch (e) {
        expect(e.message).toMatch("ENOENT: no such file or directory, open 'my-test.js'");
    }
});
