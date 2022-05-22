/*
• Arrow Function
• Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences
• Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function
• Arrow function has its own scope , so this. keyword will not work as intended
*/

console.log("---------------------------------------------------------------------------------------------------------------------------------");

let square = n => {
    return n ** 2;
}
console.log(square(33));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

const changeToUpperCase = arr => {
    arr.forEach((element, index, array) => {
        array[index] = element.toUpperCase();
    });
}
const names = ['arijit', 'rohan', 'sunidhi', 'divya'];
changeToUpperCase(names);
console.log(names);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

const printFullName = (firstName = 'user', lastName = 'user') => {
    return `${firstName} ${lastName}`;
}

console.log(printFullName());
console.log(printFullName('Arijit', 'Das'));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

let sum = (...arr) => {             // spread operator followed by any parameter name
    let sum = 0;    
    for(x of arr){
        sum += x;
    }
    return sum;
}
console.log(sum(1,2,3,4,5));

console.log("---------------------------------------------------------------------------------------------------------------------------------");