exports.testCases = [
  [
    'test case: not imported nor salesTaxed',
    {
      'name': 'Book',
      'price': 12.49,
      'num': 1,
      'imported': false,
      'salesTaxed': false
    },
    0,
    0
  ],
  [
    'test case: not importedm, salesTaxed',
    {
      'name': 'Movie',
      'price': 14.99,
      'num': 1,
      'imported': false,
      'salesTaxed': true
    },
    1.50,
    0
  ],
  [
    'test case: not imported nor salesTaxed',
    {
      'name': 'Stick',
      'price': 0.85,
      'num': 1,
      'imported': false,
      'salesTaxed': false
    },
    0,
    0
  ]
]
