/*
• Scope

• Variable is the fundamental part in programming
• We declare variable to store different data types
• To declare a variable we use the key word var, let and const

• A variable can be declared at different scope
• Variables scopes can be: • Global • Local
• Anything declared without let, var or const is scoped at global level
*/

var str = 'this is a string';
str = 'this is new string';
console.log(str);

let a = 6;
{
  let a = 44;
}
console.log(a);

const b = 'this cannot be changed';
// b = "ss";
console.log(b);

console.log('----------------------------------------------------------------------------------------------------------------------------');

var x = 10; // Here x is 10
{
  var x = 2; // Here x is 2
}
// Here x is 2

let y = 10; // Here y is 10
{
  let y = 2; // Here y is 2
}
// Here y is 10

const x = 10; // Here x is 10
{
  const x = 2; // Here x is 2
}
// Here x is 10

console.log('----------------------------------------------------------------------------------------------------------------------------');
