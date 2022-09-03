alert('Welcome to Guess the Number game !');

function getRandomNo(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
};
let max;
let min;

while (true) {
    max = Number(prompt('Enter the max range number'));
    if (Number.isNaN(max)) {
        alert('Please enter a valid number')
    } else {
        break;
    }
}

while (true) {
    min = Number(prompt('Enter the min range number'));
    if (Number.isNaN(min)) {
        alert('Please enter a valid number')
    } else {
        if (min >= max) {
            alert(`Minimum number cannot be greater than or equal to: ${max}`)
        } else {
            break;
        }
    }
}

const generatedNumber = getRandomNo(Number(min), Number(max));

let tries = 1;
const totalScore = 100;

while (true) {
    const guess = Number(prompt('Guess the number'));
    if (guess === generatedNumber) {
        alert(`Congratulation you guessed right\nTotal tries: ${tries}\nTotal score: ${totalScore - tries + 1}`);
        break;
    } else if (guess > generatedNumber) {
        tries++;
        alert(`Try a lower number`);
    } else {
        tries++;
        alert(`Try a higher number`);
    }
}
