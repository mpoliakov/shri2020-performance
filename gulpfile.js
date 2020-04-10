const gulp = require("gulp");
const svgmin = require("gulp-svgmin");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

gulp.task('svgmin', function () {
    return gulp.src('img/*.svg')
        .pipe(svgmin({
            plugins: [{
                removeViewBox: false
            }]
        }))
        .pipe(gulp.dest('img'));
});

gulp.task("csso", function () {
    return gulp.src("css/*.css")
        .pipe(csso())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("css"));
});

gulp.task('uglify', function () {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js'));
});

gulp.task("images", function () {
    return gulp.src("img/*.{png,jpg}")
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.mozjpeg ({progressive: true})
        ]))
        .pipe(gulp.dest("img"));
});
