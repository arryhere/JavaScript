/*
• every
• every: Check if all the elements are similar in one aspect
• It returns boolean
*/

const names = ['Arijit', 'Divya', 'Sunidhi', 'Haris'];
const checkName = names.every((e, i, arr) => {
  return typeof e === 'string';
});
console.log(checkName);

// alternate way of doing the same thing, just more lines of code
let b = true;
for (const e of names) {
  if (typeof e === 'string') {
    b = true;
  } else {
    b = false;
    break;
  }
}
console.log(b);

console.log('----------------------------------------------------------------------------------------------------------------------------');

const persons = [
  { name: 'Arijit', surname: 'Das' },
  { name: 'Divya', surname: 'Jain' },
  { name: 'Haris', surname: 'Ali' },
  { surname: 'Kaur' },
];

console.log(persons[3].surname);

const personsCheck = persons.every((e) => {
  return e.name !== undefined;
});
console.log(personsCheck);

console.log('----------------------------------------------------------------------------------------------------------------------------');
