function strLen(input) {
    return input.length;
}
function divisibleByThree(input) {
    return input % 3 === 0;
}
var args = process.argv.slice(2);
args.forEach(function (arg) {
    console.log(divisibleByThree(strLen(arg)));
});
