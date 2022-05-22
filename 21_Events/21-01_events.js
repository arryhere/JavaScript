
const button_1 = document.getElementById('button-1');
const button_2 = document.getElementById('button-2');
const li_1 = document.getElementById('li-1');

button_1.addEventListener('click', addli);
button_2.addEventListener('click', deleteli);

function addli(e){
    li_1.innerText = "someone clicked button 1 !";
    console.log(e);
}
function deleteli(){
    li_1.innerText = "";
}