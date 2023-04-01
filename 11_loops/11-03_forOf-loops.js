// JavaScript For Of

/*
• The JavaScript for of statement loops through the values of an iterable object
• It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more
• We use for of loop for arrays.
• It is very hand way to iterate through an array if we are not interested in the index of each element in the array
*/

// Looping over an Array

console.log('Looping over an Array :\n');

const friends = ['rohan', 'vivek', 'sunidhi', 'divya'];
for (let x of friends) {
  console.log(x);
  x = x + ' - friends';
  console.log(x);
}

console.log(friends);

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Looping over a String

console.log('Looping over a String :\n');

let language = 'JavaScript';

for (let x of language) {
  console.log(x);
}

console.log(
  '---------------------------------------------------------------------------------------------------------------------------------'
);
