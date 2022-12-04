/*
• Window alert() method
• As you have seen at very beginning alert() method displays an alert box with a specified message and an OK button.
• It is a builtin method and it takes on argument.
• Alert in in-browser JavaScript - Does not return anything
*/
alert('This is alert');

/*
• Window prompt() method
• The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable.
• The prompt() method takes two arguments. The second argument is optional.
• The prompt() method returns a string.
*/
let n = prompt('Enter your name', 'user');
alert('Welcome : ' + n + typeof n);

/*
• Window confirm() method
• The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.
• A confirm box is often used to ask permission from a user to execute something.
• Window confirm() returns boolean, takes a string as an argument. Clicking the OK yields true value, whereas clicking the Cancel button yields false value.
*/
let m = confirm('Do you really want to leave ?');
if (m == true) {
  alert('Bye :( ' + n);
} else {
  alert('Zamn !');
}

console.log(
  '---------------------------------------------------------------------------------------------------------------------------------'
);
