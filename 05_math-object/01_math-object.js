/*
• MATH OBJECT
• In JavaScript the Math Object provides a lots of methods to work with numbers.
• Unlike other objects, the Math object has no constructor.
• The Math object is static.
• All methods and properties can be used without creating a Math object first.
*/

let m = Math;
console.log(m);

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Printing the constants from Math Object
console.log('The value of Math.E is ', Math.E);
console.log('The value of Math.PI is ', Math.PI);
console.log('The value of Math.LN2 is ', Math.LN2);
console.log('The value of Math.SQRT1_2 (sqrt 1/2) is ', Math.SQRT1_2);
console.log('The value of Math.LOG2E is ', Math.LOG2E);

console.log('----------------------------------------------------------------------------------------------------------------------------');

let a = 34.64534;
let b = 89;

console.log('The value of a and b is ', a, b);
console.log('The value of a and b rounded is ', Math.round(a), Math.round(b));

console.log('----------------------------------------------------------------------------------------------------------------------------');

//pow sqrt
console.log('3 raised to the power of 2 is ', Math.pow(3, 2));
console.log('2 raised to the power of 12 is ', Math.pow(2, 12));
console.log('1 raised to the power of 2 is ', Math.pow(1, 2));

console.log('Square root of 36 is ', Math.sqrt(36));
console.log('Square root of 64 is ', Math.sqrt(64));
console.log('Square root of 50 is ', Math.sqrt(50));

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Ceil and floor
console.log('5.8 rounded up to nearest integer is ', Math.ceil(5.8));
console.log('5.8 rounded down to nearest integer is ', Math.floor(5.8));

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Abs function
console.log('Absolute value of 5.66 is  ', Math.abs(5.66));
console.log('Absolute value of -5.66 is  ', Math.abs(-5.66));

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Trinonometric Functions
console.log('The value of sin(pi/2) is ', Math.sin(Math.PI / 2));
console.log('The value of tan(pi/2) is ', Math.tan(Math.PI / 2));
console.log('The value of cos(pi/2) is ', Math.cos(Math.PI / 2));

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Min and max functions
console.log('Minimum value of 4, 5, 6 is ', Math.min(4, 5, 6));
console.log('Minimum value of 14, 5, 16, 1 is ', Math.min(14, 5, 16, 1));
console.log('Maximum value of 4, 5, 6 is ', Math.max(4, 5, 6));
console.log('Maximum value of 14, 5, 16 is ', Math.max(14, 5, 16));

console.log('----------------------------------------------------------------------------------------------------------------------------');

//random no generator
let r = Math.random(); //Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(r);

// Random number b/w (a, b) = a + (b-a)*Math.random()       //[a-b]
let r2 = 1 + (100 - 1) * Math.random();
console.log(r2);

function randomNo(a, b) {
  return (a + (b - a) * Math.random()).toPrecision(2);
}
console.log(randomNo(10, 15)); //10 and 15 both inclusive, !!! toPrecision output string !!!

//proper random function
function getRandomNo(min, max) {
  //min (included) and max (excluded)
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomNo(10, 15));

console.log('----------------------------------------------------------------------------------------------------------------------------');
