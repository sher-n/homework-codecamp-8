
function callTime(func1, func2, func3) {
    func1();
}

setTimeout(() => { 
    console.log('a');
    setTimeout(() => { 
        console.log('b');
        setTimeout(() => { 
            console.log('c')
        }, 1000)
    }, 1000);
}, 1000)


