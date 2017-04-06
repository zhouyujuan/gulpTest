// var gulp = require('gulp');


// gulp.task('my task1',function(){
// 	console.log('task1');
// });

// gulp.task('my task2',function(){
// 	console.log('task2');
// });

// // default 是默认的任务，这个默认的任务依托于 后面的两个任务
// gulp.task('default',['my task1','my task2'],function(){
// 	console.log('hello gulp');
// });

var gulp = require('gulp');
var react = require('gulp-react');
var babel = require('gulp-babel');
var less = require('gulp-less');
var sass = require('gulp-sass');
var jsamine = require('gulp-jasmine');
var mocha = require('gulp-mocha');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');


gulp.task('less',function(){
	return gulp.src('./src/css1.less')
	.pipe(less())
	.pipe(gulp.dest('./dest'));
});

gulp.task('sass',function(){
	return gulp.src('./src/css2.scss')
	.pipe(sass())
	.pipe(gulp.dest('./dest'));
});

gulp.task('jasmine',function(){
	return gulp.src('./src/test1.js')
	.pipe(jsamine());
});

gulp.task('mocha test',function(){
	return gulp.src('./src/test2.js')
	.pipe(mocha());
});

gulp.task('browserify',function(){
	return gulp.src('./src/main.js')
	.pipe(browserify())
	.pipe(gulp.dest('./build'));
});

gulp.task('uglify',function(){
	return gulp.src('./src/index.js')
	.pipe(uglify())
	.pipe(gulp.dest('./indextDest'));
})


gulp.task('default',['less','sass','jasmine','mocha test','browserify','uglify'],function(){
	return gulp.src('./src/myui.js')
	.pipe(react())
	.pipe(babel({
		presets:['babel-preset-es2015']
	}))
	.pipe(gulp.dest('./dest'));
})