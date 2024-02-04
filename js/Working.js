const fs = require('fs')

setTimeout(() => {
    console.log('Hello from Timer 1 ');
}, 0);


setImmediate(() => {
    console.log('Hello from the Immediate 1 ');
})

fs.readFile('sample.c++' , 'utf-8' , ()=>{
    console.log('IO polling finish');

    setTimeout(() => {
        console.log('Hello from Timer 2');
    }, 0);
    setTimeout(()=>{
        console.log('Hello from Timer 3 ');
    } , 5*100)
})

console.log("hello From Top Level ");