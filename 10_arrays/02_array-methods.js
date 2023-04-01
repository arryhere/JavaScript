/*
• Array Methods
• There are different methods to manipulate an array. These are some of the available methods to deal with arrays:

• new Array()
• new Array(10).fill()
• arr.concat()
• arr.length
• arr.indexOf()
• arr.lastIndexOf()
• arr.includes()
• Array.isArray(arr)
• arr.toString()
• arr.join()
• arr.slice(0)
• arr.splice(1,1)
• arr.push() - arr.pop()
• arr.shift()
• arr.unshift(2)
• arr.reverse()
• arr.sort()
• arr.flat()
• Array.from()
• delete property
*/

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Array Constructor

console.log('array-constructor :\n');

const arr1 = new Array(); // creates an an empty array
console.log(arr1);

const arr2 = new Array(10); // it creates ten empty values
console.log(arr2);

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Creating static values with fill

console.log('creating-static-values-with-fill :\n');

const arr3 = new Array(10).fill('x');
const arr4 = new Array(10).fill(420);

console.log(arr3);
console.log(arr4);

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Concatenating array using concat
// Returns a new array

console.log('concat :\n');

const arr5 = [1, 2, 3];
const arr6 = [1, 5, 6];
const arr7 = arr6.concat(arr5, [44, 55, 66]);

console.log(arr7);

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Getting array length
// length: To know the size of the array

console.log('length :\n');

const arr8 = [1, 2, 3, 4, 5];
console.log(arr8.length);

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Getting index of an element in arr array
// indexOf: To check if an item exist in an array. If it exists it returns the index else it returns -1.

console.log('index-of-element :\n');

const arr9 = [22, 33, 44, 55, 66, 'Rahul', true];
console.log(arr9.indexOf(66));
console.log(arr9.indexOf(true));
console.log(arr9.indexOf('rahul')); // -1 , element does not exist in array

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Getting last index of an element in array
// lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

console.log('last-index-of-element :\n');

const arr10 = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(arr10.lastIndexOf(2)); // 7
console.log(arr10.lastIndexOf(0)); // -1
console.log(arr10.lastIndexOf(1)); // 6
console.log(arr10.lastIndexOf(4)); // 3
console.log(arr10.lastIndexOf(6)); // -1

console.log('----------------------------------------------------------------------------------------------------------------------------');

// includes
// To check if an item exist in an array. If it exist it returns the true else it returns false.

console.log('includes :\n');

const arr11 = [1, 2, 3, 4, 5];
console.log(arr11.includes(22));
console.log(arr11.includes(2));
console.log(arr11.includes(5));

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Checking array
// Array.isArray: To check if the data type is an array

console.log('checking-array :\n');

const arr12 = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr12));

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Converting array to string
// toString:Converts array to string

console.log('toString :\n');

const arr13 = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
console.log(arr13.toString());

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Joining array elements
// join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string.
// By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

console.log('join :\n');

const arr14 = ['arijit', 'vivek', 'sunidhi', 'divya'];
console.log(arr14.join()); //, is by default
console.log(arr14.join(''));
console.log(arr14.join(' '));
console.log(arr14.join(', '));
console.log(arr14.join(' # '));

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Slice array elements
// slice: To cut out a multiple items in range. It takes two parameters: starting(inclusive) and ending position(exclusive).
// It doesn't include the ending position.

console.log('slice :\n');

const arr15 = ['arijit', 'vivek', 'sunidhi', 'divya'];
console.log(arr15.slice(0));
console.log(arr15.slice(0, 2));
console.log(arr15.slice(0, 99));
console.log(arr15.slice(0, 0));

console.log(arr15);

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Splice method in array
// splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

console.log('splice :\n');

const arr16 = [1, 2, 3, 4, 5, 6];

console.log(arr16.splice(1, 1));
// console.log(arr16.splice(1,2));
// console.log(arr16.splice(1,2,44,55,66,77,88,99));

console.log(arr16);

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Push Pop
// push: adding item in the end.
// pop: removing item in the end.

console.log('push-pop :\n');

let arr17 = ['banana', 'orange', 'mango', 'lemon'];

arr17.push('guave');
arr17.push('water-melon');

arr17.pop();

console.log(arr17);

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Removing an element from the beginning
// shift: Removing one array element in the beginning of the array.

console.log('shift-unshift :\n');

const arr18 = [1, 2, 3, 4, 5];
arr18.shift();
arr18.shift();
console.log(arr18);

// Add an element from the beginning
// unshift: Adding array element in the beginning of the array.

arr18.unshift(2);
arr18.unshift(1);
console.log(arr18);

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Reversing array order
// reverse: reverse the order of an array.

console.log('reverse :\n');

const arr19 = [1, 2, 3, 4, 5];

arr19.reverse();
console.log(arr19); // [ 5, 4, 3, 2, 1 ]

arr19.reverse();
console.log(arr19); // [ 1, 2, 3, 4, 5 ]

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Sorting elements in array
// sort: arrange array elements in ascending order alphabetically
// Sort takes a call back function, we will see how we use sort with a call back function in the upcoming sections.

console.log('sort :\n');

const arr20 = [1, false, 2, 3, 4, 'rahul', 5, 55, 7, 745, 9, 0, 10, true, 'arijit'];

arr20.sort();
console.log(arr20); // [0, 1, 10, 2, 3, 4, 5, 5, 7, 745, 9, 'arijit', false, 'rahul' true]

console.log('----------------------------------------------------------------------------------------------------------------------------');

// arr.flat([depth])
// arr.flat() method was introduced in ES2019
// It is used to flatten an array, to reduce the nesting of an array

console.log('flat :\n');

let arr21 = [1, [2, [3, [4, [5]]]]];
console.log(arr21); // [ 1, [ 2, [ 3, [Array] ] ] ]

arr21 = arr21.flat(Infinity);
console.log(arr21); // [ 1, 2, 3, 4, 5 ]

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Array.from()
// make array from any objects : set, map, iterator

console.log('from :\n');

let set = new Set([1, 2, 3, 4, 5, 5]);
console.log(set); // Set(5) { 1, 2, 3, 4, 5 }

let arr22 = Array.from(set);
console.log(arr22); // [ 1, 2, 3, 4, 5 ]

console.log('----------------------------------------------------------------------------------------------------------------------------');

// delete property
// The JavaScript delete operator removes a property from an object
// If no more references to the same property are held, it is eventually released automatically

console.log('delete :\n');

const arr23 = [1, 2, 3, 4, 5];
console.log(arr23); // [ 1, 2, 3, 4, 5 ]

delete arr23[0];
console.log(arr23); // [ <1 empty item>, 2, 3, 4, 5 ]

console.log('----------------------------------------------------------------------------------------------------------------------------');
