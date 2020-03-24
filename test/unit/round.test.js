const { roundPipe, round, truncate } = require('../../services/round')

describe('roundPipe tests', () => {
  test('green case: 11.119 => 11.12', async () => {
    expect(roundPipe(11.119)).toBeCloseTo(11.12)
  })

  test('green case: 1.115 => 1.12', async () => {
    expect(roundPipe(1.115)).toBeCloseTo(1.12)
  })

  test('white case: 0 => 0 (an int as input)', async () => {
    expect(roundPipe(0)).toBeCloseTo(0)
  })

  test('white case: 1.19 => 1.19 (round function only rounds upon the third decimal)', async () => {
    expect(roundPipe(1.19)).toBeCloseTo(1.19)
  })
})

describe('round test', () => {
  test('green case: 11.119 => 11.12', async () => {
    expect(round(11.119)).toBeCloseTo(11.12)
  })

  test('green case: 11.119 => 11.12', async () => {
    expect(round(11.119)).toBeCloseTo(11.12)
  })
})

describe('truncate tests', () => {
  test('white case: 1.19 => 1.19', async () => {
    expect(roundPipe(1.19)).toBeCloseTo(1.19)
  })

  describe('diferrent number length test inputs', () => {
    test('green case (length: 3): 1.19 => 1.11', async () => {
      expect(truncate(1.19)).toBeCloseTo(1.19)
    })

    test('green case (length: 4): 1.119 => 1.11', async () => {
      expect(truncate(1.119)).toBeCloseTo(1.11)
    })

    test('green case (length: 5): 11.119 => 11.11', async () => {
      expect(truncate(11.119)).toBeCloseTo(11.11)
    })

    test('green case (length: 6): 111.119 => 111.11', async () => {
      expect(truncate(111.119)).toBeCloseTo(111.11)
    })

    test('red case (length: 5): 1111.119 !=> 1111.11', async () => {
      expect(truncate(1111.119)).not.toBeCloseTo(1111.11)
    })
  })
})
