/*
• reduce
• 
• reduce: Reduce takes a callback function
• The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value
• It is a good practice to define an initial value for the accumulator value
• If we do not specify this parameter, by default accumulator will get array first value
• If our array is an empty array, then Javascript will throw an error
*/

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);

const concat = numbers.reduceRight((acc, curr) => {
  return '' + acc + curr;
});
console.log(concat);

console.log('------------------------------------------------------------------------------------------------------------------');
