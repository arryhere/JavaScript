// Logical Operators
// The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation). 
// The && operator gets true only if the two operands are true. 
// The || operator gets true either of the operand is true. The ! operator negates true to false and false to true.

// JavaScript Logical Operators
// Operator	    Description
// &&	        logical and
// ||	        logical or
// !	        logical not

// && ampersand operator example
const check = 4 > 3 && 10 > 5;          // true && true -> true
const check2 = 4 > 3 && 10 < 5;         // true && false -> false
const check3 = 4 < 3 && 10 < 5;         // false && false -> false

// || pipe or operator, example
const check4 = 4 > 3 || 10 > 5;         // true  || true -> true
const check5 = 4 > 3 || 10 < 5;         // true  || false -> true
const check6 = 4 < 3 || 10 < 5;         // false || false -> false

//! Negation examples
let check7 = 4 > 3;                     // true
let check8 = !(4 > 3);                  //  false
let isLightOn = true;
let isLightOff = !isLightOn;            // false
let isMarried = !false;                 // true