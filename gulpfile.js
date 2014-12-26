var gulp       = require('gulp');
var gulpBrow   = require('gulp-browserify');
var concat     = require('gulp-concat');
var clean      = require('gulp-clean');
var uglify     = require('gulp-uglify');

// var sourcemaps = require('gulp-sourcemaps');
// var gzip       = require('gulp-gzip');
// var browserify = require('browserify');
// var source = require('vinyl-source-stream');
// var coffeex    = require('gulp-coffee-react');


var config = {
    distFolder: 'app/dist',
    srcFolder: ['app/**/*.coffee'],
    distName: 'app',
    scripts: ['app/main.coffee'],
    styles: ['node_modules/bootstrap/dist/**']
};

gulp.task('clean', function() {
    gulp.src(config.distFolder + '/**/*.js', {read: false})
    .pipe(clean());
});

gulp.task('scripts', function() {
    gulp.src(config.scripts,  { read: false })
    .pipe(gulpBrow({
        // insertGlobals : true,
        // debug : !gulp.env.production,
        // exclude: ['jquery', 'lodash', 'bootstrap', 'react', 'flux'],
        transform: ['coffee-reactify'],
        extensions: ['.coffee']
    }))
    // .pipe(sourcemaps.init())
    .pipe(concat(config.distName + '.js'))
    // .pipe(uglify())
    // .pipe(gzip())
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.distFolder))
});

// gulp.task('build', function() {
//     gulp.src('app/**/*.coffee')
//     .pipe(coffeex({ bare: true }))
//     .pipe(gulp.dest('build'));

//     browserify('./build/main.js')
//     .bundle()
//     .pipe(source('app.js'))
//     .pipe(gulp.dest('./app/dist/'));
// });

gulp.task('styles', function() {
    gulp.src(config.styles)
    .pipe(gulp.dest(config.distFolder))
});

gulp.task('watch', function() {
    gulp.watch(config.srcFolder, ['scripts']);
});

gulp.task('default', ['clean', 'scripts', 'styles']);
