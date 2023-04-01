/*
• Classes

• JavaScript is an object oriented programming language
• Everything in JavScript is an object, with its properties and methods
• We create class to create an object
• A Class is like an object constructor, or a "blueprint" for creating objects
• We instantiate a class to create an object
• The class defines attributes and the behavior of the object, while the object, on the other hand, represents the class

• Class Constructor

• The constructor is a builtin function which allows as to create a blueprint for our object
• The constructor function starts with a keyword constructor followed by a parenthesis
• Inside the parenthesis we pass the properties of the object as parameter
• We use the this keyword to attach the constructor parameters with the class
• 
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



let person = new Person();                                          // will take default constructor values
console.log(person);
console.log(person.a);

let arijit = new Person('Arijit', 'Das', 22, 'India', 'Kolkata');   // constructor values supplied
console.log(arijit);

arijit.age = 33;                                                    // can overwrite data
console.log(arijit.age);

console.log(arijit.getFullName());


console.log('----------------------------------------------------------------------------------------------------------------------------');


/*
• getter
• The get method allow us to access value from the object
• Instead of accessing properties directly from the object we use getter to get the value
*/

console.log(arijit.FullName);

/*
• setter
• The setter method allow us to modify the value of certain properties
• We write a setter method using keyword set followed by a function
*/

arijit.FullName = 'Arry Das Jain';
console.log(arijit.FullName);


console.log('----------------------------------------------------------------------------------------------------------------------------');


console.log(arijit.PersonInfo);


console.log('----------------------------------------------------------------------------------------------------------------------------');


/*
• Static method

• The static keyword defines a static method for a class
• Static methods are not called on instances of the class
• Instead, they are called on the class itself
• These are often utility functions, such as functions to create or clone objects
• 
*/

console.log(Person.showDate());