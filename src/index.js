function createCoveragePreprocessor(...args) {
  console.log(...args)

  return function() {}
}

module.exports = {
  'preprocessor:coverage': ['factory', createCoveragePreprocessor]
}
