/*
• JavaScript Bitwise Operators
• avaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers
• Before a bitwise operation is performed, JavaScript converts numbers to "32 bits signed integers"
• After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers

    Operator	Description	            Example	        Same as	        Result	    Decimal
    &	        AND	                    5 & 1	        0101 & 0001	    0001	    1
    |	        OR	                    5 | 1	        0101 | 0001	    0101	    5
    ~	        NOT	                    ~ 5	            ~0101	        1010	    10 (*)
    ^	        XOR	                    5 ^ 1	        0101 ^ 0001	    0100	    4
    <<	        left shift	            5 << 1	        0101 << 1	    1010	    10
    >>	        right shift	            5 >> 1	        0101 >> 1	    0010	    2
    >>>	        unsigned right shift	5 >>> 1	        0101 >>> 1	    0010	    2


• The operands are converted to 32-bit signed integers and expressed by a series of bits (zeroes and ones)
• Numbers with more than 32 bits get their most significant bits discarded

    Before: 11100110111110100000000000000110000000000001
    After:              10100000000000000110000000000001

• (*)   
    The examples above uses 4 bits unsigned binary numbers. Because of this ~ 5 returns 10
    Since JavaScript uses 32 bits signed integers, it will not return 10. It will return -6
    00000000000000000000000000000101 (5)
    11111111111111111111111111111010 (~5 = -6)
    A signed integer uses the leftmost bit (MSB - Most Significant Bit) as the minus sign
*/

let x = 1; // ...0001 -- (63 0's)(1)       -- 64bit
let y = 2; // ...0010 -- (62 0's)(1)(0)    -- 64bit
let z = 10;
console.log(z.toString(2));
console.log(parseInt('1010', 2));

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• Bitwise AND (&)
• The bitwise AND operator (&) returns a 1 in each bit position for which the corresponding bits of both operands are 1s
*/

let a = 5; // 00000000000000000000000000000101
let b = 3; // 00000000000000000000000000000011

console.log(a & b); // 00000000000000000000000000000001     // expected output: 1

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• Bitwise OR (|)
• The bitwise OR operator (|) returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s
*/

a = 5; // 00000000000000000000000000000101
b = 3; // 00000000000000000000000000000011

console.log(a | b); // 00000000000000000000000000000111     // expected output: 7

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• Bitwise XOR (^)
• The bitwise XOR operator (^) returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s
*/

a = 5; // 00000000000000000000000000000101
b = 3; // 00000000000000000000000000000011

console.log(a ^ b); // 00000000000000000000000000000110     // expected output: 6

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• Bitwise NOT (~)
• The bitwise NOT operator (~) inverts the bits of its operand. 
• Like other bitwise operators, it converts the operand to a 32-bit signed integer
*/

a = 5; // 00000000000000000000000000000101
b = -3; // 11111111111111111111111111111101

console.log(~a); // 11111111111111111111111111111010        // expected output: -6

console.log(~b); // 00000000000000000000000000000010        // expected output: 2

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• Left shift (<<)
• The left shift operator (<<) shifts the first operand the specified number of bits to the left
• Excess bits shifted off to the left are discarded
• Zero bits are shifted in from the right
*/

a = 5; // 00000000000000000000000000000101
b = 2; // 00000000000000000000000000000010

console.log(a << b); // 00000000000000000000000000010100        // expected output: 20

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• Right shift (>>)
• The right shift operator (>>) shifts the first operand the specified number of bits to the right
• Excess bits shifted off to the right are discarded
• Copies of the leftmost bit are shifted in from the left
• Since the new leftmost bit has the same value as the previous leftmost bit, the sign bit (the leftmost bit) does not change
• Hence the name "sign-propagating"
*/

a = 5; //  00000000000000000000000000000101
b = 2; //  00000000000000000000000000000010
let c = -5; //  11111111111111111111111111111011

console.log(a >> b); //  00000000000000000000000000000001        // expected output: 1

console.log(c >> b); //  11111111111111111111111111111110       // expected output: -2

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• Unsigned right shift (>>>)
• The unsigned right shift operator (>>>) (zero-fill right shift) shifts the first operand the specified number of bits to the right
• 
*/

a = 5; //  00000000000000000000000000000101
b = 2; //  00000000000000000000000000000010
c = -5; //  11111111111111111111111111111011

console.log(a >>> b); //  00000000000000000000000000000001      // expected output: 1

console.log(c >>> b); //  00111111111111111111111111111110      // expected output: 1073741822

console.log('------------------------------------------------------------------------------------------------------------------');
