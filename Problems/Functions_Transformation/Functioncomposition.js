var compose = function(functions) {
    return function(x)
    {
    let ans;
    let input = x;
    for (let index = functions.length-1 ; index >= 0 ; index -= 2){
        let output = functions[index](input);
        console.log("output1 = " , output );

        if(index > 0 ){
        output = functions[index-1](output);
        console.log("output2 = " , output );
        }
        ans = output;
        input = ans;
        console.log("ans = " , ans );
    }
    return ans;
}
};

const functions = [x => x + 1, x => x * x, x => 2 * x]
const x = 4;
console.log("compose = " , compose(functions )(x));