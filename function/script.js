function sum (a,b){
    const sum = a + b;
}


const a=10;
const b = 20;
//sum(a, b);
console.log('The sum is:',sum(a, b));

const c=1;
const d = 2;
//sum(a, b);
console.log('The sum is:',sum(c, d));

//it does not support function hoisting 
//a function without name is called anonymous function
//console.log('square is',square(10));  //script.js:18  Uncaught ReferenceError: Cannot access 'square' before initialization
const square = function (num) {
return num * num;
}
//nested function
function addsquares(a,b){
    const sq_a=sqaure(a);
    const sq_b=square(b);
    function square(x){
        return x * x;
    }
    return sq_a + sq_b;
}
console.log('addsquares is', addsquares(2,3));
