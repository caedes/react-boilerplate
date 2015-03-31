var gulp  = require('gulp');
var jade = require('gulp-jade');

var jade_paths = 'src/**/*.jade';

gulp.task('html', function () {
  gulp.src(jade_paths)
    .pipe(jade())
    .pipe(gulp.dest('public'));
});
