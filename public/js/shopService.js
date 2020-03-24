
class ShopService {
  static async getProducts () {
    return await fetch('/getProducts').then(res => res.json()).catch((err) => console.error(err))
  }

  static async getTicket (products) {
    return fetch('/getTicket', {
      method: 'POST',
      body: JSON.stringify(products),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .catch((err) => console.error(err))
  }
}
