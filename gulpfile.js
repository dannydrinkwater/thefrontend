var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-cssnano');

gulp.task('html', function(){
  return gulp.src('source/example.html')
    .pipe(gulp.dest('public/'))
});

gulp.task('css', function(){
  return gulp.src('source/scss/main.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'))
});

gulp.task('default', [ 'html', 'css' ]);
