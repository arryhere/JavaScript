let dots = '';
process.stdout.write(`Loading `);

const load = setInterval(() => {
    dots += '.';
    process.stdout.write(`\rLoading ${dots}`);
}, 1000);

setTimeout(() => {
    clearInterval(load);
    console.log(`\rLoaded in [3500 ms]`);
}, 3500);
