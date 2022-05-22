/*
• JavaScript Numbers

• JavaScript has only one type of number. Numbers can be written with or without decimals.
• JavaScript Numbers are Always 64-bit Floating Point
• Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc
• JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard
• 
*/

console.log("---------------------------------------------------------------------------------------------------------------------------------");

let x = 3.14;                           // A number with decimals
let y = 3;                              // A number without decimals

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Integer Precision
• Integers (numbers without a period or exponent notation) are accurate up to 15 digits
*/

x = 999999999999999;                    // x will be 999999999999999
y = 9999999999999999;                   // y will be 10000000000000000

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Numeric Strings
• JavaScript will try to convert strings to numbers in all numeric operations
*/

x = "100";
y = "10";
console.log(x-y);
console.log(x+y);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• NaN - Not a Number

• NaN is a JavaScript reserved word indicating that a number is not a legal number
• Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)
• NaN is a number: typeof NaN returns number
*/

x = 100 / "Apple";
console.log(x);
console.log(isNaN(x));
console.log(typeof(NaN));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Infinity

• Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number
• Infinity is a number: typeof Infinity returns number
*/

x =  2 / 0;
y = -2/0;
console.log(x,y);
console.log(typeof Infinity, typeof -Infinity);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• MIN_VALUE and MAX_VALUE

• MAX_VALUE returns the largest possible number in JavaScript.
• MIN_VALUE returns the lowest possible number in JavaScript.
*/

x = Number.MAX_VALUE;
y = Number.MIN_VALUE;

console.log(x," ", y);

console.log("---------------------------------------------------------------------------------------------------------------------------------");