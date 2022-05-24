/*
• JavaScript Regular Expressions

• A regular expression is a sequence of characters that forms a search pattern
• The search pattern can be used for text search and text replace operations
• In JavaScript, regular expressions are also objects

• To use RegExp in JavaScript either we use RegExp constructor or we can declare a RegExp pattern using two forward slashes followed by a flag
• A regular expression takes two parameters : One required search pattern and an optional flag
*/

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• Pattern

• A pattern could be a text or any form of pattern which some sort of similarity
• For instance the word spam in an email could be a pattern we are interested to look for in an email or a phone number format number might be our interest to look for.
*/

/*
• Flags

• Flags are optional parameters in a regular expression which determine the type of searching
• g : a global flag which means looking for a pattern in whole text
• i : case insensitive flag(it searches for both lowercase and uppercase)
• m : multiline
*/


console.log("---------------------------------------------------------------------------------------------------------------------------------");



/*
• Creating a pattern with and without RegExp Constructor
*/

let pattern = 'arijit';
let regex = new RegExp(pattern, 'gi')       // flag global and case insensitive

regex = new RegExp('arijit', 'gi');

regex = /arijit/gi;                         // without regexp constructor


console.log("---------------------------------------------------------------------------------------------------------------------------------");


/*
• Groups

• []: A set of characters

•   [abc]	Any of the characters a, b, or c
    [A-Z]	Any character from uppercase A to uppercase Z
    [a-z]	Any character from lowercase a to lowercase z
    [A-z]	Any character from uppercase A to lowercase z

•   [^abc]	Not any of the characters a, b, or c
    [^A-Z]	Not any character from uppercase A to uppercase Z
    [^a-z]	Not any character from lowercase a to lowercase z
    [^A-z]	Not any character from uppercase A to lowercase z

•   [0-3] means, 0 or 1 or 2 or 3
    [0-9] means any number 0 to 9

•   [^0-9] expression is used to find any character that is NOT a digit

•   [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9

•   (): Capture and Group
    (x|y) expression is used to find any of the alternatives specified

*/


console.log("---------------------------------------------------------------------------------------------------------------------------------");



/*
• Quantifiers

• x*                                    -->     Matches the preceding item "x" 0 or more times
• x+                                    -->     Matches the preceding item "x" 1 or more times
• x?                                    -->     Matches the preceding item "x" 0 or 1 times
• x{n}                                  -->     Matches the preceding item "x" exactly "n" occurrences
• x{n,}                                 -->     Matches the preceding item "x" at least "n" occurrences
• x{n,m}                                -->     Matches the preceding item "x" at least "n" and at most "m" occurrences

• x*? x+? x?? x{n}? x{n,}? x{n,m}?      -->     By default quantifiers like * and + are "greedy", meaning that they try to match as much of the string as possible. 
                                                The ? character after the quantifier makes the quantifier "non-greedy": meaning that it will stop as soon as it finds a match

• ?=x                                   -->     Matches any string that is followed by a specific string x
• ?!x                                   -->     Matches any string that is not followed by a specific string x
*/


console.log("---------------------------------------------------------------------------------------------------------------------------------");


/*
• Assertions
• Assertions include boundaries, which indicate the beginnings and endings of lines and words
• And other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions)

• ^                                     -->     Matches the beginning of input
• $                                     -->     Matches the end of input
• \b                                    -->     Matches a word boundary
                                                This is the position where a word character is not followed or preceded by another word-character
• \B                                    -->     Matches a non-word boundary
• ?=x                                   -->     Matches any string that is followed by a specific string x
• ?!x                                   -->     Matches any string that is not followed by a specific string x
*/


console.log("---------------------------------------------------------------------------------------------------------------------------------");


/*
• Metacharacters

• \w        -->     matches word characters
                    A word character is a character a-z, A-Z, 0-9, including _ (underscore)\

• \W        -->     matches non-word characters

• \d        -->     matches digits from 0 to 9

• \D        -->     matches non-digit characters

• \s        -->     matches whitespace character
                    Whitespace characters can be:
                    A space character
                    A tab character
                    A carriage return character
                    A new line character
                    A vertical tab character
                    A form feed character

• \S        -->     matches non-whitespace characters

• \0        -->     maches NUL characters

• \n        -->     matches newline characters

• \f        -->     matches form feed characters

• \r        -->     matches carriage return characters

• \t        -->     matches horizontal tabs (tabulators)

• \v        -->     matches vertical tab characters (tabulators)

• 
• 
• 
*/


console.log("---------------------------------------------------------------------------------------------------------------------------------");