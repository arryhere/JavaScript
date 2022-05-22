/*
• STRING METHODS
• Everything in JavaScript is an object.
• A string is a primitive data type that means we can not modify it once it is created.
• The string object has many string methods.
• There are different string methods that can help us to work with strings.
*/

/*
• str.length
• str.charAt()
• str.charCodeAt(0)
• str.toUpperCase()
• str.toLowerCase()
• str.substr()
• str.split()
• str.slice()
• str.substring()
• str.trim()
• str.includes()
• str.replace()
• str.lastIndexOf()
• str.concat()
• str.startsWith()
• str.endsWith()
• str.search()
• str.repeat()
*/

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• str.length():
• The string length method returns the number of characters in a string included empty space.
*/

let str = 'Sunidhi Arora';
console.log(str.length);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Accessing characters in a string:
• We can access each character in a string using its index.
• In programming, counting starts from 0. The first index of the string is zero, and the last index is the length of the string minus one.
*/

str = 'JavaScript';
console.log(str[0],str[1],str[10-1]);

console.log(str[str.length-1]);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• charAt(): 
• Takes index and it returns the value at that index
*/

str = 'JavaScript';
console.log(str.charAt(0));

/*
• charCodeAt(): 
• Takes index and it returns char code (ASCII number) of the value at that index
*/

console.log(str.charCodeAt(0));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• toUpperCase():
• this method changes the string to uppercase letters
*/

str = 'Programming in JavaScript';
console.log(str.toUpperCase());

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• toLowerCase(): 
• this method changes the string to lowercase letters
*/

str = 'SUNIDHI ARORA';
console.log(str.toLowerCase());

console.log("---------------------------------------------------------------------------------------------------------------------------------")

/*
• substr():
• It takes two arguments, the starting index and number of characters to slice.
*/

str = 'JavaScript';
console.log(str.substr(1,3));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• split():
• The split method splits a string at a specified place.
• Takes 2 params : seperator, limit
• returns array
*/

str = 'Hello my name is Arijit Das';
console.log(str.split(' '));
console.log(str.split('  '));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• slice():
• extracts a part of a string and returns the extracted part in a new string.
• The method takes 2 parameters: the start position, and the end position (end not included).
*/

str = 'Hello my name is Arijit Das';
console.log(str.slice(0,4));
console.log(str.slice(-3,-1));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• substring():
• It takes two arguments, the starting index(inclusive) and the stopping index(exclusive) - it doesn't include the char at the stopping index.
• substring() is similar to slice(). The difference is that substring() cannot accept negative indexes.
*/

str = 'JavaScript';
console.log(str.substring(1,3));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• trim():
• Removes trailing space in the beginning or the end of a string.
*/

str = '             Hello my name is Arijit Das              ';
console.log(str);
console.log(str.trim());

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• includes():
• It takes a substring argument and it checks if substring argument exists in the string.
• includes() returns a boolean.
• If a substring exist in a string, it returns true, otherwise it returns false.
*/

str = 'Hello my name is Arijit Das';

console.log(str.includes("das"));
console.log(str.includes("Das"));
console.log(str.includes("is"));
console.log(str.includes(" Hello"));
console.log(str.includes("Hello "));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• replace():
• takes as a parameter the old substring and a new substring.
*/

str = 'Hello my name is Arijit Das';
console.log(str.replace("Hello", "Hola"));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• indexOf():
• Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
*/

str = 'Hello my name is Arijit Das';
console.log(str.indexOf("hello"));
console.log(str.indexOf("Hello"));
console.log(str.indexOf("Das"));
console.log(str.indexOf(" "));
console.log(str.indexOf("a"));

/*
• lastIndexOf():
• Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
*/

console.log(str.lastIndexOf("a"));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• concat():
• it takes many substrings and joins them.
*/

str = 'Hello my name is Arijit Das.';
console.log(str.concat(" I", " live", " in", " India."));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• startsWith:
• it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
*/

str = "I live in India";
console.log(str.startsWith("i"));
console.log(str.startsWith("I"));

/*
• endsWith:
• it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
*/

console.log(str.endsWith("iA"));
console.log(str.endsWith("ia"));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• search:
• it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
*/

str = 'Hello my name is Arijit Das.';
console.log(str.search("name"));

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• repeat():
• it takes a number as argument and it returns the repeated version of the string.
*/

str = "arijit";
console.log(str.repeat(10));

console.log("---------------------------------------------------------------------------------------------------------------------------------");
