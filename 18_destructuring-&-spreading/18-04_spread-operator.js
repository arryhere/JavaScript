/*
• Spread or Rest Operator
• When we destructure an array we use the spread operator(...) to get the rest elements as array
• In addition to that we use spread operator to spread array elements to another array
• 
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, , ...rest] = nums;

console.log(num1, num2, num3, rest);

console.log('------------------------------------------------------------------------------------------------------------------');

// Spread operator to copy array

const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds].sort((a, b) => {
  return a - b;
});

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);

console.log('------------------------------------------------------------------------------------------------------------------');

// Spread operator to copy object

const user = {
  name: 'Arijit',
  title: 'Programmer',
  country: 'India',
  city: 'Kolkata',
};

const copiedUser = { ...user };
const copiedUser2 = { ...user, name: 'Divya', title: 'Writer' }; // Modifying or changing the object while copying

console.log(copiedUser);
console.log(copiedUser2);
console.log(copiedUser === user); //false : own references

console.log('------------------------------------------------------------------------------------------------------------------');

// Spread operator with arrow function

const sum = (...args) => {
  let sum = 0;
  for (const x of args) {
    sum += x;
  }
  return sum;
};

console.log(sum(22, 22, 22));

console.log('------------------------------------------------------------------------------------------------------------------');
