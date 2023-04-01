// CHECKING DATA TYPES AND CASTING

/*
• Checking Data Types

• To check the data type of a certain variable we use the typeof method.
• typeof operator output is a string datatype
*/

let firstName = 'Arijit'; // string
let lastName = 'Das'; // string
let country = 'INDIA'; // string
let city = 'Kolkata'; // string
let age = 69420; // number
let job; // undefined, because a value was not assigned

console.log(typeof 'arijit'); // string
console.log(typeof firstName); // string
console.log(typeof 10); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof NaN); // number
console.log(typeof job); // undefined
console.log(typeof undefined); // undefined
console.log(typeof null); // object

console.log('----------------------------------------------------------------------------------------------------------------------------');

/*
• Changing Data Type (Casting)

• Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str()
• When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.
*/

// Type Conversion -- String
let var1 = 34;
var1 = String(var1);
console.log(var1, typeof var1); // 34 string

let var2 = true;
var2 = String(var2);
console.log(var2, typeof var2); // true string

let var3 = [1, 2, 3, 4, 55];
var3 = String(var3);
console.log(var3, typeof var3); // 1,2,3,4,55 string

let var4 = new Date();
console.log(var4); // 2022-12-04T12:23:17.062Z
console.log(var4.toString()); // Sun Dec 04 2022 17:53:17 GMT+0530 (India Standard Time)

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Type Conversion -- Number
let var5 = '420';
var5 = Number(var5);
console.log(var5, typeof var5); // 420 number

let var6 = '420ff';
var6 = Number(var6);
console.log(var6, typeof var6); // NaN number

let var7 = true;
var7 = Number(var7);
console.log(var7, typeof var7); // 1 number

let var8 = false;
var8 = Number(var8);
console.log(var8, typeof var8); // 0 number

let var9 = [1, 2, 3, 4, 554];
var9 = Number(var9);
console.log(var9, typeof var9); // NaN number

let var10 = '12.44';
var10 = Number(var10);
console.log(var10, typeof var10); // 12.44 number

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Type Conversion -- parseInt() parseFloat()
let var11 = '12';
var11 = parseInt(var11);
console.log(var11, typeof var11); // 12 number

let var12 = '12.99';
var12 = parseInt(var12);
console.log(var12, typeof var12); // 12 number

let var13 = '12.99';
var13 = parseFloat(var13);
console.log(var13, typeof var13); // 12.99 number

var13 = parseInt(var13);
console.log(var13, typeof var13); // 12 number

console.log('----------------------------------------------------------------------------------------------------------------------------');

// output rounding
let var14 = '12.456';
var14 = parseFloat(var14);
console.log(var14.toPrecision(20), typeof var14); // 12.455999999999999517 number
console.log(var14.toFixed(20), typeof var14); // 12.45599999999999951683 number

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Type coercion
// Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on)

let str = '455';
str = Number('455');
let n = 44;
console.log(str + n); // 499

console.log('----------------------------------------------------------------------------------------------------------------------------');
