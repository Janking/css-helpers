'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./style.scss')
    .pipe(sass({
  		outFile: './style.css',
    	outputStyle:'expanded',
    	sourceComments:true,
    	}).on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./**/*.scss', ['sass']);
});