const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css(done) {
   /*
   COMPILAR SASS
   1. identificar archivo, 2. compilar, 3. guardar el .css
   */
   src('src/scss/app.scss')
      .pipe(sass())
      .pipe(postcss([autoprefixer()]))
      .pipe(dest('build/css'))

   done();
}

function dev() {
   watch('src/scss/**/*.scss', css);
}

exports.css = css;
exports.dev = dev;
//tareas por default
exports.default = series(css, dev);