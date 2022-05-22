// JavaScript Functions

/*
• So far we have seen many builtin JavaScript functions
• In this section, we will focus on custom functions

• What is a function ? 
• A function is a reusable block of code or programming statements designed to perform a certain task

• A function is declared by a function key word followed by a name, followed by parentheses ()
• A parentheses can take a parameter. If a function take a parameter it will be called with argument
• A function can also take a default parameter
• To store a data to a function, a function has to return certain data types
• To get the value we call or invoke a function
*/

/*
• A function can be declared or created in couple of ways:

• Declaration function
• Expression function
• Anonymous function
• Arrow function
*/

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Function Declaration
// Declaring a function without a parameter

function functionName() {
    // code goes here
}
functionName() // calling function by its name and with parentheses

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Function without a parameter and return
// Function can be declared without a parameter

function square() {
    let num = 2;
    let sq = num * num;
    console.log(sq);
}
square();                              // 4

function addTwoNumbers() {
    let numOne = 10;
    let numTwo = 20;
    let sum = numOne + numTwo;

    console.log(sum)
}
addTwoNumbers()                         //30

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Function returning value
// Function can also return values, if a function does not return values the value of the function is undefined. 
// Let us write the above functions with return. From now on, we return value to a function instead of printing it.

function printFullName() {
    let firstName = 'Arijit';
    let lastName = 'Das';
    let space = ' ';
    let fullName = firstName + space + lastName;
    return fullName;
}
console.log(printFullName());

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Function with one parameter

console.log("Function with one parameter :\n");

function areaOfCircle(r) {
    let area = Math.PI * r ** 2;                    // Exponentiation (ES2016)
    return area;
}
console.log(areaOfCircle(4));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Function with two parameters

console.log("Function with two parameters :\n");

function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(printFullName('Arijit', 'Das'));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Function with many parameters

console.log("Function with many parameters :\n");

function sumArr(arr) {
    let sum = 0;
    for (x of arr) {
        sum += x;
    }
    return sum;
}

console.log(sumArr(new Array(1, 2, 3, 4, 5)));
console.log(sumArr([1, 2, 3, 4, 5, 6]));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Function with unlimited number of parameters
// A function declaration provides a function scoped 'arguments array' like object. 
// Any thing we passed as argument in the function can be accessed from 'arguments object' inside the functions.

console.log("Function with unlimited number of parameters :\n");


function sumAllNums_1() {
    console.log(arguments);
}
sumAllNums_1(1, 2, 3, 4);


function sumAllNums_2() {
    let sum = 0;
    for(x of arguments){
        sum += x;
    }
    return sum;
}
console.log(sumAllNums_2(1, 2, 3, 4));

function sumAllNums_3(...arr) {                     // spread operator followed by any parameter name
    let sum = 0;
    for(x of arr){
        sum += x;
    }
    return sum;
}
console.log(sumAllNums_3(1, 2, 3, 4));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Function with default parameters

console.log("Function with default parameters :\n");

function greet(name = "user") {
    return `Hello ! ${name}, Hope you have a great day.`
}
console.log(greet());
console.log(greet("Nandini"));

console.log("---------------------------------------------------------------------------------------------------------------------------------");