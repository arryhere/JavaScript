/*
• Object Methods

• There are different methods to manipulate an object.
• Let us see some of the available methods.
*/

console.log('----------------------------------------------------------------------------------------------------------------------------');

/*
• Object.assign :
• To copy an object without modifying the original object
*/

console.log('Object.assign() :\n');

const person = {
  firstName: 'Arijit',
  lastName: 'Das',
  age: 250,
  skills: ['HTML', 'CSS', 'JS'],
  job: 'Developer',
  address: {
    houseNumber: '3, Galaxy Apartments',
    street: 'BJ Road Band Stand, Bandra West',
    city: 'Mumbai ',
    pinCode: 400050,
    state: 'Maharashtra',
    country: 'India',
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} ${this.lastName} and I live in ${this.address.city}, ${this.address.country}. I am ${this.age} years old.`;
  },
};

const copyPerson = Object.assign({}, person);
console.log(copyPerson);

console.log('----------------------------------------------------------------------------------------------------------------------------');

/*
• Object.keys :
• To get the keys or properties of an object as an array
*/

console.log('Object.keys() :\n');

console.log(Object.keys(copyPerson));
console.log(Object.keys(copyPerson.address));

console.log('----------------------------------------------------------------------------------------------------------------------------');

/*
• Object.values :
• To get values of an object as an array
*/

console.log('Object.values() :\n');

console.log(Object.values(copyPerson));
console.log(Object.values(copyPerson.address));

console.log('----------------------------------------------------------------------------------------------------------------------------');

/*
• Object.entries :
• To get the keys and values in an array
*/

console.log('Object.entries() :\n');

console.log(Object.entries(copyPerson));

console.log('----------------------------------------------------------------------------------------------------------------------------');

/*
• hasOwnProperty :
• To check if a specific key or property exist in an object
*/

console.log('Object.hasOwnProperty() :\n');

console.log(copyPerson.hasOwnProperty('address'));
console.log(copyPerson.hasOwnProperty('name'));

console.log('----------------------------------------------------------------------------------------------------------------------------');
