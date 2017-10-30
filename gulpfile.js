var gulp      = require('gulp');
var sass      = require('gulp-sass');
var minifyCSS = require('gulp-cssnano');
var concat    = require('gulp-concat');
var uglify    = require('gulp-uglify');
var imagemin  = require('gulp-imagemin');

gulp.task('css', function(){
  return gulp.src('source/scss/main.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'));
});

gulp.task('js', function() {
  return gulp.src(['source/js/plugins/*.js', 'source/js/main.js'])
    .pipe(concat('main.js'))
    .pipe(
        uglify().on('error', (error) => {
            console.log(error.message + ' on ' + error.lineNumber);
        })
    )
    .pipe(gulp.dest('public/js'));
});

gulp.task('img', () =>
    gulp.src('source/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img'))
);

gulp.task('default', [ 'css', 'js', 'img' ]);