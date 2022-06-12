/*
• Async and Await
• Async and await is an elegant way to handle promises. It is easy to understand and it clean to write
*/

let async_await_btn_1 = document.getElementById('async-await-btn-1');
async_await_btn_1.addEventListener('click', user);


async function user(){

    const response = await fetch('https://api.github.com/users');
    const users = await response.json();
    return users;
}

let a = user();
console.log(a);


a.then((data) => {
    console.log(data);
}).catch(err => {
    console.log(err);
})


