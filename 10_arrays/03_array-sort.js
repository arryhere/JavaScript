/*
• Sorting an Array -- The sort() method sorts an array alphabetically.
*/

/*
• Numeric Sort
• By default, the sort() function sorts values as strings.
• This works well for strings ("Apple" comes before "Banana" as 'A' comes before 'B').
• However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
• Because of this, the sort() method will produce incorrect result when sorting numbers.
• You can fix this by providing a compare function:
*/

const arr1 = ['Banana', 'Orange', 'Apple', 'Mango'];
arr1.sort();
console.log(arr1);

const arr2 = [40, 100, 1, 5, 25, 10, 40];
arr2.sort();
console.log(arr2);

//custom sorting function for numbers
arr2.sort(function compare(x, y) {
  // +1 goes right , -1 goes left , 0 means equal
  return x - y;
});
console.log(arr2);

//custom sorting word length
const arr3 = ['rameshwaram', 'zi', 'deep', 'bhavika'];
arr3.sort(function compare(x, y) {
  return x.length - y.length;
});
console.log(arr3);

/*
• When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value
• If the result is negative a is sorted before b
• If the result is positive b is sorted before a
• If the result is 0 no changes are done with the sort order of the two values
• 
• The compare function compares all the values in the array, two values at a time (a, b).
• When comparing 40 and 100, the sort() method calls the compare function(40, 100).
• The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
*/

console.log('----------------------------------------------------------------------------------------------------------------------------');

// Sorting Object Arrays

const cars = [
  { type: 'Volvo', year: 2005 },
  { type: 'Tesla', year: 2010 },
  { type: 'BMW', year: 2001 },
  { type: 'Ferrari', year: 1998 },
];

cars.sort();
console.log(cars);

cars.sort(function compareYear(x, y) {
  return x.year - y.year;
});
console.log(cars);

cars.sort(function compareLength(x, y) {
  return y.type.toLowerCase().length - x.type.toLowerCase().length;
});
console.log(cars);

cars.sort(function compareAlphabet(a, b) {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
});
console.log(cars);

console.log('----------------------------------------------------------------------------------------------------------------------------');
