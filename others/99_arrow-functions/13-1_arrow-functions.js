

function greet(){
    console.log("hola");
}
greet();

console.log("-------------------------------------------------------------------------------");

let greet2 = ()=>{
    console.log("amigo");
}
greet2();

console.log("-------------------------------------------------------------------------------");

setTimeout(()=>{
    console.log("damn");
},5000)

console.log("-------------------------------------------------------------------------------");

let sum = (a,b)=>{
    return a+b;
}
console.log(sum(4,5));

let sum2 = (a,b)=> a+b;
console.log(sum2(4,5));

let half = a => a/2;        //for one argument
console.log(half(22));

console.log("-------------------------------------------------------------------------------");

let obj1 = {
    greetings : "Hola amigos - ",
    names : ["arijit", "rohan", "vivek", "sunidhi"],
    speak(){
        this.names.forEach(function f(elements){
            console.log("1 - " + obj1.greetings + elements);        //cannot use this.greetings
        })
    },

    speak2(){
        this.names.forEach((elements)=>{
            console.log("2 - " + this.greetings + elements);
        })
    }
}

obj1.speak();
obj1.speak2();