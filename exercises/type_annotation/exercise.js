var exercise = require('workshopper-exercise')();
// const filecheck = require('workshopper-exercise/filecheck');
// Override the default filecheck
const filecheck = require('../../filecheck');
// const execute = require('workshopper-exercise/execute');
// Override the default execute
const execute = require('../../execute');
const comparestdout = require('workshopper-exercise/comparestdout');
var path = require('path');

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

exercise.addSetup(function (mode, callback) {
    // create a random argument
    var args = [ rndint() ]

    // supply the args to the 'execute' processor for both
    // solution and submission spawn()
    this.submissionArgs = this.solutionArgs = args

    process.nextTick(callback)
})

module.exports = exercise;
