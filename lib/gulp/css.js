var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var config = require('../../config/gulp.json');

gulp.task('css', function () {
  gulp.src(config.sass.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: config.sass.includePaths,
      indentedSyntax: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.sass.build));
});

gulp.task('css:build', function () {
  gulp.src(config.sass.src)
    .pipe(sass({
      includePaths: config.sass.includePaths,
      indentedSyntax: true
    }))
    .pipe(gulp.dest(config.sass.build));
});
