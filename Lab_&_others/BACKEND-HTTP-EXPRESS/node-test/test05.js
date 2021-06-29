function addSync(a,b) {
    return a + b;
}

let sum = addSync(1,3);

let sum2;

function add(a, b, callbackFunc) {
    callbackFunc(null, a+b);
}

add(1,3, (err, returnValue) => {
    sum2 = returnValue;
    console.log(sum2);
})