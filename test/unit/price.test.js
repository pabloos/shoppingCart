const { pricePipe, taxPipe } = require('../../core/price')
const { testCases } = require('./price.testCases')

describe('price file test suite', () => {
  describe('taxPipe tests', () => {
    test.each(testCases)('%s', async (_, taxPipeTestCase, product, taxExpected) => {
      const result = taxPipe(product)

      expect(result).toBeCloseTo(taxExpected)
    })
  })

  describe('pricePipe tests', () => {
    test.each(testCases)('%s', async (pricePipeTestCase, _, product, taxExpected, priceExpected) => {
      const result = pricePipe(product)

      expect(result).toBeCloseTo(priceExpected)
    })
  })
})
