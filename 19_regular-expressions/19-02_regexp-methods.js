/*
• Using regular expressions in JavaScript

Method	            Description

exec()	        -->    Executes a search for a match in a string. It returns an array of information or null on a mismatch.
test()	        -->    Tests for a match in a string. It returns true or false.

match()	        -->    Returns an array containing all of the matches, including capturing groups, or null if no match is found.
matchAll()	    -->    Returns an iterator containing all of the matches, including capturing groups.
search()	    -->    Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
replace()	    -->    Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
replaceAll()	-->    Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring.
split()	        -->    Uses a regular expression or a fixed string to break a string into an array of substrings.

• When you want to know whether a pattern is found in a string, use the test() or search() methods
• For more information (but slower execution) use the exec() or match() methods
*/

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• exec()
• test()
*/

let str = 'arijit--das_Email@outlook.co.in';
let regex = /^([\w-]+)(@)([a-z]+)(\.)([a-z]{2,3})(.[a-z]{2,3})?$/; // using groups ()
// let regex = /^[\w-]+@[a-z]+\.[a-z]{2,3}\.?[a-z]{0,3}?$/;             // without using groups ()
console.log(regex.exec(str));
console.log(regex.test(str));

let str2 = '            ';
let regex2 = /^(\s*)$/;
if (regex2.test(str2)) {
  console.log('Contain white spaces');
} else {
  console.log('Does not contain white spaces');
}

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• match()
• matchAll()
*/

str = 'I love JavaScript and i love Regex';
regex = /love/;

console.log(str.match('love'));
console.log(Array.from(str.matchAll('love')));

regex = /love/g;
console.log(str.match(regex));

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• search()
• 
*/

str = 'I love JavaScript and i love Regex';
regex = /love/g;

console.log(str.search(regex));

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• replace()
• replaceAll()
*/

str =
  'Python is the most beautiful language that a human begin has ever created.\
 I recommend Python for a first programming language.';

console.log(str.replace('Python', 'JavaScript'));
console.log(str.replaceAll('Python', 'JavaScript'));

console.log(str.replace(/python/gi, 'Java'));
console.log(str.replaceAll(/python/gi, 'Java'));

console.log('------------------------------------------------------------------------------------------------------------------');

/*
• split()
• 
*/

str = 'Hello my full name is Arijit Das';

console.log(str.split(' '));
console.log(str.split(/\s/, 3));

console.log('------------------------------------------------------------------------------------------------------------------');
