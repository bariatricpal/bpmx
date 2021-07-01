var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin');

var assets = './assets/';

// Concat scripts
gulp.task('scripts', function() {

  var vendorScripts = [
    './bower_components/jquery/dist/jquery.min.js',
  ];

  var appScripts = [
    './_assets/javascripts/helpers/*.js',
    './_assets/javascripts/components/*.js',
  ];

  var allScripts = [
    './assets/vendor.min.js',
    './assets/app.min.js',
  ];

  gulp.src(vendorScripts)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(assets));

  gulp.src(appScripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(assets));

  gulp.src(allScripts)
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(assets));
});

// Compile scss to css
gulp.task('styles', function() {

  var styles = [
    './_assets/stylesheets/*.scss'
  ];

  gulp.src(styles)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(assets));
});

// Watch files
gulp.task('watch', function() {

  gulp.watch('./_assets/**/*.*', ['build']);

});

gulp.task('images', function() {
  gulp.src('_uploads/*')
    .pipe(imagemin())
    .pipe(gulp.dest('_uploads'));
});

gulp.task('minify', ['images']);

gulp.task('build', ['scripts', 'styles']);

gulp.task('serve', ['build', 'watch']);

gulp.task('default', ['build']);
