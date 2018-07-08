var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
gulp.task('sass', function () {
	return sass('sass/*.sass').pipe(gulp.dest('css'))
});
gulp.task('default',function () {
	
});