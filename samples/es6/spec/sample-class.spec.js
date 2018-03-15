
describe("Sample class", () => {
  let sample

  beforeEach(() => {
    sample = new Sample()
  })

  describe('async query()', () => {
    let result
    beforeEach(async (done) => {
      result = await sample.$query()
      done()
    })

    it('should return correct result', () => {
      expect(result).toEqual([1, 1])
    })
  })
})
