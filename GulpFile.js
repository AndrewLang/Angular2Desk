'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
var merge = require('merge2');
var concat = require('gulp-concat');
var ts = require('gulp-typescript');
var rename = require('gulp-rename');
var sequence = require('run-sequence');
var shell = require('gulp-shell');
var uglify = require('gulp-uglify');
//var gulpIf   = require('gulp-if');
var del = require('del');

gulp.task('clean', function () {
  return del.sync('dist/*.*');
});

gulp.task('scripts', function () {
  var folder = 'src/app/';
  var tsProject = ts.createProject('tsconfig.json');
  var dist = 'dist';
  return tsProject.src()
    .pipe(ts(tsProject))        // compile with ts configuration
    .pipe(concat('app.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(dist));
});


gulp.task('sass', function () {
  var folder = 'src/assets/styles/';
  var dist = 'dist';
  return merge(
    gulp.src(folder + '*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(minify())
      .pipe(rename({ suffix: '.min' }))
  )
    .pipe(concat('app.css'))
    .pipe(gulp.dest(dist));
});

gulp.task('electron', function () {
  return gulp.src('/')
    .pipe(shell('electron .'));
});

gulp.task('sass:watch', function () {
  gulp.watch('*.scss', ['sass']);
  gulp.watch('*.ts', ['scripts'])
});

gulp.task('start', function (callback) {
  sequence('clean', 'scripts', "sass", "electron", callback);
});

// backup of npm
// tsc && concurrently  && electron .