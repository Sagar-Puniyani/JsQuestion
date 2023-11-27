var arr = [1,2,3,4];
console.log("arr is instanceof Array", arr instanceof Array);

console.log("type of arr ", typeof arr);
console.log("type of Array " , typeof Array);

// stack implementation using push and pop
arr.push(10);
console.log("arr = " , arr);
arr.push(30);
console.log("arr = " , arr);
arr.pop()
console.log("arr = " , arr);

// Queue implementation using shift and push

arr.shift();
console.log("arr" , arr);
arr.unshift(45)
console.log("arr" , arr);


// Inserting element in middle 
var arr = [10,20,30,40,50];
arr.splice(1)
console.log("arr = " , arr)


var arr = [10,20,30,40,50];
arr.splice(1,1)
console.log("arr = " , arr)
// splice(index , 
//count = how many element to delete,
//...newelement )

var arr = [10,20,30,40,50];
arr.splice(1,0,80)
console.log("arr = " , arr)
arr.splice(2,0,100,100,300,400);
console.log("arr = " , arr)

// replace the elements 
var arr = [10,20,30,40,50];
arr.splice(1,2,101,201)
console.log("arr = " , arr)


// traversing  in the arr 
// traditional approach
var arr = [10,20,30,40,50];
for ( let i=0 ; i<arr.length ; i++){
    console.log(`arr[${i}] = ${arr[i]}`);
}


// modern approach 
for ( let i of arr){
    console.log(i);
}

arr.forEach(element =>console.log(element))
arr.forEach((element , index) =>console.log(element , index))
arr.forEach((element , index , array ) =>console.log(element , index , array ))


// searching in array 
arr = [12,4,6,34,65,23,56,89,12,29];
console.log(arr.find(e=> e===65))
console.log(arr.findIndex(e=> e===65))
console.log(arr.find(e=> e===650))
console.log(arr.findIndex(e=> e===650))
console.log(arr.findLastIndex(e=> e===12))

// filter method 
console.log(arr.filter(e=> e===12))

// reduce method 
arr = [10,20,10,30,10,40,89,10,100,90,1000,89,56,74,72,63,93]
const array1 = arr.reduce((accumulator , element , index )=>{
    if ( element === 10){
        const obj = {
            [`${index}`] : element
        }
        accumulator.push(obj)
    }
    return accumulator
} , [])
console.log("Array1 = " , array1)
