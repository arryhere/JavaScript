/*
• Destructing Arrays
• 
*/

const numbers = [1, 2, 3, 4, 5, 6];
let [n1, n2, ...n3] = numbers;

console.log(n1, n2, n3);

console.log('------------------------------------------------------------------------------------------------------------------');

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB'],
];
const [frontEnd, backEnd] = fullStack;

console.log(frontEnd);
console.log(backEnd);

console.log('------------------------------------------------------------------------------------------------------------------');

const names = ['Arijit', 'Divya', 'Sunidhi', 'Haris'];
let [name1, , , name4] = names;

console.log(name1, name4);

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• Destructuring during iteration
• 
*/

const info = [
  ['Arijit', 'Das'],
  ['Divya', 'Jain'],
  ['Haris', 'Ali'],
];
for (const [x, y] of info) {
  console.log(x, y);
}

const dev = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB'],
];
for (const [first, second, , forth] of dev) {
  console.log(first, second, forth);
}

console.log('------------------------------------------------------------------------------------------------------------------');
