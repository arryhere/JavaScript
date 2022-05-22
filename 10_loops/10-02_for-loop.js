
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 10; i > 0; i--) {
    console.log(i);
}

for (let i = 0; i <= 5; i++) {
    let j = 5;
    console.log(`${i} * ${j} = ${i * j}`);
}

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Adding all elements in the array

console.log("Adding all elements in the array :\n");

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Creating a new array based on the existing array

console.log("Creating a new array based on the existing array :\n");

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];

const newArr = new Array(0);

for (let i = 0; i < numbers.length; i++) {
    newArr.push(countries[i] + " - Earth");
}

console.log(newArr);