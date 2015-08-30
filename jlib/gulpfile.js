var gulp  = require('gulp'),
    concat     = require('gulp-concat'),
    uglify     = require('gulp-uglify'),
    rename     = require("gulp-rename"),
    watch     = require('gulp-watch');

var browserify = require('gulp-browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('scripts', function() {
	gulp
    .src('./js/src/main.js')
        .pipe(browserify({
          insertGlobals : false,
          debug : true
        }))
        .pipe(uglify())
        .pipe(rename(function  (path) {
        	path.basename+= ".min";
        	path.extname = ".js";
        }))
        .pipe(gulp.dest('./dist/'))
});


gulp.task('default',['scripts','watch']);

gulp.task('watch',function() {
    gulp.watch('./js/src/source/*.js',['scripts']);  
});

