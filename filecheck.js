// Based on workshopper-exercise/filecheck
const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn;

function setup (mode, callback) {
    var submission = this.args[0]

    fs.stat(submission.toString(), function (err, stat) {
	if ((err && err.code == 'ENOENT') || !stat)
	    return callback(new Error(this.__('error.submission_no_file', {submission: path.resolve(submission.toString())})))

	if (err)
	    return callback(err)

	if (!stat.isFile())
	    return callback(new Error(this.__('error.submission_not_regular', {submission: path.resolve(submission.toString())})))

	const tsc = spawn('tsc', [submission])
	tsc.on('error', function (err) {
	    console.error('ERROR EMITTED', err);
	});
	tsc.on('message', function (msg) {
	    console.log('MSG EMITTED', msg);
	});
	tsc.on('exit', function (code, signal) {
	    if (code===0) callback();
	    else console.error(code, signal);
	});
    }.bind(this))
}


function filecheck (exercise) {
    exercise.addSetup(setup)
    return exercise
}


module.exports = filecheck
