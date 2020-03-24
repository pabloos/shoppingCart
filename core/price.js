const { roundPipe } = require('../services/round.js')
const TaxCalcService = require('../services/taxCalc.js')

const quantityPrice = ({ price, num }) => roundPipe(price * num)

const pricePipeGenerator = (...fns) => product => fns.reduce((acc, curr) => roundPipe(curr(product) + acc), 0.0)

exports.pricePipe = pricePipeGenerator(TaxCalcService.getSalesTax, TaxCalcService.getImpTax, quantityPrice)
exports.taxPipe = pricePipeGenerator(TaxCalcService.getSalesTax, TaxCalcService.getImpTax)
