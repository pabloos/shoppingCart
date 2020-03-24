
const { roundPipe } = require('../services/round.js')
const { taxPipe, pricePipe } = require('./price')

module.exports = class Ticket {
  constructor (products) {
    this.products = products.map(product => ({ name: product.name, num: product.num, finalPrice: pricePipe(product) }))

    this.totalPrice = this.products.reduce((acc, { finalPrice }) => roundPipe(finalPrice + acc), 0.0) || 0.0

    this.totalTaxes = products.reduce((acc, currProduct) => roundPipe(taxPipe(currProduct) + acc), 0.0) || 0.0
  }
}
