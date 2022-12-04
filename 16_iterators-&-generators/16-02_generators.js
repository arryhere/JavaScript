/*
• Generators

• The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object
• The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol
• 
*/

function* numbersGen() {
  let i = 0;

  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const gen = numbersGen();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: undefined, done: true }

console.log('------------------------------------------------------------------------------------------------------------------');

function* _numbersGen() {
  let i = 0;

  while (i < 5) {
    yield i++;
  }
}

const _gen = _numbersGen();

console.log(_gen.next().value);
console.log(_gen.next().value);
console.log(_gen.next().value);
console.log(_gen.next().value);
console.log(_gen.next()['value']);
console.log(_gen.next()); // { value: undefined, done: true }

console.log('------------------------------------------------------------------------------------------------------------------');
