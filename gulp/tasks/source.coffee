gulp         = require('gulp-help')(require('gulp'))
plugins      = require('gulp-load-plugins')({ camelize: true })
runSequence  = require 'run-sequence'
mocha        = require 'gulp-spawn-mocha'
concat       = require 'gulp-concat'
ts           = require 'gulp-typescript'
rename       = require 'gulp-rename'

#Transpiles the Typescript into a single Vanilla Javascript library
gulp.task 'source:tsc', false, ()->
  return gulp.src('src/**/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      out: './lib.js',
      removeComments: true
    }))
    .pipe(gulp.dest('build'))
    .pipe(rename('lib.qt.js'))
    .pipe(gulp.dest('app'));

#Wraps the transpiled javascript with a Node.js specific header and footer for testing
gulp.task 'source:wrap', false, ()->
  return gulp.src(['src/header.js','build/lib.js', 'src/footer.js'])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('build'));

#Wraps the transpiled javascript with a Qt specific header and footer
gulp.task 'source:qt:wrap', false, (cb)->
  return gulp.src(['src/qt_header.js','build/lib.qt.js', 'src/qt_footer.js'])
    .pipe(concat('lib.qt.js'))
    .pipe(gulp.dest('app'));

#Runs mocha against all test files in the /test folder
gulp.task 'source:test', false, (cb)->
    gulp.src('./test/**/*.js')
        .pipe(mocha({
          R: 'spec'
        }));

gulp.task 'source',false,(cb)->
  runSequence('source:tsc', 'source:wrap', 'source:qt:wrap', cb)