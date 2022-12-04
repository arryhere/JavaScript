/*
• find
• find: Return the first element which satisfies the condition
• 
*/

const marks = [100, 90, 33, 56, 72];
const marksLessThan50 = marks.find((e, i, arr) => {
  return e < 50;
});
console.log(marksLessThan50);

console.log('------------------------------------------------------------------------------------------------------------------');

const persons = [
  { name: 'Arijit', surname: 'Das', age: 22 },
  { name: 'Divya', surname: 'Jain', age: 20 },
  { name: 'Haris', surname: 'Ali', age: 25 },
  { name: 'Sunidhi', surname: 'Kaur', age: 21 },
];
const checkPersons = persons.find((e) => e.name === 'Haris');
console.log(checkPersons);

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• findIndex
• findIndex: Return the index of the first element which satisfies the condition
*/

const ages = [24, 22, 25, 32, 35, 18];
const ageCheck = ages.findIndex((e) => {
  return e < 20;
});
console.log(ageCheck);

console.log('------------------------------------------------------------------------------------------------------------------');
