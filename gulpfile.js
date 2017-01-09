// "use strict";

var gulp = require('gulp');
var jshint = require('gulp-jshint');
gulp.task('serve', function(){
 require('./index.js');
});
// gulp.task('default',['jshint','test','serve']);

// gulp.task('jshint',()=>{
//   return gulp.src('./*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'));
// })
// .task('test',()=>{
//   require('./tests/*.js');
// })
// .task('serve',()=>{
//   require('./index.js');
// });