/*global -$ */
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var minifyCSS = require('gulp-minify-css');

gulp.task('css', function() {
  return gulp.src('css/kick-ie.css')
    .pipe(gulp.dest('.tmp'))
    .pipe($.rename('kick-ie.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'));
});

gulp.task('jshint', function() {
  return gulp.src('js/kick-ie.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('default'));
});

gulp.task('js', ['jshint'], function() {
  return gulp.src('js/kick-ie.js')
    .pipe(gulp.dest('.tmp'))
    .pipe($.rename('kick-ie.min.js'))
    .pipe($.uglify())
    .pipe(gulp.dest('js'));
});

gulp.task('clean', require('del').bind(null, ['.tmp']));

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['jshint', 'js']);
});

gulp.task('build', ['css', 'js'], function() {
  console.log('gg');
});

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
