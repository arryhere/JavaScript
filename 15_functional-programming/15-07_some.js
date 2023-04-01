/*
• some
• some: Check if some of the elements are similar in one aspect. It returns boolean
*/

const person = [
  { name: 'Arijit', age: 22 },
  { name: 'Divya', age: 20 },
  { name: 'Haris', age: 18 },
  { name: 'Vivek', age: 11 },
];
const personAgeCheck = person.some((e, i, arr) => {
  return e.age >= 18;
});
console.log(personAgeCheck);

console.log('----------------------------------------------------------------------------------------------------------------------------');

const bools = [true, true, true, false];
const areSomeTrue = bools.some((b) => b === false);
console.log(areSomeTrue);

console.log('----------------------------------------------------------------------------------------------------------------------------');
