async function getData(){
    return 2;
}


console.log("A");
console.log("B");

setTimeout(() => console.log("C") , 0)

getData().then(() => console.log("I got the data "))
console.log("D");
console.log("E");
console.log("F");