declare var process;

function strLen (input: string):number {
    return input.length;
}

function divisibleByThree (input: number): boolean {
    return input%3===0;
}

let args = process.argv.slice(2);

args.forEach(function (arg) {
    console.log( divisibleByThree( strLen(arg) ) )
})