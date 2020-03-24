
class View extends EventEmitter {
  constructor (products) {
    super()

    this.buttons = {}

    this.generateView(products)

    products.forEach(({ name }) => {
      const [addID, removeID] = [addGenerator(name), removeGenerator(name)]

      this.buttons[addID] = document.querySelector('#' + addID)
      this.buttons[addID].addEventListener('click', async ({ target }) => this.emit('productAdded', target))

      this.buttons[removeID] = document.querySelector('#' + removeID)
      this.buttons[removeID].addEventListener('click', async ({ target }) => this.emit('productRemoved', target))
    })

    this.productsList = document.querySelector('#productsList')
  }

  generateView (products) {
    const productsContainer = document.querySelector('#page')

    let numProductsInActualRow = 0

    let actualRow = createRow()
    productsContainer.appendChild(actualRow)

    products.forEach(({ name, price, comment, image }) => {
      const [addID, removeID] = [addGenerator(name), removeGenerator(name)]

      const numCardsPerRow = 3

      if (numProductsInActualRow === numCardsPerRow) {
        const row = createRow()

        productsContainer.appendChild(row)

        actualRow = row

        numProductsInActualRow = 0
      }

      const col = createColumn()
      actualRow.appendChild(col)

      const card = createCard(name, image, comment, price, addID, removeID)
      col.appendChild(card)

      ++numProductsInActualRow
    })
  }

  removeProductList () {
    document.querySelector('#productsList').remove()
  }

  updateProductsList (ticket) {
    this.removeProductList()

    const list = createList()
    list.id = 'productsList'

    ticket.products.forEach(async product => list.appendChild(this.getProductLine(product)))
    list.appendChild(this.getTaxesLines(ticket.totalTaxes))
    list.appendChild(this.getTotalPriceLine(ticket.totalPrice))

    this.appendListToPage(list)
  }

  appendListToPage (list) {
    document.querySelector('#page').appendChild(list)
  }

  /*
    TODO:
      - these methods are the same => refactor
  */

  getProductLine ({ num, name, finalPrice }) {
    const elementList = createListElement()

    elementList.innerHTML = `${num}` + ' ' + `${name}:` + ' ' + `${finalPrice}`

    return elementList
  }

  getTaxesLines (taxesPrice) {
    const elementList = createListElement()

    elementList.innerHTML = `Taxes: ${taxesPrice} `

    return elementList
  }

  getTotalPriceLine (price) {
    const elementList = createListElement()

    elementList.innerHTML = `Total: ${price} `

    return elementList
  }
}
