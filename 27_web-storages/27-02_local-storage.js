/*
• localStorage - to display the localStorage object

• localStorage.key()            -   to display a data stored in a localStorage. It takes index as a parameter.
• localStorage.length           -   returns the number of data items stored in the Storage object
• localStorage.setItem()        -   to store data in the localStorage. It takes a key and a value parameters.
• localStorage.getItem()        -   to display data stored in the localStorage. It takes a key as a parameter.
• localStorage.removeItem()     -   to remove stored item form a localStorage. It takes key as a parameter.
• localStorage.clear()          -   to remove everything in the local storage
*/

window.localStorage.setItem('first-name', 'Arijit');
localStorage.setItem('last-name', 'Das');
localStorage.setItem('age', 22);

let friends = ['Divya', 'Sunidhi', 'Haris', 'Vivek', 'Sattu'];
localStorage.setItem('friends', JSON.stringify(friends));

let employee = {
  id: 101,
  department: 'Computer Science',
  code: 'wx334f',
};
localStorage.setItem('employee', JSON.stringify(employee));

console.log(localStorage);

console.log('------------------------------------------------------------------------------------------------------------------');

console.log(localStorage.getItem('friends'));
console.log(JSON.parse(localStorage.getItem('friends'))[0]);

console.log(localStorage.getItem('employee'));
console.log(JSON.parse(localStorage.getItem('employee')).code);

console.log('------------------------------------------------------------------------------------------------------------------');

console.log(localStorage.length);

console.log(localStorage.key(0));
console.log(localStorage.key(5));

console.log('------------------------------------------------------------------------------------------------------------------');

localStorage.removeItem('friends');

console.log(localStorage);

localStorage.clear();

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• session storage the same methods as local storage
*/
