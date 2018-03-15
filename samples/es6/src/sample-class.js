
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

