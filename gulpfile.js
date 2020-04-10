const gulp = require("gulp");
const svgmin = require("gulp-svgmin");
const csso = require("gulp-csso");
const rename = require("gulp-rename");

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

