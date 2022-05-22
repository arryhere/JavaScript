/*
• Array.from()
• Array.from() method returns an array from any object with a length property
• Array.from() method returns an array from any iterable object
• Syntax : Array.from(object, mapFunction, thisValue)
• 
*/

const str = "Arijit Das";
const resultStr = Array.from(str);
console.log(resultStr);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

const numbers = "12345";

const mapFunc = (e) => {return Number(e)};
const resultNum = Array.from(numbers, mapFunc);

console.log(resultNum);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

const num = [1,2,3,4,5,3,4,5,9,8,33,2];
const set = new Set(num);
console.log(set);

const new_num = Array.from(set);
console.log(new_num);

console.log("---------------------------------------------------------------------------------------------------------------------------------");