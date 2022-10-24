/*
• Parent and Sibling
• 
• Sibling are nodes that are children of same parent. ex- <head> and <body> are siblings.
• <body> is said to be the 'next' or 'right' sibling of <head>. <head> is said to be the 'previous' or 'left' sibling of <body>.
• 
• 
*/

const li_1 = document.getElementById('li-1');

console.log('li-1 nextSibling', li_1.nextSibling);                   // #text ; whitespace
console.log('li-1 previousSibling', li_1.previousSibling);           // #text ; whitespace
console.log('li-1 nextElementSibling', li_1.nextElementSibling);
console.log('li-1 previousElementSibling', li_1.previousElementSibling);


console.log('li-1 parentElement', li_1.parentElement);
console.log('li-1 parentNode', li_1.parentNode);
console.log('documentElement parentNode', document.documentElement.parentNode);
console.log('documentElement parentElement', document.documentElement.parentElement);