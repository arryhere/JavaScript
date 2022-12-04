/*
• Children of an element
• Direct as well deeply nested elements of an element are called its children
• 
• child nodes - Elements that are direct children. ex- <head> and <body> are direct child of <html>
• descendant nodes - All nested elements, children, their children and so on...
• 
• Nodelist and HTMLCollection is not an Array, use Array.from() to convert it to array.
*/

const ul_1 = document.getElementById('ul-1');

console.log('ul-1 firstChild', ul_1.firstChild); // #text ; whitespace
console.log('ul-1 lastChild', ul_1.lastChild); // #text ; whitespace
console.log('ul-1 childNodes', ul_1.childNodes);
console.log('ul-1 childNodes[0]', ul_1.childNodes[0]);

console.log('ul-1 firstElementChild', ul_1.firstElementChild);
console.log('ul-1 lastElementChild', ul_1.lastElementChild);
console.log('ul-1 children', ul_1.children);
console.log('ul-1 children[0]', ul_1.children[0]);

console.log('ul-1 hasChildNodes', ul_1.hasChildNodes());
