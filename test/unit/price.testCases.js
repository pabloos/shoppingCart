exports.testCases = [
  [
    'not salesTaxed nor imported => 0.0',
    'not salesTaxed nor imported: 10.00 * 2 => 20.00',
    {
      price: 10.00,
      num: 2,
      salesTaxed: false,
      imported: false
    },
    0.0,
    20.00
  ],
  [
    'salesTaxed, not imported: 10.23 => 3.07',
    'salesTaxed, not imported: (10.23 * 3 * salesTaxedPercent) + (10.23 * 3) => 30.69',
    {
      price: 10.23,
      num: 3,
      salesTaxed: true,
      imported: false
    },
    3.07,
    33.76
  ],
  [
    'mpt salesTaxed, imported: 10.23 => 0.51',
    'not salesTaxed, imported: (10.23 * 1 * salesTaxedPercent) + (10.23 * 3) => 30.69',
    {
      price: 10.23,
      num: 1,
      salesTaxed: false,
      imported: true
    },
    0.51,
    10.74
  ],
  [
    'salesTaxed and imported: 10.23 => 10.23 + 0.51 + 1.02 => 11.76',
    'salesTaxed and imported: (10.23 * 1 * salesTaxedPercent) + (10.23 * 1 * impTaxedPercent) => 11.76',
    {
      price: 10.23,
      num: 1,
      salesTaxed: true,
      imported: true
    },
    1.53,
    11.76
  ]
]
