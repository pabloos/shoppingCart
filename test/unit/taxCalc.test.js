const taxCalc = require('../../services/taxCalc')
const { testCases } = require('./taxCalc.testCases')

describe('TaxCalc Service test suite', () => {
  test('white case: ', async () => {
    const product = {
      name: 'a product',
      price: 12.00,
      num: 1,
      imported: false,
      salesTaxed: false
    }

    const expected = 0.0

    const result = taxCalc.getSalesTax(product)

    expect(result).toBeCloseTo(expected)
  })

  describe('getSalesTax with products cases', () => {
    test.each(testCases)('%s', async (testCase, product, salesTaxexpected) => {
      const result = taxCalc.getSalesTax(product)

      expect(result).toBe(salesTaxexpected)
    })
  })

  describe('getImpTax with products cases', () => {
    test.each(testCases)('%s', async (testCase, product, _, impTaxexpected) => {
      const result = taxCalc.getImpTax(product)

      expect(result).toBe(impTaxexpected)
    })
  })
})
