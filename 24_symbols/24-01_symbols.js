
/*
• Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol
• It's guaranteed to be unique
• 
• Every Symbol() call is guaranteed to return a unique Symbol
• 
*/

let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1 === sym2);


sym1 = Symbol('cat');
sym2 = Symbol('cat');
console.log(sym1 === sym2);


console.log("---------------------------------------------------------------------------------------------------------------------------------");


let idSym_1 = Symbol('id_1');
let idSym_2 = Symbol('id_2');

let user = {
    id: 21,
    name: 'Salman',
    country: 'India',
    age: 44,
    [idSym_2]: 3443434123123
}
user[idSym_1] = 32332112321;
console.log(user);


console.log("---------------------------------------------------------------------------------------------------------------------------------");

/*
• The Symbol.for(key) method searches for existing symbols in a runtime-wide symbol registry with the given key and returns it if found
• Otherwise a new symbol gets created in the global symbol registry with this key
• In contrast to Symbol(), the Symbol.for() function creates a symbol available in a global symbol registry list
• Symbol.for() does also not necessarily create a new symbol on every call, but checks first if a symbol with the given key is already present in the registry
• In that case, that symbol is returned
• If no symbol with the given key is found, Symbol.for() will create a new global symbol
• 
*/

sym1 = Symbol.for('cat');       // create a new global symbol
sym2 = Symbol.for('cat');       // retrieve the already created symbol
console.log(sym1 === sym2);     // true


console.log("---------------------------------------------------------------------------------------------------------------------------------");


// const RED = 'red';
// const ORANGE = 'orange';
// const YELLOW = 'yellow';
// const BLUE = 'blue';
// const cat = 'blue';

const RED = Symbol('red');
const ORANGE = Symbol('orange');
const YELLOW = Symbol('yellow');
const BLUE = Symbol('blue');
// const BLUE = 'blue';
const cat = 'blue';

function getThreatLevel(color) {
    switch (color) {
        case RED:
            return 'severe'; 
        case ORANGE:
            return 'high'; 
        case YELLOW:
            return 'elevated'; 
        case BLUE:
            return 'low'; 
        default:
            return "I DON'T KNOW THAT COLOR!";
    }
}

console.log(getThreatLevel(cat));


console.log("---------------------------------------------------------------------------------------------------------------------------------");
