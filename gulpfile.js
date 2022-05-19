const gulp = require('gulp'),
      browserSync = require('browser-sync'),
      sass = require('gulp-sass')(require('sass')),
      clenCSS = require('gulp-clean-css'),
      autoprefixer = require('gulp-autoprefixer'),
      rename = require('gulp-rename'),
      imagemin = require('gulp-imagemin'),
      htmlmin = require('gulp-htmlmin');

gulp.task('server', function(){
    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("scr/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function(){
    return gulp.src("src/scss/**/main.scss")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '.min', prefix: ''}))
    .pipe(autoprefixer())
    .pipe(clenCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task('watch', function(){
    gulp.watch("src/scss/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
});

gulp.task('html', function (){
    return gulp.src("src/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("dist/"));
});

gulp.task('scripts', function () {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"));
});

gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task('images', function (){
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'html', 'images'));
