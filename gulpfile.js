const gulp = require('gulp');
const pug = require('gulp-pug');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const webserver = require('gulp-webserver');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const htmlmin = require('gulp-htmlmin');


/***************************************************/
/*Originators are herre*/
/**************************************************/

gulp.task('webserver', function(){
  gulp.src('dist')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
      open: true,
      fallback: 'hello.html',
    }));
});

gulp.task('sass', function(){
  var plugins = [
    autoprefixer(),
    cssnano(),
  ];
  gulp.src('src/sass/*.scss')
  .pipe(sass())
  .pipe(postcss(plugins))
  .pipe(gulp.dest('dist/css'))
});


/**************************************************/
/*watch squad*/
/**************************************************/

gulp.task('watch-sass',function(){
  gulp.watch('src/sass/*.scss',['sass'])
});

/**************************************************/
/*default*/
/**************************************************/

gulp.task('default',['sass','watch-sass']);
