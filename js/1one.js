var a = 10;

(() => {
    console.log(a);
    a = 20;
    console.log(a);
})();//iife

console.log(a);
var a = 30;