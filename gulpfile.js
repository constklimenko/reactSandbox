var gulp = require('gulp');

// gulp.task('hello', function(w) {
//     console.log('hello world');
//     w()
// })

var less = require('gulp-less');
var authoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var cleanCss = require('gulp-clean-css');
var browserSync = require('browser-sync').create();


const babel = require('gulp-babel');



var config = {
    path: {
        less: './src/less/*.less',
        html: './react.hostronavt.ru/market_list/index.html',

    },
    output: {
        cssName: 'market_list.css',
        path: './react.hostronavt.ru/market_list/',
        path_css: './react.hostronavt.ru/market_list/static/css/',
        path_file: './react.hostronavt.ru/market_list/index.html',
        path_file_css: './react.hostronavt.ru/market_list/static/css/market_list.css',

    }
}

// info card
// var config = {
//     path: {
//         less: 'info_card/src/less/*.less',
//         html: 'info_card/public/index.html',

//     },
//     output: {
//         cssName: 'bundle.min.css',
//         path: 'info_card/public',
//         path_file: 'info_card/public/index.html',
//         path_file_css: 'info_card/public/bundle.min.css',
//         newHtml: '/tmp/fz3temp-2'
//     }
// }

// лендинг 2
// var config = {
//     path: {
//         less: 'land2/src/less/*.less',
//         html: 'land2/public/l2-index.html',

//     },
//     output: {
//         cssName: 'l2-bundle.min.css',
//         path: 'land2/public',
//         path_file: 'land2/public/l2-index.html',
//         path_file_css: 'land2/public/l2-bundle.min.css',
//         newHtml: '/tmp/fz3temp-2'
//     }
// }

// лендинг 3
// var config = {
//     path: {
//         less: 'land3/src/less/*.less',
//         html: 'land3/public/l3-index.html',

//     },
//     output: {
//         cssName: 'l3-bundle.min.css',
//         path: 'land3/public',
//         path_file: 'land3/public/l3-index.html',
//         path_file_css: 'land3/public/l3-bundle.min.css',
//         newHtml: '/tmp/fz3temp-2'
//     }
// }


// var config = {
//     path: {
//         less: 'bs/src/less/*.less',
//         html: 'bs/public/index.html',

//     },
//     output: {
//         cssName: 'bundle.min.css',
//         path: 'bs/public',
//         path_file: 'bs/public/index.html',
//         path_file_css: 'land2/public/bundle.min.css',
//         newHtml: '/tmp/fz3temp-2'
//     }
// }

gulp.task('less', function () {
    return gulp.src(config.path.less)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat(config.output.cssName))
        .pipe(authoprefixer())
        // .pipe(cleanCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.output.path_css))
        .pipe(browserSync.stream());
});

gulp.task('build', function () {
    return browserify({ entries: './src/jsx/app.jsx', extensions: ['.jsx'], debug: true })
        .transform('babelify', { presets: ['es2015', 'react'] })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('babel', function () {
    return gulp.src('src/jsx/**/*.jsx')
        .pipe(babel())
        .pipe(gulp.dest('static/js'))
});

gulp.task('push', function () {
    return gulp.src(config.output.path_file).pipe(gulp.dest(config.output.newHtml));
});

gulp.task('pushCss', function () {
    return gulp.src(config.output.path_file_css).pipe(gulp.dest(config.output.newHtml));
})

gulp.task('serve', (done) => {
    browserSync.init({
        server: {
            baseDir: config.output.path
        }
    });
    gulp.watch(config.path.less, gulp.series('less')); //, 'push', 'pushCss'));
    gulp.watch(config.path.html).on('change', () => {
        browserSync.reload();
        done();
    });

});

gulp.task('default', gulp.series('less', 'serve'));