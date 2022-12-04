function handlePromise(bool) {
  return new Promise(function (resolve, reject) {
    bool ? resolve(console.log('inside resolve')) : reject(console.log('inside reject'));
  });
}

const bool = 1;

handlePromise(bool)
  .then(() => console.log('promise resolved'))
  .catch(() => console.log('promise rejected'))
  .finally(() => console.log('end'));
