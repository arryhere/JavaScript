/*
• CONDITIONALS
• Conditional statements are used for make decisions based on different conditions.
• By default , statements in JavaScript script executed sequentially from top to bottom
• If the processing logic require so, the sequential flow of execution can be altered in two ways:
• Conditional execution: a block of one or more statements will be executed if a certain expression is true
• Repetitive execution: a block of one or more statements will be repetitively executed as long as a certain expression is true
*/

/*
• Conditions can be implementing using the following ways:
• if
• if else
• if else ladder
• switch case
• ternary operator
*/

console.log("---------------------------------------------------------------------------------------------------------------------------------");

//if-else

console.log("if-else\n");

let num = 3
if (num > 0) {
    console.log(`${num} is a positive number`)
}
else {
    console.log(`${num} is a negative number`)          //  3 is a positive number
}

num = -3
if (num > 0) {
    console.log(`${num} is a positive number`)
}
else {
    console.log(`${num} is a negative number`)          //  -3 is a negative number
}

//variable exist check
if (typeof vari === "undefined") {
    console.log("vari undefined");
}
else {
    console.log("vari defined");
}

// if else if else ladder
let weather = 'sunny'
if (weather === 'rainy') {
    console.log('You need a rain coat.')
}
else if (weather === 'cloudy') {
    console.log('It might be cold, you need a jacket.')
}
else if (weather === 'sunny') {
    console.log('Go out freely.')
}
else {
    console.log('No need for rain coat.')
}

console.log("---------------------------------------------------------------------------------------------------------------------------------");

//switch-case

console.log("switch-case\n");

/*
• Switch is an alternative for if else if else else.
• The switch statement starts with a switch keyword followed by a parenthesis and code block.
• Inside the code block we will have different cases.
• Case block runs if the value in the switch statement parenthesis matches with the case value.
• The break statement is to terminate execution so the code execution does not go down after the condition is satisfied.
• The default block runs if all the cases don't satisfy the condition.
*/

// let dayUserInput = prompt('What day is today ?');
// let day = dayUserInput.toLowerCase();

let day = 'sunday';

switch (day) {
    case 'monday':
        console.log('Today is Monday')
        break
    case 'tuesday':
        console.log('Today is Tuesday')
        break
    case 'wednesday':
        console.log('Today is Wednesday')
        break
    case 'thursday':
        console.log('Today is Thursday')
        break
    case 'friday':
        console.log('Today is Friday')
        break
    case 'saturday':
        console.log('Today is Saturday')
        break
    case 'sunday':
        console.log('Today is Sunday')
        break
    default:
        console.log('It is not a week day.')
}

// let n = prompt('Enter number');
let n = 33;
switch (true) {
    case n > 0:
        console.log('Number is positive');
        break;
    case n == 0:
        console.log('Numbers is zero');
        break;
    case n < 0:
        console.log('Number is negative');
        break;
    default:
        console.log('Entered value was not a number');
}

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Ternary-Operator

console.log("Ternary-Operators\n");

let isRaining = true;

isRaining ? console.log("It's raining today") : console.log("It's not raining today")

console.log("---------------------------------------------------------------------------------------------------------------------------------");
