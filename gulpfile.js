'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

//compile
gulp.task('sass',function(done){
    gulp.src('src/app/sass/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('src/app/css'))
    done();
});

//compile and watch
gulp.task('sass:watch', function() {
    gulp.watch('src/app/sass/*.scss',gulp.series('sass'));
    
   });