/*
• Object.defineProperty()
*/

const person = {
  name: 'Arijit',
  id: null,
};

Object.defineProperty(person, 'id', {
  value: 1,
  writable: false,
  configurable: true,
  enumerable: true,
});

console.log(person);

console.log(person.id);
person.id = 69;
console.log(person.id);

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• The Object.defineProperty() method can also be used to add Getters and Setters
*/

const employee = {
  firstname: 'Arijit',
  lastname: 'Das',
};

Object.defineProperty(employee, 'id', {
  value: 1,
  writable: true,
});

Object.defineProperty(employee, 'fullname', {
  value: () => {
    return employee.firstname + ' ' + employee.lastname;
  },
});

Object.defineProperty(employee, 'getid', {
  get: function () {
    return this.id;
  },
});
Object.defineProperty(employee, 'setid', {
  set: function (id) {
    this.id = id;
  },
});

console.log(employee);
employee.setid = 69;
console.log(employee.getid);
console.log(employee.fullname());
