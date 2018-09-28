var args = process.argv.slice(2);
var sum = args.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
});

console.log(sum);