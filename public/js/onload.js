
window.onload = async () => {
    const products = await ShopService.getProducts()
    
    const app = new App(products)
  }
  