
const [getNameFromAddButton, getNameFromRemoveButton] = [getNameOnButton('add'), getNameOnButton('remove')]

class Controller {
  constructor (model, view) {
    this.view = view
    this.model = model

    this.view.on('productAdded', async ({ id } ) => this.model.addProduct(getNameFromAddButton(id)))
    this.view.on('productRemoved', async ({ id }) => this.model.removeProduct(getNameFromRemoveButton(id)))

    this.model.on('updateProductList', async () => this.view.updateProductsList(await this.model.getTicket()))
  }
}
