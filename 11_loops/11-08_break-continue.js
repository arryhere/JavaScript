/*
• JavaScript Break and Continue

• The break statement "jumps out" of a loop.
• The continue statement "jumps over" one iteration in the loop.
*/

console.log("---------------------------------------------------------------------------------------------------------------------------------");

//Break

console.log("Break :\n");

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}

console.log("---------------------------------------------------------------------------------------------------------------------------------");

//Continue

console.log("Continue :\n");

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i)
}

console.log("---------------------------------------------------------------------------------------------------------------------------------");