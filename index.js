/* 20171006 DM LHL w1d5 Testing chalk exercise.


*/

var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);
message = "Hello " + chalk.bgMagenta("World");
console.log(message);

////////////////////////////////////////////
// Example of all colours from;
//https://github.com/chalk/chalk/blob/master/examples/screenshot.js
/////////////////////////////////////////////
//const chalk = require('..');
const styles = require('ansi-styles');

// Generates screenshot
for (const key of Object.keys(styles)) {
  let ret = key;

  if (key === 'reset' || key === 'hidden' || key === 'grey') {
    continue;
  }

  if (/^bg[^B]/.test(key)) {
    ret = chalk.black(ret);
  }

  process.stdout.write(chalk[key](ret) + ' ');
}