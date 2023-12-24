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