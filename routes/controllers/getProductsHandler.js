
const { products } = require('../../db/products')

exports.getProductsHandler = (req, res) => {
  res.end(JSON.stringify(products))
}
