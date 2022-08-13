// JavaScript For In

// The JavaScript for in statement loops through the properties of an Object:

const obj = {
    name : 'Arijit',
    age : 22,
    height : "6 foot",
    friend : null,
    "favoutite quote" : "No amount of money, ever bought a second of time"
}

for(let x in obj){                      // x is string
   console.log(`${x} : ${obj[x]}`);
}


console.log("---------------------------------------------------------------------------------------------------------------------------------");


const names = ['Arijit', 'Divya', 'Haris', 'Sunidhi', 'Rohan'];

for(x in names){
    console.log(x);
}


console.log("---------------------------------------------------------------------------------------------------------------------------------");


const str = '123';

for(x in str){
    console.log(x);
}


console.log("---------------------------------------------------------------------------------------------------------------------------------");