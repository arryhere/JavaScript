/*
• Asynchronous JavaScript

• Asynchronous actions are the actions that weinitiate now and they finish later.
• Functions running in parallel with other functions are called asynchronous.
• 
*/

setTimeout(() => {
  for (let index = 0; index < 1000; index++) {
    console.log('This is index : ' + index);
  }
}, 100);

console.log('Hello World');
