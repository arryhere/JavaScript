
let jsonObj;

function load_1() {
    let xhr = new XMLHttpRequest();
    console.log(xhr);

    let url = './test.json';
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (this.status === 200) {

            jsonObj = JSON.parse(this.response);
            console.log(this.responseText);
        }
        else if (this.status === 404) {
            console.log('error 404, file not found');
        }
    }

    xhr.onerror = function () {
        console.log('Request Error');
    }

    xhr.send();
}

load_1()

console.log(jsonObj);