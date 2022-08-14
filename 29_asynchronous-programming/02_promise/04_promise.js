const bool = 1;

const promise_1 = new Promise((res, rej) => bool ? setTimeout(() => { res('promise 1') }, 4500) : rej('error 1'));
const promise_2 = new Promise((res, rej) => bool ? setTimeout(() => { res('promise 2') }, 5000) : rej('error 2'));
const promise_3 = new Promise((res, rej) => bool ? setTimeout(() => { res('promise 3') }, 3000) : rej('error 3'));

// The Promise.all() method takes an iterable of promises as an input, 
// and returns a single Promise that resolves to an array of the results of the input promises

Promise.all([promise_1, promise_2, promise_3])
    .then(res => console.log(res))
    .catch(err => console.log(err))

// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, 
// with the value or reason from that promise

Promise.race([promise_1, promise_2, promise_3])
    .then(res => console.log(res))
    .catch(err => console.log(err))