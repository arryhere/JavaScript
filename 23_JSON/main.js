/*
• JSON stands for 'JavaScript Object Notation'
• JSON is a text format for storing and transporting data
• JSON is "self-describing" and easy to understand

• JSON Values
    In JSON, values must be one of the following data types:

    string
    number
    object
    array
    boolean
    null

    In JavaScript values can be all of the above, plus any other valid JavaScript expression, including:

    function
    date
    undefined 
*/


let json = JSON.parse(`{
    "firstName": "Arijit",
    "lastName": "Das",
    "age": 22,
    "isHuman": true,
    "food": ["Top Ramen", "Frooti", "Cheese Sticks"],
    "address": {
        "country": "India",
        "state": "West Bengal",
        "city": "Kolkata"
    }
}`)

console.log(json);
console.log(JSON.stringify(json, ["age", "food", "lastName"], 8));

console.log(json["firstName"] + json["lastName"]);
console.log(json["address"]);
console.log(json["address"]["city"]);


console.log("---------------------------------------------------------------------------------------------------------------------------------");


let jsonArr = `[
    {"firstName": "Arijit", "lastName": "Das"},
    {"age": 22, "gender": "male"},
    ["Inida", "West Bengal", "Kolkata"]
]`

console.log(typeof jsonArr, jsonArr);

console.log(JSON.parse(jsonArr));


console.log("---------------------------------------------------------------------------------------------------------------------------------");

const usersText = `{
    "users":[
        {
            "firstName":"Arijit",
            "lastName":"Das",
            "age":22,
            "email":"arijit@sample.email"
        },
        {
            "firstName":"Divya",
            "lastName":"Jian",
            "age":22,
            "email":"divya@sample.email"
        },
        {
            "firstName":"Vivek",
            "lastName":"Bhansal",
            "age":23,
            "email":"vivek@sample.email"
        }
    ]
}`

const usersObj = JSON.parse(usersText, (key, value) => {
    let newValue;
    typeof value === 'string' && key !== 'email' ? newValue = value.toUpperCase() : newValue = value;
    return newValue;
})
console.log(usersObj)


console.log("---------------------------------------------------------------------------------------------------------------------------------");