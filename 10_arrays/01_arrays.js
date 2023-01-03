// ARRAYS

/*
In contrast to variables, an array can store multiple values. 
Each value in an array has an index, and each index has a reference in a memory address. 
Each value can be accessed by using their indexes. 
The index of an array starts from zero, and the index of the last element is less by one from the length of the array.

An array is a collection of different data types which are ordered and changeable(modifiable). 
An array allows storing duplicate elements and different data types. 
An array can be empty, or it may have different data type values.
*/

console.log('------------------------------------------------------------------------------------------------------------------');

//Create an array

console.log('create-an-array :\n');

const arr1 = new Array(12, 13, 14, 44); // Using Array constructor
console.log(arr1);

const arr2 = [23, 33, 44, 54, 623]; // Using square brackets []
console.log(arr2);

console.log('------------------------------------------------------------------------------------------------------------------');

//Array Properties

console.log('array-properties :\n');

const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Tailwind', 'NodeJS', 'MongDB']; // array of strings, web technologies
const countries = ['India', 'Denmark', 'Sweden', 'Norway', 'Iceland']; // array of strings, countries

webTechs[webTechs.length - 1] = 'MySQL';
console.log(webTechs);
console.log(countries[0]);

const mixedArray = ['Arijit', 22, 'India', true, { job: 'Developer', hobby: 'Gaming' }, [28, 05, 1999]];
console.log(mixedArray);
console.log(mixedArray[4].job);
console.log(mixedArray[5][0]);

console.log('------------------------------------------------------------------------------------------------------------------');

// Array of arrays

const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];

const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3],
];
console.log(arrayOfArray[0]); // [1, 2, 3]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = [frontEnd, backEnd];
console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length); // 2
console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]

console.log('------------------------------------------------------------------------------------------------------------------');

// Copy an array
// a and b have their own references and are not equal

let a = [1, 2, 3, 4, 5];

let b = a.map((e) => e); // more on map later...

console.log(a, b);

a.push(44);

console.log(a, b);

console.log('------------------------------------------------------------------------------------------------------------------');
