declare var process;

function double(input: number):number {
    return input * 2;
}

console.log(double(process.argv[2]));