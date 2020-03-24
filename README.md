
# Shopping Cart
This is a basic shopping webapp, built in order to show some technologies and software principles. Just an MVC pattern on the frontend, using bootstrap on the view; a couple of endpoints on the server side, and a bit of functional programing for compute the prices and taxes.

All of the environment is setted with npm. If you have docker and docker compose you can package and deploy the app using npm

```bash
npm run deploy:docker
```

If you instead want to run it localy, previously you have to install all the dependecies in order to make the system work:

```bash
npm i
```

And then run the server with:

```bash
npm start
```

### Testing
With the dependencies installed you could run all the test suites with:

```bash
npm test
```

For this purpose I decided to use a library full of features as Jest is. There are two tests types included:

- Unit testing: most of them cover the business logic functions that is computed on the server side.

- E2E testing: using Google's Puppeteer and Jest. This test suit covers the three user cases provided, that mixed products of diferent nature.

### CI
On the devops side, there is a basic, but still powerfull, configuration for GitHub Actions, wich will test the push and pull request and wont allow merges that does not satisfy the suites.
