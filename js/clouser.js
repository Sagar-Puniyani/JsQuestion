function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    }
}

const counter = createCounter();

console.log(counter());  // Output: 1
console.log(counter());  // Output: 2
console.log(counter());  // Output: 3

function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

const counter1 = createCounter();

console.log(counter1());  // Output: 1
console.log(counter1());  // Output: 2
console.log(counter1());  // Output: 3