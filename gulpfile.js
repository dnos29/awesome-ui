const { src, dest, watch } = require('gulp');
const pug = require('gulp-pug');

const PUG_URL = 'pug/*.pug';
const SCSS_URL = 'scss/**/*.scss';

const sass = require('gulp-sass')(require('sass'));
function css() {
	return src(SCSS_URL)
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('dest/css'));
}
exports.css = css;

function html() {
	return src(PUG_URL)
		.pipe(pug({ pretty: true }))
		.pipe(dest('dest/html'));
}
exports.html = html;

exports.watch = function () {
	watch(SCSS_URL, css);
	watch(PUG_URL, html);
};

exports.build = function (done) {
	css();
	html();
	done();
};
// function defaultTasks(cb) {
// 	console.log('Gulp works');
// 	cb();
// }

// exports.default = defaultTasks;
