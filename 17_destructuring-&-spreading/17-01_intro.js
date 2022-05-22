/*
• Destructuring and Spread
• Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable
*/

let a, b;
[a, b] = [33, 44];

console.log(a, b);

[a, b, c , ...d] = [1,2,3,4,5,6,7,8,9,9];
console.log(a, b, c, d);

({a, b, ...c} = {a : 34, b : 45, c : 56, d : 76});

console.log(a, b, c);