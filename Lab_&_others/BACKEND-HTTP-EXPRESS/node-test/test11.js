

console.log('1')
new Promise(rs => 
    setTimeout(()=> {
        console.log('2');
        rs();
    }, 1000))
.then(() => console.log('3'));

