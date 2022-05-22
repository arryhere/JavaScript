let a = window.document.querySelectorAll(".demo");
console.log(a);

a = document.querySelector(".container");
console.log(a);

console.log(a.childNodes);
console.log(a.children);

console.log(a.childNodes[0].nodeName);
console.log(a.childNodes[0].nodeType);
/*
• nodeType

• 1 - element
• 2 - attribute
• 3 - text node
• 8 - comment
• 9 - document
• 10 - doc type
*/
console.log(a.children[5].children[1]);

console.log(a.firstChild);
console.log(a.firstElementChild);

console.log(a.lastChild);
console.log(a.lastElementChild);

console.log(a.childElementCount);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

let b = document.querySelectorAll("div .red.child")[0];
console.log(b);
console.log(b.childNodes);
console.log(b.children);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

let c = document.querySelector(".container");
console.log(c.firstElementChild.parentElement);
console.log(c.firstElementChild.nextSibling);
console.log(c.firstElementChild.nextElementSibling);