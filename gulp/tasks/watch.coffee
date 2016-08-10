gulp         = require('gulp-help')(require('gulp'))
plugins      = require('gulp-load-plugins')({ camelize: true })

gulp.task 'watch', false, (cb)->
  server = plugins.developServer
  server.listen({path:'./build/app.js'},plugins.livereload.listen)
  gulp.watch ['./src/*.ts','./src/**/*.{ts,js}','!./src/assets/**/*.{ts,js}'], ['source:typescript:backend', 'source:test']
  gulp.watch './test/**/*.js', ['source:test']
  gulp.watch(['./build/app.js','./build/**/*.js','!./build/public/**/*.*']).on 'change', (file)->
    server.changed (err)->
      if !err
        plugins.livereload.changed(file.path)
      else
        plugins.util.log err

gulp.task 'watch:test', false, (cb)->
  gulp.watch ['./src/*.ts','./src/**/*.{ts,js}','!./src/assets/**/*.{ts,js}'], ['source:typescript:backend', 'source:test']
  gulp.watch './test/**/*.js', ['source:test']