/*
• Map
• A Map holds key-value pairs where the keys can be any datatype
• A Map remembers the original insertion order of the keys
*/

/*

Method	        Description

new Map()	    Creates a new Map
set()	        Sets the value for a key in a Map
get()	        Gets the value for a key in a Map
delete()	    Removes a Map element specified by the key
clear()         Removes all elements from a Map object
has()	        Returns true if a key exists in a Map
forEach()	    Calls a function for each key/value pair in a Map
entries()	    Returns an iterator with the [key, value] pairs in a Map
values()        Returns a new iterator object that contains the values
keys()          Returns a new iterator object that contains the keys

Property	    Description
size	        Returns the number of elements in a Map

*/

/*

JavaScript Objects vs Maps

Object	        Map

Iterable	    Not directly iterable	Directly iterable
Size	        Do not have a size property	Have a size property
Key Types	    Keys must be Strings (or Symbols)	Keys can be any datatype
Key Order	    Keys are not well ordered	Keys are ordered by insertion
Defaults	    Have default keys	Do not have default keys

*/

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Creating an empty Map
• You can create a Map by passing an Array to the new Map() constructor
*/

const map = new Map();
console.log(map);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Creating an Map from array
• 
*/

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

const countriesMap = new Map(countries);        // pass map to Array.from to get array
console.log(countriesMap);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• set() Method
• You can add elements to a Map with the set() method
*/

const info = new Map();

info.set('name', 'Arijit');
info.set('name', 'Arijit');
info.set(22, 'age');
info.set('male', true);

console.log(info);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• get() Method
• The get() method gets the value of a key in a Map
*/

console.log(info.get('male'));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• size Property
• The size property returns the number of elements in a Map
*/

console.log(info.size);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• delete() Method
• clear() Method
*/

const planets_moons = new Map();

planets_moons.set('Mercury' , 0);
planets_moons.set('Venus' , 0);
planets_moons.set('Earth' , 1);
planets_moons.set('Mars' , 2);
planets_moons.set('Jupiter' , 79);
planets_moons.set('Saturn' , 82);
planets_moons.set('Uranus' , 27);
planets_moons.set('Neptune' , 14);

planets_moons.delete('Mercury')

console.log(planets_moons);

planets_moons.clear();

console.log(planets_moons);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• has() Method
• The has() method returns true if a key exists in a Map
*/

const couples = new Map([['Ranveer', 'Deepika'],['Ranbir', 'Alia'],['Vickey', 'Katrina']]);
console.log(couples);

console.log(couples.has('Ranbir'));
console.log(couples.has('Alia'));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Getting all values from map using loop
• forof loop
*/

const databaseArray = [
    ['Arijit', 101],
    ['Vivek', 102],
    ['Divya', 103],
    ['Sunidhi', 104],
    ['Meenal', 105]
]
const database = new Map(databaseArray);

console.log(database);

for (const [name, id] of database) {
    console.log(name, id);
}

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• forEach()
• forEach((value, key, map) => { } )
• 
*/

database.forEach((v,k,map) => {
    console.log(`${v} + ${k} + ${map}`);
})

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• entries()
• Returns a new iterator object that contains the [key, value] pairs for each element in the Map object in insertion order
*/

let iterator =  database.entries();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• values()
• Returns a new iterator object that contains the values for each element in the Map object in insertion order
*/

iterator =  database.values();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• keys()
• Returns a new iterator object that contains the keys for each element in the Map object in insertion order
*/

iterator =  database.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

let arr = Array.from(database.keys());
console.log(arr);

console.log("---------------------------------------------------------------------------------------------------------------------------------");
