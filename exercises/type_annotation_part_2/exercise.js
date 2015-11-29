var exercise = require('workshopper-exercise')();
// const filecheck = require('workshopper-exercise/filecheck');
// Override the default filecheck
const filecheck = require('../../filecheck');
// const execute = require('workshopper-exercise/execute');
// Override the default execute
const execute = require('../../execute');
const comparestdout = require('workshopper-exercise/comparestdout');
const randomstring = require('randomstring');

// checks that the submission file actually exists
 exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise);

// generate a random positive integer <= 100
function rndint () {
    return Math.ceil(Math.random() * 100)
}

// generate a random string of length <= 100
function rndstr () {
    return randomstring.generate({length: rndint(), charset: "alphabetic"})
}

function strList () {
    var canReturn = false;
    var list = [ rndstr() ];
    while (!canReturn) {
	var newStr = rndstr()
	list.push(newStr);
	if (!canReturn && newStr.length%3===0) canReturn = true;
    }
    while ( Math.random() > 0.3 ) {
	list.push(rndstr());
    }
    return list;
};

exercise.addSetup(function (mode, callback) {
    // create a list of random argument
    var args = strList();

    // supply the args to the 'execute' processor for both
    // solution and submission spawn()
    this.submissionArgs = this.solutionArgs = args

    process.nextTick(callback)
})

module.exports = exercise;
