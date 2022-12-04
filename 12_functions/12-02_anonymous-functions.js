/*
• Anonymous Function
• Anonymous function or without name
*/

const anonymousFunc1 = function (name = 'user') {
  console.log(`Hi, ${name}`);
};
anonymousFunc1();

console.log('------------------------------------------------------------------------------------------------------------------');

// Expression Function

// Expression functions are anonymous functions. We create a function without a name and we assign it to a variable.
// To return a value from the function we should call the variable.

const square = function (n) {
  return n * n;
};
console.log(square(2));
