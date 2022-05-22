// 01-capitalize-the-first-letter

const countries = ['india', 'denmark', 'sweden', 'norway', 'iceland', 'india'];

const new_countries = countries.map((e,i,arr) => {
    let str = '';
    str = str + e.charAt(0).toUpperCase() + e.slice(1,e.length);
    return str;
})

console.log(new_countries);

