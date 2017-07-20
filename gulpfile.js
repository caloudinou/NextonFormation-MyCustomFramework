/**
 * Created by 90001054 on 17/07/2017.
 */
const gulp = require('gulp');

const param = require('./gulp_extend/param');
const runSequence = require('run-sequence');
require('./gulp_extend/server');


gulp.task('default-watch', () => {
  gulp.watch(['./app'],['copy']);
});

gulp.task('copy', () => {
  return gulp.src('./app/**').pipe(gulp.dest('./tmp/.'));
});

gulp.task('serve', (callBack) => {
  runSequence(['copy', 'default-watch'],['server-run'],callBack);
});

// minification html js Only prod
// [Postcss next-css clean]
// testUnitaire // jasmine ou mocha