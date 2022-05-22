/*
• PRIMITIVE DATATYPES
*/

//string
let name = 'Arijit';
console.log(name + ' ' + typeof(name));

//numbers
let age = 21;
console.log(age + ' ' + typeof(age));

//boolean
let bool = false;
console.log(bool + ' ' + typeof(bool));

//null
let nullVar = null;
console.log(nullVar + ' ' + typeof(nullVar));

//undefined
let undVar = undefined;
console.log(undVar + ' ' + typeof(undVar));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• REFERENCE DATATYPES
*/

//array
let arr = [1,2,3,4,5,'hello',false];
console.log(arr + ' ' + typeof(arr) + ' ' + arr[2]);

//object literals
let obj = {
    arijit : 'male',
    rohan : 'male',
    sunidhi : 'female',
    divya : 'female',
    karthik : 'gay'
}
console.log(obj.arijit + ' ' + typeof(obj.arijit));

//functions
function findName() {
    
}
console.log(findName + ' ' + typeof(findName));

//date
let date = new Date();
console.log(date + ' ' +typeof(date));

console.log("---------------------------------------------------------------------------------------------------------------------------------");
