/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    let timerId =  undefined;
    console.log('Type of Variable:', typeof timerId);
    
    fn(...args)
    timerId = setInterval( ()=> fn(...args) , t );
    console.log('Type of Variable:', typeof timerId);
    // console.log("timerId = " , timerId );
    
    const cancelFn = () => clearTimeout(timerId)
    return cancelFn;
};


const result = [];

const fn = (x) => 2 * x;
const args = [ 4 ], t = 35, cancelTimeMs = 190;
const start = performance.now();
console.log("start " , start );
const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
        result.push({"time": diff, "returned": fn(...argsArr)});
    }
        
    const cancel = cancellable(log, args, t);

    const maxT = Math.max(t, cancelTimeMs);
            
    setTimeout(cancel, cancelTimeMs);

    setTimeout(() => {
        console.log(result); // [{"time":20,"returned":10}]
    }, maxT + 15)