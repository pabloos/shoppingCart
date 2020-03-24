
const productSelected = ({ num }) => num > 0

class Model extends EventEmitter {
  constructor (products) {
    super()

    // set the number of products added in each one as zero and assign an ID
    this.products = products.map(product => ({ ...product, num: 0, id: hash(product.name) }))
  }

  getProduct (productName) {
    const productID = hash(productName)

    return this.products.find(({ id }) => id === productID)
  }

  async addProduct (productName) {
    const product = this.getProduct(productName)

    ++product.num

    this.emit('updateProductList')
  }

  async removeProduct (productName) {
    const product = this.getProduct(productName)

    if (product.num > 0) --product.num

    this.emit('updateProductList')
  }

  async getTicket () {
    const productsSelected = this.products.filter(productSelected)

    return await ShopService.getTicket(productsSelected)
  }
}
