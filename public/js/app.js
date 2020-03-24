
class App {
  constructor(products) {
    this.controller = new Controller(new Model(products), new View(products))
  }
}
