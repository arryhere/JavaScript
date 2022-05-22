/*
• JavaScript Array forEach()
• The forEach() method calls a function (a callback function) once for each array element.
*/

/*
• Note that the function takes 3 arguments:

• The item value
• The item index
• The array itself
*/

const numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(function f(elements){
    process.stdout.write(`${elements}`);
}); 

console.log("\n" + numbers);

numbers.forEach(function f(elements,index, array){
    array[index] = elements + " - update";
})

console.log("" + numbers);