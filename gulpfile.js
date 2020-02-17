const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');

// SASS Styles Task
gulp.task('stylesSCSS', () => gulp.src('sass/main.scss')
  .pipe(sass({
    style: 'expanded',
  }))
  .pipe(plumber())
  .pipe(gulp.dest('css/')));

// Watch Tasks
gulp.task('watch', () => {
  gulp.watch('sass/base/base.scss', ['stylesSCSS']);
});

gulp.task('default', ['watch', 'stylesSCSS']);
