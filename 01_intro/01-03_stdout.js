const a = '55';

console.log('count: %d %s %m', a, a, a);
console.log('Hello World');

process.stdout.write("Hello");
process.stdout.write(" World");

// process.stdout.write('\033[0G');

process.stdout.write('newstuff');

// process.stdout.write('\033[0G');
// process.stdout.write("received: "  + "\x1B[0G");