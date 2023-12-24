/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
    let cache = {}
    return function(...args) {
        let key = JSON.stringify(args)
        if (key in cache){
            return cache[key];
        }
        else{
            cache[key] = fn(...args);
            return cache[key];
        }
    }
}



let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
console.log("Memorization = " , memoizedFn(2, 3));// 5
console.log("Memorization = " , memoizedFn(2, 3));// 5
console.log(callCount) // 1 
