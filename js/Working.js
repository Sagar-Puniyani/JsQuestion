const fs = require('fs')
const crypto = require('crypto')

process.env.UV_THREADPOOL_SIZE = 10; 

const start = Date.now()
setTimeout(() => {
    console.log('Hello from Timer 1 ');
}, 0);


setImmediate(() => {
    console.log('Hello from the Immediate 1 ');
})

fs.readFile('6six.js' , 'utf-8' , ()=>{
    console.log('IO polling finish');

    setTimeout(() => {
        console.log('Hello from Timer 2');
    }, 0);
    setTimeout(()=>{
        console.log('Hello from Timer 3 ');
    } , 5*100)

    setImmediate(() => {
        console.log('Hello from the Immediate 2 ');
    })

    // Crpto Task 
    crypto.pbkdf2('password1' , 'salt1' , 100000 , 1024 , 'sha512' , ()=>{
        console.log(`${Date.now() - start} ms `,'password 1 Complete ');
    } )

    crypto.pbkdf2('password2' , 'salt1' , 100000 , 1024 , 'sha512' , ()=>{
        console.log(`${Date.now() - start} ms `,'password 2 Complete ');
    } )

    crypto.pbkdf2('password3' , 'salt1' , 100000 , 1024 , 'sha512' , ()=>{
        console.log(`${Date.now() - start} ms `,'password 3 Complete ');
    } )

    crypto.pbkdf2('password4' , 'salt1' , 100000 , 1024 , 'sha512' , ()=>{
        console.log(`${Date.now() - start} ms `,'password 4 Complete ');
    } )

    crypto.pbkdf2('password5' , 'salt1' , 100000 , 1024 , 'sha512' , ()=>{
        console.log(`${Date.now() - start} ms `,'password 5 Complete ');
    } )

    crypto.pbkdf2('password6' , 'salt1' , 100000 , 1024 , 'sha512' , ()=>{
        console.log(`${Date.now() - start} ms `,'password 6 Complete ');
    } )

})

console.log("hello From Top Level ");

const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
    console.log(items.getEntries()[0].name + ' duration: ' + items.getEntries()[0].duration + 'ms');
    performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

performance.mark('crypto-start');

// Your crypto code here

performance.mark('crypto-end');
performance.measure('crypto-duration', 'crypto-start', 'crypto-end');