/*
• sort
• 
• sort: The sort methods arranges the array elements either ascending or descending order
• By default, the sort() method sorts values as strings
• This works well for string array items but not for numbers
• If number values are sorted as strings and it give us wrong result
• Sort method modify the original array
• It is recommended to copy the original data before you start using sort method
*/

/*
• Sorting string values
*/

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot'];
products.sort();
console.log(products);

console.log('----------------------------------------------------------------------------------------------------------------------------');

/*
• Sorting Numeric values
• Sort converts items to string
• o avoid this, we use a compare call back function inside the sort method, which return a negative, zero or positive
*/

const numbers = [9.81, 3.14, 100, 37];
numbers.sort((a, b) => {
  return a - b;
});
console.log(numbers);

console.log('----------------------------------------------------------------------------------------------------------------------------');

/*
• Sorting Object Arrays
• Whenever we sort objects in an array, we use the object key to compare
*/

const person = [
  { name: 'Arijit', age: 22 },
  { name: 'Divya', age: 20 },
  { name: 'Vivek', age: 11 },
  { name: 'Haris', age: 11 },
];

person.sort((a, b) => {
  if (a.age === b.age) {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return +1;
    } else {
      return 0;
    }
  } else {
    return a.age - b.age;
  }
});

console.log(person);

console.log('----------------------------------------------------------------------------------------------------------------------------');
