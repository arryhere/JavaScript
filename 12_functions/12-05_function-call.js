/*
• Function.prototype.call()

• The call() method calls a function with a given 'this' value and arguments provided individually
• The call() allows for a function/method belonging to one object to be assigned and called for a different object
• call(thisArg, arg1, ... , argN)
*/

function fruit(name, price) {
  this.name = name;
  this.price = price;
}

function vegetable(name, price, taste) {
  fruit.call(this, name, price);
  this.taste = taste;
}

console.log(new vegetable('cabbage', 150, 'bad'));

console.log('------------------------------------------------------------------------------------------------------------------');

const info = {
  getInfo: function (gender, age) {
    return `${this.firstName} ${this.lastName} ${gender} ${age}`;
  },
};
const arijit = {
  firstName: 'Arijit',
  lastName: 'Das',
};
console.log(info.getInfo.call(arijit, 'male', 22));

console.log('------------------------------------------------------------------------------------------------------------------');
