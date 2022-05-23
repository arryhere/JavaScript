/*
• Destructuring Object
• When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object.
*/

const rectangle = {
    width_rectangle: 20,
    height_rectangle: 10,
    area_rectangle: 200
}

let { width_rectangle, height_rectangle, area_rectangle, perimeter_rectangle } = rectangle;

console.log(width_rectangle, height_rectangle, area_rectangle, perimeter_rectangle);

// Renaming during structuring

let { width_rectangle: w, height_rectangle: h, area_rectangle: a, perimeter_rectangle: p } = rectangle;

console.log(w, h, a, p);

console.log("---------------------------------------------------------------------------------------------------------------------------------");


const triangle = {
    height_triangle: 40,
    base_triangle: 60,
    area_triangle: 1200,
    // perimeter_triangle : 66
}
let { height_triangle, base_triangle, area_triangle, perimeter_triangle = 45 } = triangle;

console.log(height_triangle, base_triangle, area_triangle, perimeter_triangle);


console.log("---------------------------------------------------------------------------------------------------------------------------------");



/*
• Object parameter destructuring
• 
*/

const info = {
    firstname: 'Arijit',
    lastname: 'Das',
    age: 22,
    id: 101
}

const getInfo = (obj) => { return `My name is ${obj.firstname} ${obj.lastname}. I am ${obj.age} years old. My id is ${obj.id}.` };
console.log(getInfo(info));

const getInfo2 = ({ firstname, lastname, age, id }) => { return `My name is ${firstname} ${lastname}. I am ${age} years old. My id is ${id}.` };
console.log(getInfo2(info));


console.log("---------------------------------------------------------------------------------------------------------------------------------");


/*
• Destructuring object during iteration
• 
*/

const todoList = [
    {
        task: 'Prepare JS Test',
        time: '4/1/2020 8:30',
        completed: true
    },
    {
        task: 'Give JS Test',
        time: '4/1/2020 10:00',
        completed: false
    },
    {
        task: 'Assess Test Result',
        time: '4/1/2020 1:00',
        completed: false
    }
];

for (const { task, time, completed } of todoList) {
    console.log(task, time, completed);
}


console.log("---------------------------------------------------------------------------------------------------------------------------------");



