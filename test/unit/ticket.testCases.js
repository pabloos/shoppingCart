exports.testCases = [
  [
    'first case of the design document',
    [
      {
        name: 'book',
        price: 12.49,
        num: 1,
        salesTaxed: false,
        imported: false
      },
      {
        name: 'movie',
        price: 14.99,
        num: 1,
        salesTaxed: true,
        imported: false
      },
      {
        name: 'cholate stick',
        price: 0.85,
        num: 1,
        salesTaxed: false,
        imported: false
      }
    ],
    1.50,
    29.83
  ],
  [
    'THIS CASE WAS BROKEM second case of the design document',
    [
      {
        name: 'imported chocolate box',
        price: 10.50,
        num: 1,
        salesTaxed: false,
        imported: true
      },
      {
        name: 'imported perfume',
        price: 54.65,
        num: 1,
        salesTaxed: true,
        imported: true
      }
    ],
    8.73, // 7.65 (the results offered in the document)
    73.88 // 65.15
  ],
  [
    'THIS CASE WAS BROKEM third case of the design document',
    [
      {
        name: 'imported perfume',
        price: 32.19,
        num: 1,
        salesTaxed: true,
        imported: true
      },
      {
        name: 'perfume',
        price: 20.89,
        num: 1,
        salesTaxed: true,
        imported: false
      },
      {
        name: 'stomach pills',
        price: 9.75,
        num: 1,
        salesTaxed: false,
        imported: false
      },
      {
        name: 'imported chocolate box',
        price: 11.85,
        num: 1,
        salesTaxed: false,
        imported: true
      }
    ],
    7.51, // 6.70
    82.19 // 74.68
  ]
]
