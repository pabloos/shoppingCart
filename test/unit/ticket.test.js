const Ticket = require('../../core/ticket')
const { testCases } = require('./ticket.testCases')

describe('Ticket class test suite', () => {
  test('zero values => empty ticket', async () => {
    const products = [{}]

    const ticket = new Ticket(products)

    expect(ticket.totalPrice).toBeCloseTo(0.0)
    expect(ticket.totalTaxes).toBeCloseTo(0.0)
  })

  describe('cases from the design document', () => {
    test.each(testCases)('%s', async (testCaseName, products, taxesExpected, priceExpected) => {
      const ticket = new Ticket(products)

      expect(ticket.totalTaxes).toBeCloseTo(taxesExpected)
      expect(ticket.totalPrice).toBeCloseTo(priceExpected)
    })
  })
})
