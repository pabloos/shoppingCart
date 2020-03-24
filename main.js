
const App = require('./app')
const { config } = require('./config/web.config')

const app = new App(config)

app.run()
