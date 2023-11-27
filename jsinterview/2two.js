a = 10;

(() =>{
    foo = 100;
    console.log(a);
    var foo = 100;
    a = 20;
    console.log(a);
    console.log(foo);
})();

// console.log(foo);
console.log(a);
var a  = 30;