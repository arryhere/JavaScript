/*
• Self Invoking Functions
• Self invoking functions are anonymous functions which do not need to be called to return a value.
*/

(function (n){
    console.log(n**n);
})(9);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

let mul = (function (m){
    return m*m;
})(9);
console.log(mul);