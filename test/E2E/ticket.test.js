
const puppeteer = require('puppeteer')
const { config } = require('./jest-puppeteer.config')

const App = require('../../app')

//we change the port here in order to make the server works on CI
const serverConfig = {
  port: 3000
}

describe('E2E tests: ticket output in each case of the document', () => {
  let app, browser, page

  beforeAll(async () => {
    browser = await puppeteer.launch(config)

    page = await browser.newPage()

    app = new App(serverConfig)

    app.run()

    await page.goto('http://localhost:3000')
  })

  beforeEach(async () => {
    await page.reload({ waitUntil: ['networkidle0', 'domcontentloaded'] })
  })

  test('first case of the design document', async () => {
    const bookButton = await page.$('#addLibroButton')

    await bookButton.click()

    const movieButton = await page.$('#addPelicula_en_DVDButton')

    await movieButton.click()

    const kitkatButton = await page.$('#addBarrita_de_chocolateButton')

    await kitkatButton.click()

    await page.waitFor(10000)

    const productList = await page.$('#productsList')

    const expectedResult = [
      '1 Libro: 12.49',
      '1 Pelicula en DVD: 16.49',
      '1 Barrita de chocolate: 0.85',
      'Taxes: 1.5',
      'Total: 29.83'
    ]

    expect(await productList.$$eval('.list-group-item', nodes => nodes.map(n => n.innerText))).toStrictEqual(expectedResult)
  }, 300000)

  test('second case of the design document', async () => {
    const chocolateBoxImpButton = await page.$('#addCaja_de_bombones_de_importacionButton')

    await chocolateBoxImpButton.click()

    const perfumeImpButton = await page.$('#addFrasco_de_Perfume_importado_de_ItaliaButton')

    await perfumeImpButton.click()

    await page.waitFor(10000)

    const productList = await page.$('#productsList')

    const expectedResult = [
      '1 Caja de bombones de importacion: 10.5',
      '1 Frasco de Perfume importado de Italia: 54.63',
      'Taxes: 7.63',
      'Total: 65.13'
    ]

    expect(await productList.$$eval('.list-group-item', nodes => nodes.map(n => n.innerText))).toStrictEqual(expectedResult)
  }, 300000)

  test('third case of the design document', async () => {
    const perfumeImpButton = await page.$('#addFrasco_de_Perfume_importado_de_ParisButton')

    await perfumeImpButton.click()

    const perfumeImp2Button = await page.$('#addFrasco_de_PerfumeButton')

    await perfumeImp2Button.click()

    const pillsButton = await page.$('#addCaja_de_pastillas_para_el_estomagoButton')

    await pillsButton.click()

    const chocolateBoxImp = await page.$('#addCaja_de_bombones_importadosButton')

    await chocolateBoxImp.click()

    await page.waitFor(12000)

    const productList = await page.$('#productsList')

    const expectedResult = [ '1 Frasco de Perfume importado de Paris: 32.19', '1 Frasco de Perfume: 20.89', '1 Caja de pastillas para el estomago: 9.75', '1 Caja de bombones importados: 11.81', 'Taxes: 6.66', 'Total: 74.64' ]

    expect(await productList.$$eval('.list-group-item', nodes => nodes.map(n => n.innerText))).toStrictEqual(expectedResult)
  }, 300000)

  afterAll(async () => {
    await app.shutdown()
    await page.close()
    await browser.close()
  }, 300000)
})
