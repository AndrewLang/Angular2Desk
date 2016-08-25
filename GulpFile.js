'use strict';

var gulp    = require('gulp');
var sass    = require('gulp-sass');
var minify  = require('gulp-minify-css');
var merge   = require('merge2');
var ts      = require('gulp-typescript');
var rename  = require('gulp-rename');
var sequence = require('run-sequence');
var shell    = require('gulp-shell');

gulp.task('scripts', function () {
  var folder = 'src/app/';
  var tsProject = ts.createProject('tsconfig.json');
  var result = tsProject.src()  
    .pipe(ts(tsProject))
    .pipe(gulp.dest(folder));
});


gulp.task('sass', function () {
  var folder = 'src/assets/styles/';
  gulp.src( folder + '*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(folder));
});

gulp.task('electron', function(){
  return gulp.src('/')
      .pipe(shell('electron .'));
});

gulp.task('sass:watch', function () {
  gulp.watch('*.scss', ['sass']);
  gulp.watch('*.ts', ['scripts'])
});

gulp.task('start', function(callback){
  sequence( 'scripts', "sass","electron", callback );
});

// backup of npm
// tsc && concurrently  && electron .