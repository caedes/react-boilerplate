var gulp = require('gulp');
var browserify = require('browserify');
var glob = require('glob');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var eventStream = require('event-stream');
var config = require('../../config/gulp.json');

var src = config.browserify.src.toString();
var scripts = config.browserify.scripts.toString();

gulp.task('browserify', function() {
  glob(scripts, {cwd: src}, function(err, files) {
    var tasks = files.map(function(file) {
      return browserify({ entries: [src + file] })
        .bundle()
        .pipe(source(file))
        .pipe(rename({ extname: config.browserify.extname }))
        .pipe(gulp.dest(config.browserify.build));
      });
    return eventStream.merge.apply(null, tasks);
  })
});

gulp.task('browserify:build', function() {
  glob(scripts, {cwd: src}, function(err, files) {
    var tasks = files.map(function(file) {
      return browserify({ entries: [src + file] })
        .bundle()
        .pipe(source(file))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(rename({ extname: config.browserify.extname }))
        .pipe(gulp.dest(config.browserify.build));
      });
    return eventStream.merge.apply(null, tasks);
  })
});
