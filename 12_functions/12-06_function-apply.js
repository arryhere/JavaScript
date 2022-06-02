/*
• Function.prototype.apply()

• The apply() method calls a function with a given "this" value to be passed, and arguments provided as an array (or an array-like object)
• The call() method takes arguments separately, the apply() method takes arguments as an array
• apply(thisArg, argsArray)
• 
*/


const info = {
    getInfo: function (gender, age) { return `${this.firstName} ${this.lastName} ${gender} ${age}` }
}
const arijit = {
    firstName: 'Arijit',
    lastName: 'Das'
}
console.log(info.getInfo.apply(arijit, ['male', 22]));


console.log("---------------------------------------------------------------------------------------------------------------------------------");


const numbers = [51, 16, 245, 3, 79];

console.log(Math.max.apply(null, numbers));
console.log(Math.min.apply(null, numbers));


console.log("---------------------------------------------------------------------------------------------------------------------------------");


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push.apply(arr1, arr2)
console.log(arr1);


console.log("---------------------------------------------------------------------------------------------------------------------------------");


function sum() {
    console.log(this);
    let sum = 0;
    for (const x of arguments) {
        sum += x
    }
    return sum;
}

console.log(sum.apply({ name: 'user', age: 33 }, [5, 5, 5]));