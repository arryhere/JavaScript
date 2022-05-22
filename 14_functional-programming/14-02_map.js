/*
• map

• map: Iterate an array elements and modify the array elements
• It takes a callback function with elements, index , array parameter and return a new array
• forEach returns undefined, but map always an array which can be array of undefined if nothing is explicitely returned
*/

const numbers = [1,2,3,4,5];
const squareNumbers = numbers.map((element, index, array) => {
    return element * element;
})
console.log(numbers, squareNumbers);


console.log("---------------------------------------------------------------------------------------------------------------------------------");


const names = ['Arijit', 'Divya', 'Sunidhi', 'Ravi', 'Haris'];
const namesUpper = names.map((e,i,arr) => {
    arr[i] = e.toLowerCase();
    return e.toLocaleUpperCase();
})
console.log(names, namesUpper);


console.log("---------------------------------------------------------------------------------------------------------------------------------");


const languages = ['Java', 'Python', 'C', 'C++', 'Java Script', 'C#'];
const cropLanguages = languages.map((e,i,arr) => {
    return e.slice(0,3);
})

console.log(cropLanguages);
