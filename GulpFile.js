'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var merge = require('merge2');
var ts = require('gulp-typescript');

gulp.task('scripts', function () {
  var result = gulp.src('*.ts')
    .pipe(ts({
      declarationFiles: true,
      noExternalResolve:true,
      noImplicitAny:true
    }));
});

gulp.task('sass', function () {
  gulp.src('*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
  gulp.watch('*.scss', ['sass']);
  gulp.watch('*.ts', ['scripts'])
});