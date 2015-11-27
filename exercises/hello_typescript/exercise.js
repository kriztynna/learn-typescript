var exercise = require('workshopper-exercise')();
// const filecheck = require('workshopper-exercise/filecheck');
// Override the default filecheck
const filecheck = require('../../filecheck');
const execute = require('workshopper-exercise/execute');
const comparestdout = require('workshopper-exercise/comparestdout');

// checks that the submission file actually exists
 exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise);

module.exports = exercise;
