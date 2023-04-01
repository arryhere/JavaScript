/*
• Getting Element

• We can access already created element or elements using JavaScript
• To access or get elements we use different methods
• 
*/

console.log(document.getElementsByTagName("div"));

console.log(document.getElementById("first"));
console.log(document.getElementById("first").className);

console.log(document.getElementsByClassName("child"));

console.log(document.querySelector(".child"));
console.log(document.querySelectorAll(".child"));

console.log('----------------------------------------------------------------------------------------------------------------------------');

let a = document.getElementById("main");
console.log(a.children);
console.log(a.parentElement);
a.style.backgroundColor = 'cyan';

document.getElementById("first").innerText = "My inner text";
document.getElementById("first").innerHTML = "<i>My inner text</i>";

console.log('----------------------------------------------------------------------------------------------------------------------------');

let b = document.getElementsByClassName("container")[0].getElementsByClassName("child");
console.log(b);

Array.from(b).forEach((element) => {                                 //cannot use forEach over html elements, must do Array.from() first
    console.log(element);
    element.style.backgroundColor = "yellow"
});

console.log('----------------------------------------------------------------------------------------------------------------------------');