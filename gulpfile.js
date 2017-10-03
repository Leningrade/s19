const gulp = require('gulp');
const pug = require('gulp-pug');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const webserver = require('gulp-webserver');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
/***************************************************/
/*Paths*/
/**************************************************/
const   jsFiles = 'src/js/*.js';
const   jsDest =  'dist/js';
const serializer = 'node_modules/form-serializer/dist/jquery.serialize-object.min.js';
const jQuery = 'node_modules/jquery/dist/jquery.min.js'


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

gulp.task('scripts',function(){
  return gulp.src([jsFiles])
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest(jsDest))
  .pipe(rename('scripts.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(jsDest));

  return gulp.src([jQery, serializer])
  .pipe(concat('modules.js'))
  .pipe(gulp.dest(jsDest))
  .pipe(rename('modules.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(jsDest));
});


/**************************************************/
/*watch squad*/
/**************************************************/

gulp.task('watch-sass',function(){
  gulp.watch('src/sass/*.scss',['sass'])
});

gulp.task('watch-scripts', function(){
  gulp.watch(jsFiles, ['scripts'])
})

/**************************************************/
/*default*/
/**************************************************/

gulp.task('default',['sass','watch-sass', 'scripts', 'watch-scripts']);
