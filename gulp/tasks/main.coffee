gulp         = require('gulp-help')(require('gulp'))
plugins      = require('gulp-load-plugins')({ camelize: true })
runSequence  = require 'run-sequence'

global.conf = {
  compress: false
}

gulp.task 'build', false, (cb)->
  runSequence('clean:all', 'source','source:test', cb)

gulp.task 'dist', 'Prepare a release build', (cb)->
  global.conf.compress = true
  runSequence('build', 'version:bump', cb)

gulp.task 'test', 'Default task used for testing', (cb)->
  runSequence('build','watch:test', cb)