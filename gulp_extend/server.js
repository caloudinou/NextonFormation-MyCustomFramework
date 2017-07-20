/**
 * Created by 90001054 on 17/07/2017.
 */
const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('server-run', ()=>{
  let stream = gulp.src('./tmp')
                  .pipe(webserver({
                    port: '4200',
                    fallback: 'index.html',
                    livereload: true,
                    open: '/'
                  }));
  stream.emit('kill');
});