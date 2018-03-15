const path = require('path')
const istanbul = require('istanbul-api')

function createCoveragePreprocessor() {
  let instrumentor = istanbul.libInstrument.createInstrumenter()
  return function(content, file, done) {
    try {
      let instrumented = instrumentor.instrumentSync(content, path.resolve(file.originalPath))
      done(instrumented)
    } catch (error) {
      done(error.message)
    }
  }
}

createCoveragePreprocessor.$inject = [
  // 'args', 'logger'
]

module.exports = {
  'preprocessor:coverage-istanbul': ['factory', createCoveragePreprocessor]
}
