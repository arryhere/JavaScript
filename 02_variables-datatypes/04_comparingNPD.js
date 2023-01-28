/*
• NON-PRIMITIVE DATA TYPES

• Non-primitive data types are modifiable or mutable. We can modify the value of non-primitive data types after it gets created.
• Let us see by creating an array. An array is a list of data values in a square bracket.
• Arrays can contain the same or different data types. Array values are referenced by their index.
• In JavaScript array index starts at zero. I.e., the first element of an array is found at index zero, the second element at index one, and the third element at index two, etc.
*/

let num = [1, 2, 3];
num[0] = 10;

console.log(num); // [10, 2, 3]

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• As you can see, an array, which is a non-primitive data type is mutable.
• Non-primitive data types cannot be compared by value.
• Even if two non-primitive data types have the same properties and values, they are not strictly equal.
*/

let nums = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums === numbers); // false

let userOne = {
  name: 'Arijit',
  role: 'Developer',
  country: 'India',
};

let userTwo = {
  name: 'Arijit',
  role: 'Developer',
  country: 'India',
};

console.log(userOne == userTwo); // false

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• Comparing two JavaScript objects always returns false.
• Rule of thumb, we do not compare non-primitive data types.
• Do not compare arrays, functions, or objects. Non-primitive values are referred to as reference types, because they are being compared by reference instead of value.
• Two objects are only strictly equal if they refer to the same underlying object
*/

let nums2 = [1, 2, 3];
let numbers2 = nums2;

console.log(nums2 == numbers2); // true

let userOne2 = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland',
};

let userTwo2 = userOne2;

console.log(userOne2 == userTwo2); // true

console.log('------------------------------------------------------------------------------------------------------------------');
