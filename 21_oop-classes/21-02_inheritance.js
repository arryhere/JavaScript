/*
• Inheritance
• Using inheritance we can access all the properties and the methods of the parent class
• This reduces repetition of code
*/

class Person {
    demo = 22;
    constructor(firstName = 'user', lastName = 'user', age = 0, country = 'default', city = 'default') {           // this : Person
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
    }
    getFullName() { return `${this.firstName} ${this.lastName}` };

    get FullName() { return `${this.firstName} ${this.lastName}` };

    set FullName(fullName) {
        let arr = fullName.trim().split(/\s+/gi, 2);
        this.firstName = arr[0];
        this.lastName = arr[1];
    }

    get PersonInfo() { return `Hello my name is ${this.firstName} ${this.lastName}. I am ${this.age} years old. I live in ${this.country}, ${this.city}` }

    static showDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.toLocaleString('default', { month: 'long' });
        const _date = date.getDate();
        const day = date.toLocaleString('default', { weekday: 'long' });

        let result = `${_date}-${day}-${month}-${year}`;
        return result;

    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, country, city, gender = 'default') {
        super(firstName, lastName, age, country, city);                             // super
        this.gender = gender
    }

    get FullName() { return `${super.FullName}, i am ${this.age} yrs old.` }        // overriding method
}

let employee_1 = new Employee('Divya', 'Jain', 22, 'India', 'Delhi', 'female');
let employee_2 = new Employee();

console.log(employee_1);
console.log(employee_2);

console.log(employee_1.FullName);
console.log(employee_1.PersonInfo);