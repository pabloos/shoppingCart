const { roundPipe } = require('./round')

const noTaxed = 0.0

module.exports = class TaxCalcService {
  static getSalesTax ({ price, salesTaxed, num }) {
    const salesTaxesPercent = 0.10

    return salesTaxed ? roundPipe(price * salesTaxesPercent * num) : noTaxed
  }

  static getImpTax ({ price, imported, num }) {
    const impTaxesPercet = 0.05

    return imported ? roundPipe(price * impTaxesPercet * num) : noTaxed
  }
}
