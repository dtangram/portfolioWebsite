const gulp = require('gulp'),
  sass = require('gulp-sass'),
  minifyCSS = require("gulp-minify-css"),
  plumber = require("gulp-plumber");

// SASS Styles Task
gulp.task('stylesSCSS', () => gulp.src('sass/main.scss')
  .pipe(sass({
    style: 'expanded',
  }))
  .pipe(plumber())
  .pipe(gulp.dest('css/')));

  //Minify Styles Task
  gulp.task('minify-css', function() {
  	return gulp.src('css/main.css')
  	.pipe(plumber())
  	.pipe(minifyCSS())
  	.pipe(gulp.dest('css/'))
  });

// Watch Tasks
gulp.task('watch', () => {
  gulp.watch(['sass/paricleSysPreload.scss', 'sass/base/base.scss'], ['stylesSCSS']);
	gulp.watch('css/main.css', ["minify-css"]);
});

gulp.task('default', ['watch', 'stylesSCSS', "minify-css"]);
