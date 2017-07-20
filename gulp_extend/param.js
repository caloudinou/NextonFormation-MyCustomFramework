const gulp = require('gulp');
const param = require('./parametters.json');
/**
 * show params
 */
gulp.task('param',() => {
  let environment = process.argv.find( argument => new RegExp('--env=').test(argument)).split('=')[1];
  console.log(param[environment]);
  return param[environment];
});