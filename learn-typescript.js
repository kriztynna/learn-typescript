const workshopper = require('workshopper');
const path = require('path');

function fpath (f) {
    return path.join(__dirname, f)
};

workshopper({
    name        : 'learn-typescript',
    title       : 'Learn TypeScript',
    subtitle    : 'Learn the basics of TypeScript and start using static typing in JavaScript.',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
});
