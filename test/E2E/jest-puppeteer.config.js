
//   preset: 'jest-puppeteer',

exports.config = {
  verbose: true,
  headless: true,

  args: [
    '--ignore-certificate-errors',
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--window-size=1200,860',
    '--disable-accelerated-2d-canvas',
    '--disable-gpu'
  ],

  defaultViewport: {
    width: 1200,
    height: 860,
    isMobile: false,
    deviceScaleFactor: 1,
    hasTouch: false,
    isLandscape: false
  }
}
