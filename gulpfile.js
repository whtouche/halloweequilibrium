var gulp = require('gulp');
var config = require('./gulp.config')();
var path = require('path');
var glp = require('gulp-load-plugins')({ lazy: true });

gulp.task('help', glp.taskListing);
gulp.task('default', ['help']);

gulp.task('styles', function () {
	log('Compiling Less to CSS');

	return gulp
		.src(config.less)
		.pipe(glp.plumber())
		.pipe(glp.less())
		.pipe(glp.autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
		.pipe(gulp.dest(config.temp));
});

gulp.task('wiredep', function () {
	log('Wiring up the bower css, js, and our app js into the html');

	var options = config.getWiredepDefaultOptions();
	var wiredep = require('wiredep').stream;
	var jsFiles = gulp.src(config.js);

	return gulp
		.src(config.index)
		.pipe(wiredep(options))
		.pipe(glp.inject(jsFiles))
		.pipe(gulp.dest(config.client));
});

gulp.task('inject', ['wiredep', 'styles'], function () {
	log('Wiring up the bower css, js, and our app js into the html');

	var cssFiles = gulp.src(config.css);

	return gulp
		.src(config.index)
		.pipe(glp.inject(cssFiles))
		.pipe(gulp.dest(config.client));
});

//==========Helper functions

function log(msg) {
	if (typeof (msg) === 'object') {
		for (var item in msg) {
			if (msg.hasOwnProperty(item)) {
				glp.util.log(glp.util.colors.blue(msg[item]));
			}
		}
	} else {
		glp.util.log(glp.util.colors.blue(msg));
	}
}