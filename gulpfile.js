const gulp = require("gulp");
const svgmin = require("gulp-svgmin");

gulp.task('svgmin', function () {
    return gulp.src('img/*.svg')
        .pipe(svgmin({
            plugins: [{
                removeViewBox: false
            }]
        }))
        .pipe(gulp.dest('img'));
});
