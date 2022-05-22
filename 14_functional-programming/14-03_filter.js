/*
• filter

• Filter: Filter out items which full fill filtering conditions and return a new array
*/

const countries = [
    'India',
    'Albania',
    'Iceland',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Netherland',
]

const countryFilter = countries.filter((e,i,arr) => {
    // arr[i] = 'India';                                    //changes the initial array
    return e.includes('land');
})
console.log(countryFilter);


console.log("---------------------------------------------------------------------------------------------------------------------------------");


const countryFilter2 = countries.filter((e,i,arr) => {
    return e.endsWith('ia');
})
console.log(countryFilter2);


console.log("---------------------------------------------------------------------------------------------------------------------------------");


const countryFilter3 = countries.filter((e,i,arr) => {
    // return e.length === 5;
    if(e.length === 5){
        return true;
    }
    else{
        return 0;
    }
})
console.log(countryFilter3);


console.log("---------------------------------------------------------------------------------------------------------------------------------");


let students = [
    {name :'Arijit' , marks : 100},
    {name :'Divya' , marks : 50},
    {name :'Sunidhi' , marks : 82},
    {name :'Ravi' , marks : 33},
    {name :'Haris' , marks : 95}
]

console.log(students);

const newStudents = students.filter((e,i,arr) => {
    return e.marks > 50;
})
console.log(newStudents);


console.log("---------------------------------------------------------------------------------------------------------------------------------");


