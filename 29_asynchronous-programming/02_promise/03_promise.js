const bool = true;

function handlePromise(func) {
    return new Promise(function (resolve, reject) {
        bool ? resolve(func()) : reject('error');               // run func if promise is resolved
    })
}

handlePromise(() => console.log('run 1'))
    .then(() => handlePromise(() => console.log('run 2')))      // promise is resolved , now do something
    .then(() => handlePromise(() => console.log('run 3')))      // promise is returned from upper .then, sodo something if resolved
    .then(() => handlePromise(() => console.log('run 4')))
    .then(() => handlePromise(() => console.log('run 5')))
    .catch((err) => console.log(err))                           // handle reject
    .finally(() => console.log('end'));                         // finally do something if resolve or reject