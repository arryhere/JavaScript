/*
• Object

• Everything can be an object and objects do have properties and properties have values, so an object is a key value pair
• The order of the key is not reserved, or there is no order
• Objects are mutable: They are addressed by reference, not by value
• 
*/

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Creating an empty object

const obj_1 = {};
// const obj_1 = new Object();
console.log(obj_1);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Creating an objecting with values + object methods

const personal_info = {
    first_name: "Arijit",
    last_name: "Das",
    age: 22,
    gender: "Male",
    country: "India",
    state: "West Bengal",
    city: "Kolkata",
    job: "Developer",
    skills: ["HTML", "CSS", "Java Script", "Java", "C", "C++", "Python", "C#", "MongoDB", "Node.js", "React", "Tailwind"],
    getFullName: (greet = "Hello") => {
        return `${greet}, ${personal_info.first_name} ${personal_info.last_name}`;
    },
};

let info = (obj) => {
    return `${obj.first_name} ${obj.last_name}, ${obj.age}, ${obj.gender}, ${obj.country} ${obj.state} ${obj.city}, ${obj["job"]}`
}
console.log(info(personal_info));
console.log(personal_info.getFullName());

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Setting new key for an object

let employee = {
    first_name: "Arijit",
    last_name: "Das",
    age: 22,
    gender: "Male",
    department: "Computer Science",
    employee_id: 101,
    skills: ["Java", "Python", "C", "C++"],
};

console.log(employee);

employee.nationality = "Indian";
employee.country = "India";
employee.state = "West Bengal";

employee.skills.push("Java Script");

employee.getPersonalInfo = () => {
    let fullname = `${employee.first_name} ${employee.last_name}`;
    let skills = [];
    skills = skills.concat(employee.skills);
    let first3Skills = skills.splice(0, 3).join(" - ")
    let statement = `${fullname} -> ${first3Skills}`
    return statement;
}

console.log(employee.getPersonalInfo());

console.log(employee);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// deleting properties
// The delete keyword deletes a property from an object

let marks = {
    Rahul : 44,
    'Arijit' : 44,
    Divya : 55
}

console.log(marks);

delete marks.Arijit;

console.log(marks);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

