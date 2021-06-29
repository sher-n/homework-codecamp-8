let callbackValue;

function hello(err, value) {
    callbackValue = value;
}

function tryHello4(callbackFunction) {
    let returnValue = 'returnValue';
    let callbackValue = 'callbackValue';
    callbackFunction(null, callbackValue);
    return returnValue;
}
console.log(tryHello4(hello));
console.log(callbackValue);