var gulp  = require('gulp');
var livereload = require('gulp-livereload');

var config = require('../../config/gulp.json');

gulp.task('watch', function() {
  livereload.listen();

  gulp.watch(config.jade, ['html']).on('change', livereload.changed);
});
