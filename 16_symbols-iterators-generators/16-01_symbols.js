/*
• Symbol
• 
*/

const sym1 = Symbol('foo');
const sym2 = Symbol('foo');
console.log(sym1, typeof sym1);
console.log(sym1 === sym2);