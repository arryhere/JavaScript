const postData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'ContentType': 'application/json',
        },
        body: JSON.stringify({})                        // sending empty body. Does not give error as defined by the backend
    });
    return await response.json();
}

postData()
    .then(res => console.log(res))
    .catch(err => console.log(err.message))
    .finally(() => console.log('end'))