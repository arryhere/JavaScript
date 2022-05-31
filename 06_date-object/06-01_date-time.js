/*
• DATE OBJECT
• Time is an important thing. We like to know the time a certain activity or event.
• In JavaScript current time and date is created using JavaScript Date Object.
• The object we create using Date object provides many methods to work with date and time.
• The methods we use to get date and time information from a date object values are started with a word get because it provide the information.
• getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), getTime(), getDay()
*/

let date1 = new Date();
console.log(date1);
console.log(date1.toString());

let date2 = new Date(0);
console.log(date2);

let date3 = new Date("2029-05-30 18:12:30");
console.log(date3.toString());

// let newDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);
let date4 = new Date(3000, 4, 28, 10, 30, 10, 35);
console.log(date4.toString());

let date5 = new Date('June 13 1977');
console.log(date5);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Date Methods

console.log("Date methods :\n")

let newDate = new Date();
console.log(newDate);

let year = newDate.getFullYear();
console.log("The year is ", year);

let date = newDate.getDate();
console.log("The date is ", date);

let day = newDate.getDay();
console.log("The day is ", day);

let month = newDate.getMonth();
console.log("The month is ", month);

let hours = newDate.getHours();
console.log("The hours is ", hours);

let minutes = newDate.getMinutes();
console.log("The minutes is ", minutes);

let seconds = newDate.getSeconds();
console.log("The seconds is ", seconds);

newDate.setDate(1);
newDate.setMinutes(29);
console.log(newDate.toString())

console.log("---------------------------------------------------------------------------------------------------------------------------------");

console.log( (new Date()).getTime() );      //this is the number of seconds passed from January 1, 1970 to present
console.log(Date.now());                    //this is the number of seconds passed from January 1, 1970 to present

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Date Formatting

console.log('Date formatting :\n');

const now = new Date();
const yr = now.getFullYear();               // return year
const mn = now.getMonth()+1;                // return month(0 - 11)
const dt = now.getDate();                   // return date (1 - 31)
const dy = now.getDay();                    //return (0-6)
const hr = now.getHours();                  // return number (0 - 23)
const min = now.getMinutes();               // return number (0 -59)
const sec = now.getSeconds();
const millsec = now.getMilliseconds();
let obj_day = {
    0:'Sunday',
    1:'Monday',
    2:'Tuesday',
    3:'Wednesday',
    4:'Thrusday',
    5:'Friday',
    6:'Saturday'
}
const final_day = obj_day[dy];

console.log(`${dt}/${mn}/${yr} - ${final_day} - ${hr}:${min}:${sec}:${millsec}`)

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Date toString Methods

console.log("Date toString methods :\n")

let D = new Date();
console.log(D.toString());

console.log(D.toISOString());
console.log(D.toUTCString());

console.log(D.toDateString());
console.log(D.toTimeString());

console.log(D.toLocaleString());
console.log(D.toLocaleDateString());
console.log(D.toLocaleTimeString());

console.log("---------------------------------------------------------------------------------------------------------------------------------");
