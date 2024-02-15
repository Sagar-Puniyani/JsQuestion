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

// Example 1
function createMultiplier(x) {
    return function(y) {
        return x * y;
    };
}

const multiplyByTwo = createMultiplier(2);
console.log(multiplyByTwo(4));  // Output: 8

// Example 2
function createGreeting(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    };
}

const sayHelloToJohn = createGreeting("John");
sayHelloToJohn();  // Output: Hello, John!

// Example 3
function createLogger(prefix) {
    return function(message) {
        console.log(`[${prefix}] ${message}`);
    };
}

const logInfo = createLogger("INFO");
logInfo("This is an information message");  // Output: [INFO] This is an information message
