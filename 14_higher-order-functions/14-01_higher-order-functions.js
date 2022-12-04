/*
• Higher Order Function

• Higher order functions are functions which take other function as a parameter or return a function as a value
• The function passed as a parameter is called callback.
*/

/*
• Callback
• A callback is a function which can be passed as parameter to other function
*/

const callback = (x) => {
  // callback function
  return x ** 2;
};

const cube = (callback, x) => {
  // func that takes callback func as input
  return callback(x) * x;
};

console.log(cube(callback, 3));

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• Returning function
• Higher order functions return function as a value​
*/

const func1 = (x) => {
  const func2 = (y) => {
    const func3 = (z) => {
      return x + y + z + 100;
    };
    return func3;
  };
  return func2;
};
console.log(func1(2)(3)(4));

function f1(x, y, z) {
  function f2(y) {
    function f3(z) {
      return x + y + z + 100;
    }
    return f3(z);
  }
  return f2(y);
}
console.log(f1(2, 3, 4));

const numbers = [1, 2, 3, 4, 5, 5];
const sumArray = (arr) => {
  let sum = 0;
  const callback = (elements) => {
    sum = sum + elements;
  };
  arr.forEach(callback);
  return sum;
};
console.log(sumArray(numbers));

console.log('------------------------------------------------------------------------------------------------------------------');
