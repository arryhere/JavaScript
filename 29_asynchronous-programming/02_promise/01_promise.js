/*
• JavaScript Promises

• We can create a promise using the Promise constructor
• It takes a callback function
• The promise callback function has two parameters which are the resolve and reject functions

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
    
• resolve === .then  ;  reject === .catch ; .finally (runs whether resolve or reject)

•           promise
               |
            pending
             /    \
         resolve  reject
            |      |
         .then   .catch
             \    /
            .finally
*/

const bool = true;

const promise_1 = new Promise((resolve, reject) => {
  if (bool) {
    resolve('promise resolved');
  } else {
    reject('promise rejected');
  }
});

promise_1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('finally');
  });
