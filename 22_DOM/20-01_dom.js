/*
• Document Object Model (DOM)

• HTML document is structured as a JavaScript Object
• Every HTML element has a different properties which can help to manipulate it
• It is possible to get, create, append or remove HTML elements using JavaScript
• Selecting HTML element using JavaScript is similar to selecting using CSS
• To select an HTML element, we use tag name, id, class name or other attributes
*/

console.log("JS DOM");
console.log(document);
console.log(typeof document);
console.log(document.all);                      // deprecated !!
console.log(document.querySelectorAll("*"));
console.log(document.body);
console.log(document.forms[1]);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

let a = document.all;
Array.from(a).forEach((x)=>{
    console.log(x);
})

console.log("---------------------------------------------------------------------------------------------------------------------------------");

console.log(document.links[0].href);