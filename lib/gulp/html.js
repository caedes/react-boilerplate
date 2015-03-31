var gulp  = require('gulp');
var jade = require('gulp-jade');

var config = require('../../config/gulp.json');

gulp.task('html', function () {
  gulp.src(config.jade)
    .pipe(jade())
    .pipe(gulp.dest(config.build));
});
