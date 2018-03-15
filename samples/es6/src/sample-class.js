
class Sample extends Array {
  constructor() {
    super()
  }

  async $query() {
    await this._createPromise()

    console.log('Successfully queried!')

    return [1, 1]
  }

  _createPromise() {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve()
      }, 500)
    })
  }
}

class Unused {
  constructor() {
    console.log('It should be here')
  }

  do() {
    // do some fun stuff
    alert('wow')
  }
}
