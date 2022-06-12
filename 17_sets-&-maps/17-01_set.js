/*
• Set
• Set is a collection of unique elements
• Set can only contains unique elements
*/

/*
    Method	    Description
    new Set()	    Creates a new Set
    add()	        Adds a new element to the Set
    delete()	    Removes an element from a Set
    has()	        Returns true if a value exists in the Set
    forEach()	    Invokes a callback for each element in the Set
    values()	    Returns an iterator with all the values in a Set
    entries()       Returns a new Iterator object
    
    Property	    Description
    size	        Returns the number of elements in a Set
*/

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Creating an empty set
*/

const myset = new Set();
console.log(myset);             // Set(0) {}

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Creating set from array
• Set is an iterable object and we can iterate through each elements
*/

const countries = ['India', 'Denmark', 'Sweden', 'Norway', 'Iceland', 'India'];
const setOfCountries = new Set(countries);
console.log(setOfCountries);

for (const x of setOfCountries) {
    console.log(x);
}

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Adding an element to a set
*/

const companiesArray = ['Google', 'Amazon', 'Apple', 'Nvidia', 'Microsoft'];
const companiesSet = new Set();

for (const x of companiesArray) {
    companiesSet.add(x);
}

console.log(companiesSet, companiesSet.size);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Deleting an element a set
• We can delete an element from a set using a delete method
*/

const friends = ['Divya', 'Sunidhi', 'Haris', 'Vivek', 'Ravi', 'Divya'];
const friendsSet = new Set(friends);

console.log(friendsSet);

friendsSet.delete('Divya');

console.log(friendsSet);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Checking an element in the set
• The has method can help to know if a certain element exists in a set
*/

const fruits = new Set(['Apple', 'Banana', 'Apple', 'Banana', 'Banana', 'Guava']);
console.log(fruits);

console.log(fruits.has('Apple'));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Clearing the set
• It removes all the elements from a set
*/

const vegetables = new Set(['Potato', 'Carrot', 'Spinach', 'Onion']);
console.log(vegetables);

vegetables.clear();
console.log(vegetables);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• forEach()

• The forEach() method executes a provided function once for each value in the Set object, in insertion order
• (value, key, set)
• value, key : The current element being processed in the Set. As there are no keys in Set, the value is passed for both arguments.
• There are no keys in Set objects, however, so the first two arguments are both values contained in the Set
• This is to make it consistent with other forEach() methods for Map and Array
• 
*/

const continents = new Set(['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Australia']);

continents.forEach((e1, e2, set) => {
    console.log(e1);
})

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• values()
• returns a new Iterator object that contains the values for each element in the Set object in insertion order
*/

const zodiac = new Set(['Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn']);

let iterator = zodiac.values();

console.log(iterator.next().value);
console.log(iterator.next().value);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• entries()
• Returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order
• 
*/

const planets = new Set(['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto']);

iterator = planets.entries(); 

console.log(iterator.next().value);

for (const x of iterator) {
    console.log(x);
}

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Union of Sets
• 
*/

let a = [1, 2, 3, 4, 5, 6];
let b = [3, 4, 5, 6, 3];

let c = Array.from(new Set(a.concat(b)));
console.log(c);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Intersection of sets
• 
*/
a = [1, 2, 3, 4, 5, 6];
b = [3, 4, 5, 6, 3];

let A = new Set(a);
let B = new Set(b);

c = a.filter((e) => {
    return B.has(e)
})

let C = new Set(c);
console.log(C);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Difference of sets
• 
*/

a = [1, 2, 3, 4, 5, 6];
b = [3, 4, 5, 6, 3];

A = new Set(a);
B = new Set(b);

c = a.filter((e) => {
    return !B.has(e)
})

C = new Set(c);
console.log(C);

console.log("---------------------------------------------------------------------------------------------------------------------------------");