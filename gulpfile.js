var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jscsStylish = require('gulp-jscs-stylish');
var jshint = require('gulp-jshint');

gulp.task('default', () =>  {
  gulp.src(['app/**/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jscs())
    .pipe(jscsStylish.combineWithHintResults())
    .pipe(jshint.reporter('jshint-stylish'))
});
