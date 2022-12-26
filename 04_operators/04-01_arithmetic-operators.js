// JavaScript Arithmetic Operators
// Arithmetic operators are used to perform arithmetic on numbers:

// Operator	    Description
// +	        Addition
// -	        Subtraction
// *	        Multiplication
// /	        Division
// **	        Exponentiation (ES2016)
// %	        Remainder
// ++	        Increment
// --	        Decrement

let a = 5;
let b = 6;

let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let powerOf = a ** b;
let mod = a % b;
a = a++;
b = b++;

console.log(sum, sub, mul, div.toPrecision(2), powerOf, mod, a, b);
