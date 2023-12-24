var once = function(fn) {
    let count  = 0;
    return function(...args){
        console.log(args);
        if (!count ){
            count++;
            return  fn(...args);
        }
        return undefined;
    }
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

console.log("call1 : " , onceFn(1,2,3)); // 6
console.log("call2 : " , onceFn(2,3,6)); // returns undefined without calling fn