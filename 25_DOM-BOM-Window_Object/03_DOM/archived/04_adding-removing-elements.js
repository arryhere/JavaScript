
let element = window.document.createElement("li");
console.log(element);
element.className = "myLi";
element.id = "new_created_li";
element.setAttribute('tag' , 'mytitle');
element.innerText = "new_li";
element.innerHTML = "<b>new_li</b>";

let text = document.createTextNode("new__li2");
element.appendChild(text);

let ul = document.querySelector("ul.myUl");
console.log(ul);
ul.appendChild(element);

console.log('----------------------------------------------------------------------------------------------------------------------------');

let elem2 = document.createElement("h3");
elem2.className = "elem2";
elem2.id = "elem2";
let tnode = document.createTextNode("this is new node for elem2");
elem2.appendChild(tnode);

element.replaceWith(elem2);

console.log(document.querySelector("ul.myUl").innerHTML);

console.log('----------------------------------------------------------------------------------------------------------------------------');

let myul = document.getElementsByClassName("myUl")[0];
console.log(myul);
myul.replaceChild(element, document.getElementById("firstli"));
myul.removeChild(document.getElementById("lastli"));

console.log('----------------------------------------------------------------------------------------------------------------------------');

let attr = elem2.getAttribute("id");
console.log(elem2, attr);

let has_attr = elem2.hasAttribute("title");
let has_attr2 = elem2.hasAttribute("class");
console.log(has_attr, has_attr2);

elem2.removeAttribute("id");
console.log(elem2);
elem2.setAttribute("class", "newClass");
console.log(elem2);

console.log('----------------------------------------------------------------------------------------------------------------------------');

let hello = document.getElementsByClassName("one")[0];
console.log(hello);
console.log(hello.getAttribute("class"));

console.log('----------------------------------------------------------------------------------------------------------------------------');