/*
• Function.prototype.bind()

• Bind an object to a function
• Reference it using this

• The bind() method creates a new function that, when called, has its this keyword set to the provided value
• with a given sequence of arguments preceding any provided when the new function is called
*/

let o1 = {
  x: 5,
  y: 5,
};

let o2 = {
  x: 55,
  y: 65,
};

function print() {
  console.log(this.x + ' ' + this.y);
}

print.bind(o1)();
print.bind(o2)();

console.log('------------------------------------------------------------------------------------------------------------------');
