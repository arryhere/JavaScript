// making new objects using functions

const makeObject = (firstname, lastname, age, id) => {
    const obj = new Object();
    obj.firstname = firstname;
    obj.lastname = lastname;
    obj.age = age;
    obj.id = id;
    obj.getFullName = () => {return `${obj.firstname} ${obj.lastname}`}
    return obj;
}

const a = makeObject('Arijit', 'Das', 22, 101);
console.log(a, a.getFullName());

const b = makeObject('Arijit', 'Das', 22, 101);
console.log(b, b.getFullName());

console.log(a === b);


console.log("---------------------------------------------------------------------------------------------------------------------------------");


// Object Constructors

/*
• What is this?
• In JavaScript, the 'this' keyword refers to an object
• Which object depends on how 'this' is being invoked (used or called)

• The this keyword refers to different objects depending on how it is used
    In an object method, this refers to the object.
    Alone, this refers to the global object.
    In a function, this refers to the global object.
    In a function, in strict mode, this is undefined.
    In an event, this refers to the element that received the event.
    Methods like call(), apply(), and bind() can refer this to any object.

• this is not a variable. It is a keyword. You cannot change the value of this
*/

function employee(firstname, lastname, age, id, department){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.id = id;
    this.department = department;
    this.country = 'India';
    this.getInfo = () => {return `${this.firstname} ${this.lastname} ${this.age} ${this.id} ${this.department} ${this.country}`};
}

const employee_a = new employee('Arijit', 'Das', 22, 101, 'Computer Science');
const employee_b = new employee('Divya', 'Jain', 22, 102, 'Electronics');

employee_a.nationality = 'Indian';
employee_a.getFullName = () => {return `${employee_a.firstname} ${employee_a.lastname}`};

console.log(employee_a);
console.log(employee_a.getFullName());
console.log(employee_a.getInfo());


console.log("---------------------------------------------------------------------------------------------------------------------------------");


/*
Built-in JavaScript Constructors

new String()        -->      A new String object
new Number()        -->      A new Number object
new Boolean()       -->      A new Boolean object
new Object()        -->      A new Object object
new Array()         -->      A new Array object
new RegExp()        -->      A new RegExp object
new Function()      -->      A new Function object
new Date()          -->      A new Date object

*/

/*

No reason to create complex objects. Primitive values are much faster

Use string literals         ""              instead of new String().
Use number literals         50              instead of new Number().
Use boolean literals        true / false    instead of new Boolean().
Use object literals         {}              instead of new Object().
Use array literals          []              instead of new Array().
Use pattern literals        /()/            instead of new RegExp().
Use function expressions    () {}           instead of new Function().

*/