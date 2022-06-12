let btn_4 = document.getElementById('btn-4');
btn_4.addEventListener('click', load_4);

function load_4() {
    let xhr = new XMLHttpRequest();

    let url = 'http://dummy.restapiexample.com/api/v1/create';
    let params = `{
        "name": "abcdwqqsefw2",
        "salary": 4004450,
        "age": 45022
    }`

    xhr.open('POST', url, true);

    xhr.getResponseHeader('Content-type', 'application/json');

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(JSON.parse(this.response));
        }
    }

    xhr.send(params);
}

