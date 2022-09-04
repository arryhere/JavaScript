const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'
    });
    const user = await response.json();
    return user.map(e => ({ id: e.id, name: e.name }))
}

getData()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('end'))