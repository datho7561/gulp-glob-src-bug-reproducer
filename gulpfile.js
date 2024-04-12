const gulp = require('gulp');

gulp.task('my-broken-task', (done) => {
  gulp.src('./libs/*.jar')
    .pipe(gulp.dest('.'))
  done();
});
