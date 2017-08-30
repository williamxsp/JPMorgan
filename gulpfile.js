var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


const paths = {
  sass: ['./src/scss/**/*.scss'],
  css: ['./css/**/*.css'],
  html:['./src/**/*.html'],
  script:['./src/js/**/*.js'],
  image:['./src/img/**/**'],
  download:['./src/**/*.pdf']
}

gulp.task('sass', function () {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream())
});
 

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('watch', () => {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.sass, ['css']).on('change', browserSync.reload);
  gulp.watch(paths.html, ['copy']).on('change', browserSync.reload);
  gulp.watch(paths.script, ['copy']).on('change', browserSync.reload);
  gulp.watch(paths.image, ['copy']).on('change', browserSync.reload);
  gulp.watch(paths.download, ['copy']).on('change', browserSync.reload);
});

gulp.task('copy', () => {
  gulp.src(['./src/**/**', '!./src/scss'])
    .pipe(gulp.dest('./build'))
});

gulp.task('default', ['watch', 'browser-sync', 'sass', 'copy']);