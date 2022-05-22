
/*
• JSON (JavaScript Object Notation) is a lightweight data-interchange format. 
• It is easy for humans to read and write. It is easy for machines to parse and generate. 
• It is based on a subset of the JavaScript Programming Language Standard ECMA-262 3rd Edition - December 1999. 
• JSON is a text format that is completely language independent but uses conventions that are familiar to 
    programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others.
• These properties make JSON an ideal data-interchange language.
• 
*/

let jsonObj = {
    name : "Arijit",
    gender : "Male",
    id : 69,
    friend : null
}
console.log(jsonObj);

// for(k in jsonObj){
//     console.log(`${k} : ${jsonObj[k]}`);
// }

console.log("-------------------------------------------------------------");

let myJsonStr = JSON.stringify(jsonObj);
console.log(myJsonStr);

console.log("-------------------------------------------------------------");

myJsonStr = myJsonStr.replace("Arijit" , "Sunidhi");
console.log(myJsonStr);

console.log("-------------------------------------------------------------");

let newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj);