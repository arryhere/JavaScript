/*
• PRIMITIVE DATATYPES
• nn bb ss u
*/

// null
let _null = null;
console.log(_null, typeof _null);

// numbers
let _number = 21;
console.log(_number, typeof _number);

// boolean
let _boolean = false; // true or false
console.log(_boolean, typeof _boolean);

// BigInt
let _BigInt = BigInt('444');
console.log(_BigInt, typeof _BigInt);

// string
let _string = 'Arijit';
console.log(_string, typeof _string);

// symbol
let _Symbol = Symbol('symbol');
console.log(_Symbol, typeof _Symbol);

// undefined
let _undefined = undefined;
console.log(_undefined, typeof _undefined);

console.log('----------------------------------------------------------------------------------------------------------------------------');

/*
• REFERENCE DATATYPES
*/

// array
let arr = [1, 2, 3, 4, 5, 'hello', false];
console.log(arr + ' ' + typeof arr + ' ' + arr[2]);

// object literals
let obj = {
  arijit: 'male',
  rohan: 'male',
  sunidhi: 'female',
  divya: 'female',
  karthik: 'gay',
};
console.log(obj.arijit + ' ' + typeof obj.arijit);

// functions
function findName() {}
console.log(findName + ' ' + typeof findName);

// date
let date = new Date();
console.log(date + ' ' + typeof date);

console.log('----------------------------------------------------------------------------------------------------------------------------');
