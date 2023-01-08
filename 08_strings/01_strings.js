/*
• STRINGS
• Strings are texts, which are under single , double, back-tick quote. 
• To declare a string, we need a variable name, assignment operator, a value under a single quote, double quote, or backtick quote. 
• Let's see some examples of strings:
• 
*/

let space = ' '; // an empty space string
let firstName = 'Arijit';
let lastName = 'Das';
let country = 'INDIA';
let city = 'Kolkata';
let language = 'JavaScript';
let job = 'Developer';
let quote = 'No amount of money ever bought a second of time';
let templateLiterals = `${firstName} ${lastName}`;

console.log(templateLiterals);

/*
• STRING CONCATENATION
• Connecting two or more strings together is called concatenation.
• Using the strings declared in the previous String section:
• 
*/

let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• ESCAPE SEQUENCES IN STRINGS
• In JavaScript and other programming languages \ followed by some characters is an escape sequence.
• Let's see the most common escape characters:

    • \n: new line
    • \t: Tab, means 2/4/8 spaces
    • \\: Back slash
    • \': Single quote (')
    • \": Double quote (")
    • \b: Backspace

*/

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?'); // line break
console.log('Days\tTopics\tExercises');
console.log('Day 1\t3\t5');
console.log('Day 2\t3\t5');
console.log('Day 3\t3\t5');
console.log('Day 4\t3\t5');
console.log('This is a backslash  symbol (\\)'); // To write a backslash
console.log('In every programming language it starts with "Hello, World!"');
console.log("In every programming language it starts with 'Hello, World!'");
console.log("The saying 'Seeing is Believing' isn't correct in 2020");

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• TEMPLATE LITERALS (TEMPLATE STRINGS)
• To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string.
• To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign. See the syntax below.
• 
*/

let myInfo = `Hello, My name is ${firstName} ${lastName}.\nI am from ${city}, ${country}.\nI am a ${language} ${job}`;
console.log(myInfo);

// Using a string template or string interpolation method, we can add expressions, which could be a value,
//     or some operations (comparison, arithmetic operations, ternary operation).

let a = 2;
let b = 3;
console.log(`${a} is greater than ${b} : ${a > b}`);

console.log('------------------------------------------------------------------------------------------------------------------');
