/*
• Iterator
• 
*/

let a = [1, 2, 3, 4, 5];

function func1(arr) {
  let i = 0;
  return function func2() {
    let v = arr[i];
    ++i;
    return v;
  };
}

let func3 = func1(a);

console.log(func3()); // 1
console.log(func3()); // 2
console.log(func3()); // 3
console.log(func3()); // 4
console.log(func3()); // 5
console.log(func3()); // undefined

console.log('----------------------------------------------------------------------------------------------------------------------------');

let b = [88, 99, 44, 22, 11];

function outer(arr) {
  let i = 0;
  return {
    next: function inner() {
      if (i < arr.length) {
        let v = arr[i];
        i++;
        return {
          value: v,
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

let iterator = outer(b);

console.log(iterator.next().value); // { value: 88, done: false }
console.log(iterator.next()); // { value: 99, done: false }
console.log(iterator.next().done); // { value: 44, done: false }
console.log(iterator.next()); // { value: 22, done: false }
console.log(iterator.next()); // { value: 11, done: false }
console.log(iterator.next()); // { done: true }
console.log(iterator.next()); // { done: true }

console.log('----------------------------------------------------------------------------------------------------------------------------');

let c = ['apple', 'banana', 'grape', 'pineapple', 'guava'];

let itr = c.values();

console.log(itr.next());
console.log(itr.next());

let etr = c.entries();

console.log(etr.next());
console.log(etr.next());

console.log('----------------------------------------------------------------------------------------------------------------------------');
