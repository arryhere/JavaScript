
/*
• DECIMAL

• Note that decimal literals can start with a zero (0) followed by another decimal digit,
• but If all digits after the leading 0 are smaller than 8, the number is interpreted as an octal number
• 
*/

console.log(0888);            // 888 parsed as decimal
console.log(0777);            // parsed as octal, 511 in decimal

console.log('----------------------------------------------------------------------------------------------------------------------------');

/*
• EXPONENTIAL

• The decimal exponential literal is specified by the following format: beN
• b is a base number (integer or floating)
• e char (which serves as separator or exponent indicator)
• N  is exponent or power number
• a signed integer (as per 2019 ECMA-262 specs)
*/

console.log(0e-5);
console.log(0e+5);
console.log(5e1);
console.log(175e-2);
console.log(1e-3);

console.log('----------------------------------------------------------------------------------------------------------------------------');

/*
• BINARY

• Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" (0b or 0B)
• If the digits after the 0b are not 0 or 1, the following SyntaxError is thrown
• this syntax is new in ECMAScript 2015
*/

let a = 6;
let b = -6;
console.log((a >>> 0).toString(2));
console.log((b >>> 0).toString(2));             // unsigned right shift

let c = 0b11111111111111111111111111111010;     // -6
console.log(c);                                 // unsigned
console.log(c | 0);                             // signed; as bitwise operation is done on signed bits

console.log('----------------------------------------------------------------------------------------------------------------------------');

/*
• OCTAL

• Octal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "O" (0o or 0O)
• If the digits after the 0o are outside the range (01234567), SyntaxError is thrown
*/

let d = 0o755;
let e = 0o765;

console.log(d.toString(8));
console.log(e.toString(8));

b = -63;
console.log((b).toString(8));
console.log((-0o77));

console.log('----------------------------------------------------------------------------------------------------------------------------');

/*
• HEXADECIMAL

• Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "X" (0x or 0X)
• If the digits after 0x are outside the range (0123456789ABCDEF), SyntaxError is thrown
*/

let f = 0x123456789ABCDEF;
console.log(f);
console.log(f.toString(16));

let g = 555;
console.log(g.toString(16));
console.log(0x22b);