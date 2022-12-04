/*
• JavaScript Callbacks

• A callback is a function passed as an argument to another function
• This technique allows a function to call another function
• A callback function can run after another function has finished
*/

function fucn1(func) {
    console.log('func 1');
    func();
}

function fucn2() {
    console.log('func 2');
}

fucn1(fucn2);


console.log('------------------------------------------------------------------------------------------------------------------');


// Pretend that this response is coming from the server
const students = [
    { name: "Arijit", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
]


function enrollStudent(student, callback) {
    setTimeout(function () {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 5000);
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `${student.name}
`
        });
        console.log("Students have been fetched");
        console.log(str);
    }, 1000);
}

let newStudent = { name: "Sunny", subject: "Python" }
enrollStudent(newStudent, getStudents);
getStudents();