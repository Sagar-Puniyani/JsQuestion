/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
    let arguments , ans;
    return function(...args) {
        console.log("arguments2 : " , arguments);
        console.log("type arguments2 : " ,  arguments instanceof Array);
        console.log("ans : " , ans);
        arguments = Array(arguments)
        if (arguments != args){
            arguments = [...args]
            console.log("arguments : " , arguments);
            ans =  fn(...arguments);
            return ans
        }
        return ans
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
