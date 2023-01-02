// JavaScript can "display" data in different ways:

// Writing into an HTML element, using innerHTML.
// Writing into the HTML output using document.write().
// Writing into an alert box, using window.alert().
// Writing into the browser console, using console.log().

document.getElementById('demo').innerHTML = 5 + 6;

document.write(5 + 6);

window.alert(5 + 6);
// You can skip the window keyword.
// In JavaScript, the window object is the global scope object, that means that variables, properties, and methods by default belong to the window object.
// This also means that specifying the window keyword is optional:
alert(5 + 6);

console.time('Time took');
console.log(5 + 6);
console.log([2, 33, 4, 22]);
console.log({ name: 'arijit', age: 21 });
console.table({ name: 'arijit', age: 21 });
console.warn('This is a warning!');
// console.clear();
console.assert(44 > 252, 'nopers');
console.error('My error');
console.timeEnd('Time took');

// JavaScript Print
// JavaScript does not have any print object or print methods.
// You cannot access output devices from JavaScript.
// The only exception is that you can call the window.print() method in the browser to print the content of the current window.
