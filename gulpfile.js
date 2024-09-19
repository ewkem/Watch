const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const clean = require('gulp-clean');
const fs = require('fs');
//const groupMedia = require('gulp-group-css-media-queries');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const htmClean = require('gulp-htmlclean');

gulp.task('clean', function (done) {
	if (fs.existsSync('./#dist/')) {
		return gulp.src('./#dist/', { read: false })
			.pipe(clean());
	}
	done();
});

const fileIncludeSettings = {
	prefix: '@@',
	basepath: '@file'
};

gulp.task('html', function () {
	return gulp.src('./#Source/*.html')
		.pipe(fileInclude(fileIncludeSettings))
		.pipe(htmClean())
		.pipe(gulp.dest('./'))
});
/* 
gulp.task('sass', function () {
	return gulp
		.src('./#Source/scss/*.scss')
		.pipe(groupMedia())
})
*/

gulp.task('images', function () {
	return gulp
		.src('./_img/**/*')
		.pipe(changed('./img/'))
		.pipe(imagemin({ verbose: true }))
		.pipe(gulp.dest('./img/'))
})

gulp.task('watch', function () {
	gulp.watch('./#Source/*.html', gulp.parallel('html'));
	gulp.watch('./_img/**/*', gulp.parallel('images'));
});



gulp.task('default', gulp.series(
	'clean',
	gulp.parallel('html', 'images'),
	gulp.parallel('watch')
));