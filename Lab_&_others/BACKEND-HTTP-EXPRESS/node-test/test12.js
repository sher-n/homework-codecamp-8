function showText(text) {
    return new Promise(rs => 
        setTimeout(()=> {
            console.log(text);
            rs();
        }, 1000))
}

showText('a')
.then(() => showText('b'))
.then(() => showText('c'))