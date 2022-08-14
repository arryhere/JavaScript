// see in browser, wont work for local files in node
const data = async () => {
    const response = await fetch('./demo.json');
    return await response.json();
}

data()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('end'))