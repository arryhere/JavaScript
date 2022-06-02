
function employee(firstname, lastname, age, id, department) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.id = id;
    this.department = department;
    this.country = 'India';
}

employee.prototype.getInfo = function() {return `${this.firstname} ${this.lastname} ${this.age} ${this.id} ${this.department} ${this.country}`};

const arijit = new employee('Arijit', 'Das', 22, 101, 'Computer Science');
console.log(arijit ,arijit.getInfo());



function programmer(firstname, lastname, age, id, department, gender){      // does not get the prototype of employee
    employee.call(this, firstname, lastname, age, id, department);
    this.gender = gender;
}
programmer.prototype = Object.create(employee.prototype);                   // this will inherit the prototype
programmer.prototype.constructor = programmer;                              // set the constructor

const divya = new programmer('Divya', 'Jain', 22, 102, 'Electronics', 'female');
console.log(divya, divya.getInfo());
