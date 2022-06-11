let btn_2 = document.getElementById('btn-2');
btn_2.addEventListener('click', load_2);

function load_2() {

    let xhr = new XMLHttpRequest();
    console.log(xhr);

    let url = './arry.json';
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.response);
        }
    }

    xhr.send();
}