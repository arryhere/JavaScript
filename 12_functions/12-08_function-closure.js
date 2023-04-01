/*
• Closure

• JavaScript allows writing function inside an outer function
• We can write as many inner functions as we want
• If inner function access the variables of outer function then it is called closure
*/

function func1(outer_var) {
  // func 1 execute first
  return function func2(inner_var) {
    // func2 is returned by func1 then func2 is executed, func2 keeps the outer_var
    console.log('outer variable - ' + outer_var);
    console.log('inner variable - ' + inner_var);
  };
}

let func3 = func1(2); // func1 returning func2 function
func3(5); // func3 has func2 now, and now executing func2

console.log('----------------------------------------------------------------------------------------------------------------------------');

function _func1() {
  let count = 0;
  return function _func2() {
    return ++count;
  };
}

let _func3 = _func1();
console.log(_func3());
console.log(_func3());
console.log(_func3());
console.log(_func3());

console.log('----------------------------------------------------------------------------------------------------------------------------');

function outer() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  return inner;
}

console.log(outer());

const inner = outer();

console.log(inner());
console.log(inner());
console.log(inner());

console.log('----------------------------------------------------------------------------------------------------------------------------');

const outerFunc = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

console.log(outerFunc());
console.log(outerFunc());
console.log(outerFunc());

console.log('----------------------------------------------------------------------------------------------------------------------------');

function outerFunction() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }
  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}
const innerFuncs = outerFunction();

console.log(innerFuncs.plusOne);
console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);

console.log('----------------------------------------------------------------------------------------------------------------------------');
