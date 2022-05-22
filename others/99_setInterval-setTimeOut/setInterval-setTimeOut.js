// setTimeout --> Alllows us to run the function once after the interval of time
// clearTimeout --> Alllows us to run the function repeatedly after the interval of time


// function greet(name,age){
//     console.log(`Good Morning ! ${name} ${age}`);
// }
// greet("mohit",23);

// setTimeout(greet, 5000, "rahul", 33);

// let x = setTimeout(greet, 5000, "rahul", 33);
// console.log(x);
// clearTimeout(x);

console.log("-------------------------------------------------------------------------------");

// setInterval(greet, 1000, "rohit", 45);

// intervalId = setInterval(greet, 1000, "rohit", 45);
// clearInterval(intervalId);

console.log("-------------------------------------------------------------------------------");

function displayTime(){
    let time = new Date();
    console.log(time);
    document.getElementById("time").innerHTML = time;
}
setInterval(displayTime, 1000);