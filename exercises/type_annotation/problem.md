One way to take advantage of TypeScript's type system is by giving it type annotations. That way the compiler knows to reject certain kinds of input. 

For example, you might have defined a function that takes a string and returns its length.

```js
function strLen (input) {
    return input.length;
}
console.log(strLen('javascript')) // -> 10
console.log(strLen(42)) // -> undefined
```

Such a function would return the number 10 if given the string 'javascript'. It will also return 'undefined' if passed an unexpected value, such as a number. Instead of being thrown as an error, this undefined return value will most likely  bubble up into a bigger problem down the road.

To tell the compiler that a function only accepts a certain type of input, we use a type annotation like so:

```js
function strLen (input: string) {
    return input.length;
}
```

Besides string, some of the basic types include boolean and number.

For this exercise, define a function that accepts a number as an input and returns that number times 2. Include a type annotation to tell the compiler to expect a number as the input.

After you've defined the function, invoke it with the first command line argument (process.argv[2]), and log the result to the console.

You'll submit a TypeScript file (.ts), and the verify script will compile it to JavaScript before verifying the submission.

----------------------------------------------------------------------
## HINTS

If we were submitting the above function, our file would look like so:
```js
// This first line assures TypeScript that we'll have the process variable available at runtime
declare var process;

function strLen (input: string) {
    return input.length;
}
console.log(strLen(process.argv[2]))
```

----------------------------------------------------------------------