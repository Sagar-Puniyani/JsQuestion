/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
    try {
        const result = await Promise.race([fn(...args), new Promise((resolve, reject) => setTimeout(() => reject("Time Limit Exceeded"), t))]);
        return result;
    } catch (error) {
        throw error;
    }
}
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */