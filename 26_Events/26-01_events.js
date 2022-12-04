
const button_1 = document.getElementById('button-1');
const button_2 = document.getElementById('button-2');
const li_1 = document.getElementById('li-1');

button_1.addEventListener('click', addli);
button_2.addEventListener('click', deleteli);

function addli(e, value = 'value'){                              // e is event object, it contains all the event properties
    li_1.innerText = "someone clicked button 1 ! " + value;
    console.log(e, e.target);
}
function deleteli(){
    li_1.innerText = "";
}


console.log('------------------------------------------------------------------------------------------------------------------');


const form_btn = document.getElementById('form-btn');
form_btn.addEventListener('click', submit);

function submit(e){
    console.log(e);
}

const h1 = document.getElementsByTagName('h1')[0];
h1.addEventListener('dblclick', h1func);
function h1func(e){
    console.log(e);
}

document.getElementById('body').addEventListener('mousemove', function(e){
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${120})`
    console.log(e.offsetX, e.offsetY);
})