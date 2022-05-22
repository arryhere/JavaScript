/*
• Setting time

• In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities
    • setInterval
    • setTimeout

*/

/*
• Setting Interval using a setInterval function

• In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time
• The setInterval global method take a callback function and a duration as a parameter
• The duration is in milliseconds and the callback will be always called in that interval of time
*/

const sayHello = () => {
    console.log("Hello !");
}

setInterval(sayHello, 1000)      // it prints hello in every second, 1000ms is 1s

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Setting a time using a setTimeout

• In JavaScript, we use setTimeout higher order function to execute some action at some time in the future
• The setTimeout global method take a callback function and a duration as a parameter
• The duration is in milliseconds and the callback wait for that amount of time
*/

const sayBye = () => {
    console.log("Bye !");
}

setTimeout(sayBye, 5000);

console.log("---------------------------------------------------------------------------------------------------------------------------------");