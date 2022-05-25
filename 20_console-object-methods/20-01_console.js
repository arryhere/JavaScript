/*
• Console Object Methods

• We use console object methods to show output on the browser console and we use document.write to show output on the browser document(view port)
• Both methods used only for testing and debugging purposes
• The console method is the most popular testing and debugging tool on the browser
*/

/*
• console.log()
• We use console.log() to show output on the browser console
• 
*/

console.log('Hello World 2077');
console.log('%s World %d', 'Hello', 2077);
console.log('%cHello World 2077', 'color:red');
console.log('%cHello %cWorld %c2077', 'color:red', 'color:green', 'color:blue');

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• console.warn()
• We use console.warn() to give warning on browser
*/

console.warn('This is a warning');

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• console.error()
• The console.error() method shows an error messages
*/

console.error('This is an error message');

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• console.table()
• The console.table() method display data as a table on the console
• The console.table() takes one required argument data, which must be an array or an object, and one additional optional parameter columns
*/

let names = ['Arijit', 'Divya', 'Sunidhi', 'Haris', 'Vivek'];
console.table(names)

let user = {
    name: 'Arijit',
    title: 'Programmer',
    country: 'India',
    city: 'Kolkata',
    age: 22
}
console.table(user)

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• console.time()
• Starts a timer you can use to track how long an operation takes
• You give each timer a unique name
• When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started
*/

let couples = [['Ranbir', 'Alia'], ['Saif', 'Kareena'], ['SharRukh', 'Gauri']];

console.time('for-of loop');
for (const [x,y] of couples) {
    console.log(`${x} + ${y}`);
}
console.timeEnd('for-of loop');


console.time('for-each loop');
couples.forEach(([e1,e2],i,arr) => {
    console.log(`${e1} + ${e2}`);
})
console.timeEnd('for-each loop');

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• console.info()
• It displays information message on browser console
*/

console.info('Hello World');

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• console.assert()
• The console.assert() methods writes an error message to the console if the assertion is false
• If the assertion is true, nothing happens
• The first parameter is an assertion expression
*/

console.assert(4 > 3, '4 is greater than 3')            // no result
console.assert(3 > 4, '3 is not greater than 4')        // Assertion failed: 3 is not greater than 4

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• console.group()
• The console.group() can help to group different log groups
*/

let fruits = ['Apple', 'Banana', 'Guava', 'Papaya'];
couples = [['Ranbir', 'Alia'], ['Saif', 'Kareena'], ['SharRukh', 'Gauri']];

console.group('fruits');
console.log(fruits);
console.groupEnd();

console.group('couples');
console.log(couples);
console.groupEnd();

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• console.count()
• It prints the number of times the console.count() is called
• It takes a string label parameter
• It is very helpful to count the number of times a function is called
*/

let func = () => { console.count('tell me the count');}

func();
func();
func();
func();
func();

console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• console.clear()
• The console.clear() cleans the browser console
*/

console.clear();

console.log("---------------------------------------------------------------------------------------------------------------------------------");