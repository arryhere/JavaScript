function getData() {
    let url = './test.json';
    fetch(url).then((response) => {
        return response.text();         // accessing the API data as text
    }).then((data) => {
        console.log(data);              // getting the data
    }).catch((error) => {
        console.log(error);             // handling error if something wrong happens
    })
}

getData()