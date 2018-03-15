const gulp = require('gulp')
const karma = require('karma')
const path = require('path')

gulp.task('default', function(done) {
  const karmaConfig = karma.config.parseConfig(path.join(__dirname, 'samples', 'es6', 'karma.conf.js'))
  let server = new karma.Server(karmaConfig, function(exitCode) {
    if (exitCode !== 0) {
      done(new Error(`Karma failed with code ${exitCode}`))
    } else {
      done()
    }
  })
  
  server.on('run_complete', function(browsers, result) {
    karma.stopper.stop(karmaConfig, function() {})
  })

  server.start()
})
