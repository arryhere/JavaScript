
let btn_1 = document.getElementById('fetch-btn-1').addEventListener('click', getData);
let btn_2 = document.getElementById('fetch-btn-2').addEventListener('click', getUser);
let btn_3 = document.getElementById('fetch-btn-3').addEventListener('click', postData);

let content = document.getElementById('content');

function getData() {
    let url = './arry.json';
    
    fetch(url).then((response) => {
        return response.json();         // accessing the API data as json
    }).then((data) => {
        console.log(data);              // getting the data
    }).catch((error) => {
        console.log(error);             // handling error if something wrong happens
    })
}


console.log("---------------------------------------------------------------------------------------------------------------------------------");


function getUser() {
    let url = 'https://api.github.com/users';

    fetch(url).then((response) => {
        if(response.ok){
            return response.json();
        }
        else{
            console.log('ERROR');
        }
    }).then((data) => {
        let html = '';
        for (const x of data) {
            html += `${x["login"]}
            `
        }
        content.innerHTML = html;
    }).catch((error) => {
        console.log(error);
    })


}


console.log("---------------------------------------------------------------------------------------------------------------------------------");


function postData() {
    let url = 'http://dummy.restapiexample.com/api/v1/create';
    let data = { "name": "arijit", "salary": "40", "age": 22 };
    let params = {
        method: 'POST',
        header: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(url, params).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}
