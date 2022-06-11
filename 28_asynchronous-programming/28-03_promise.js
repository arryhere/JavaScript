/*
• JavaScript Promises

• A Promise is a way to handle asynchronous operations in JavaScript
• It allows handlers with an asynchronous action's eventual success value or failure reason
• This lets asynchronous methods return values like synchronous methods
• instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future

• A Promise is in one of these states:
    pending:        initial state, neither fulfilled nor rejected.
    fulfilled:      meaning that the operation completed successfully.
    rejected:       meaning that the operation failed.

• The Promise object supports two properties: state and result:
    myPromise.state	    myPromise.result
    "pending"	        undefined
    "fulfilled"	        a result value
    "rejected"	        an error object
    
• resolve === .then  ;  reject === .catch
*/


function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('func1 : your promise has been resolved');
                resolve('resolved');
            }
            else {
                console.log('func1 : your promise has not been resolved');
                reject('sorry not fulfiled');
            }
        }, 2000);
    })
}

func1().then(function (res) {
    console.log(res + ' thanks for resolving');
}).catch(function (err) {
    console.log(err + ' thanks for not resolving');
})


console.log("---------------------------------------------------------------------------------------------------------------------------------");


const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS'];
        if (skills.length > 0) {
            resolve(skills);
        } else {
            reject('Something wrong has happened');
        }
    }, 2000)
})

doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))