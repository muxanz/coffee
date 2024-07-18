const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done) {
   /*
   COMPILAR SASS
   1. identificar archivo, 2. compilar, 3. guardar el .css
   */
   src('src/scss/app.scss')
      .pipe(sass())
      .pipe(dest('build/css'))

   done();
}

exports.css = css;