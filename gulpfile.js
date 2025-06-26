const { src,dest, watch, parallel, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')

function css( done ){
    //compilar sass
    // pasos: 1 - Identificar archivo, 2 - Compilar, 3 - guardar el .css
    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe(postcss([ autoprefixer() ]))
        .pipe( dest('build/css') )

    done()
}
function dev(){
    watch( 'src/scss/**/*.scss', css )
}

exports.css = css; 
exports.dev = dev;
exports.default = series(css, dev);

// SERIES - Se inicia una tarea y hasta que  finaiza inicia la siguiente
// PARALLEL - Todas inician al mismo tiempo