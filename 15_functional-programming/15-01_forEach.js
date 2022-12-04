/*
• forEach

• forEach: Iterate an array elements
• We use forEach only with arrays
• It takes a callback function with elements, index parameter and array itself
• The index and the array optional
*/
let arr = [1, 2, 3, 4, 5];

arr.forEach(function (element, index, arr) {
  console.log(index, element, arr);
});
console.log();

// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr);
});
console.log();

// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr));

console.log('------------------------------------------------------------------------------------------------------------------');

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach((element) => {
  console.log(element);
  sum += element;
});
console.log(sum);

console.log('------------------------------------------------------------------------------------------------------------------');

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
countries.forEach((element, index, array) => {
  array[index] = element.toUpperCase();
});
console.log(countries);

console.log('------------------------------------------------------------------------------------------------------------------');
