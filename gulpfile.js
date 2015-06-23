var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    gulp.src('static').pipe(webserver({
        port: 80
    }));
});

gulp.task('default', ['webserver']);
