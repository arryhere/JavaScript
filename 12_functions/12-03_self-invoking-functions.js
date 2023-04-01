/*
• Self Invoking Functions
• Self invoking functions are anonymous functions which do not need to be called to return a value.
*/

(function (n) {
  console.log(n ** n); // 27
})(3);

console.log('----------------------------------------------------------------------------------------------------------------------------');

let mul = (function (a, b, c) {
  return a * b * c;
})(2, 3, 4);

console.log(mul); // 24
