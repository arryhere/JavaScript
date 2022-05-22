let a = document.getElementById("main");
console.log(a);

let nav = document.getElementById("nav");
console.log(nav);

console.log(nav.innerHTML);

// nav.innerHTML = "<li>Dynamic element</li>"

console.log("-----------------------------------------------------------------");

let containers = document.getElementsByClassName("container")
console.log(containers);

console.log(containers[0]);
console.log(containers[1]);

console.log("-----------------------------------------------------------------");


//If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), 
//use the querySelector()  method

let sel0 = document.querySelector(".container");
console.log("Selector returns : ", sel0);

let sel1 = document.querySelector("#nav>li");
console.log("Selector returns : ",sel1);

let sel2 = document.querySelectorAll("#nav>li");
console.log("Selector returns ", sel2)

sel2[0].innerHTML = "Hello";
