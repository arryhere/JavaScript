/*
• JavaScript Arrays
• In contrast to variables, an array can store multiple values. 
• Each value in an array has an index, and each index has a reference in a memory address. 
• Each value can be accessed by using their index. 
• The index of an array starts from zero, and the index of the last element is less by one from the length of the array.

• An array is a collection of different data types which are ordered and changeable(modifiable). 
• An array allows storing duplicate elements and different data types. 
• An array can be empty, or it may have different data type values.
*/

console.log('----------------------------------------------------------------------------------------------------------------------------');

/* Create an array */

/* using array constructor */
const arr1 = new Array(12, 13, 14, 44); // [ 12, 13, 14, 44 ]
console.log(arr1);

/* using square brackets [] */
const arr2 = [23, 33, 44, 54, 623]; // [ 23, 33, 44, 54, 623 ]
console.log(arr2);

console.log('----------------------------------------------------------------------------------------------------------------------------');

/* Array Indexing */

const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Tailwind', 'NodeJS', 'MongDB'];
const countries = ['India', 'Denmark', 'Sweden', 'Norway', 'Iceland'];

webTechs[webTechs.length - 1] = 'MySQL';
console.log(webTechs); // ['HTML', 'CSS', 'JS', 'React', 'Tailwind', 'NodeJS', 'MySQL']
console.log(countries[0]); // India

const mixedArray = ['Arijit', 22, 'India', true, { job: 'Developer', hobby: 'Gaming' }, [28, 05, 1999]];
console.log(mixedArray); // ['Arijit', 22, 'India', true, { job: 'Developer', hobby: 'Gaming' }, [28, 5, 1999]]
console.log(mixedArray[4].job); // Developer
console.log(mixedArray[5][0]); // 28

console.log('----------------------------------------------------------------------------------------------------------------------------');

/* Array of arrays */

const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];
const arrayOfArray = [firstNums, secondNums];
console.log(arrayOfArray); // [ [ 1, 2, 3 ], [ 1, 4, 9 ] ]
console.log(arrayOfArray[0]); // [ 1, 2, 3 ]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = [frontEnd, backEnd];
console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length); // 2
console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]

console.log('----------------------------------------------------------------------------------------------------------------------------');

/*
• Array object memeory reference
*/

/* both a and b have same reference in memory */
const a = [1, 2, 3, 4, 5];
const b = a;
b[0] = 'one';
console.log(a); // [ 'one', 2, 3, 4, 5 ]
console.log(b); // [ 'one', 2, 3, 4, 5 ]

/* both c and d have different reference in memory */
const c = [1, 2, 3, 4, 5];
const d = [...c]; // deep copy by array destructuring
d[0] = 'one';
console.log(c); // [ 1, 2, 3, 4, 5 ]
console.log(d); // [ 'one', 2, 3, 4, 5 ]

console.log('----------------------------------------------------------------------------------------------------------------------------');
