/*
• Object Prototypes
• All JavaScript objects inherit properties and methods from a prototype
*/

/*
Prototype Inheritance : All JavaScript objects inherit properties and methods from a prototype:

Date objects        inherit from    Date.prototype
Array objects       inherit from    Array.prototype
employee objects    inherit from    employee.prototype

The Object.prototype is on the top of the prototype inheritance chain:
Date objects, Array objects, and employee objects inherit from Object.prototype
*/

function employee(firstname, lastname, age, id, department) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.id = id;
    this.department = department;
    this.country = 'India';
    this.getInfo = () => { return `${this.firstname} ${this.lastname} ${this.age} ${this.id} ${this.department} ${this.country}` };
}

employee.prototype.state = 'Delhi';
employee.prototype.branchInfo = function () {return `${this.department} ${this.id} ${this.state}`};

const employee_a = new employee('Arijit', 'Das', 22, 101, 'Computer Science');
const employee_b = new employee('Divya', 'Jain', 22, 102, 'Electronics');

console.log(employee_a);
console.log(employee_a.state);

employee_a.state = 'Mumbai';

console.log(employee_a.branchInfo());
console.log(employee_b.branchInfo());



