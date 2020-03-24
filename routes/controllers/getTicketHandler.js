
const Ticket = require('../../core/ticket.js')

exports.getTicketHandler = (req, res) => {
  const products = req.body

  const ticket = new Ticket(products)

  res.send(JSON.stringify(ticket))
}
