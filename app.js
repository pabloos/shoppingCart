
const express = require('express')
const bodyParser = require('body-parser')

const { getTicketHandler } = require('./routes/controllers/getTicketHandler')
const { getProductsHandler } = require('./routes/controllers/getProductsHandler')

module.exports = class App {
  constructor (config) {
    this.config = config

    this.server = express()

    this.server.use(bodyParser.urlencoded({ extended: true }))
    this.server.use(bodyParser.json())

    this.server.use('/', express.static('./public'))
      .post('/getTicket', getTicketHandler)
      .get('/getProducts', getProductsHandler)
  }

  run () {
    this.running = this.server.listen(this.config.port, () => console.log(`Shopping Cart webapp listening on port ${this.config.port}!`))
  }

  shutdown () {
    this.running.close()
  }
}
