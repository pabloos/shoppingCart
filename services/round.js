
const round = value => Number(Math.round(value + 'e2') + 'e-2')

/* TODO:
  - rewrite truncate with a map inside, instead of if/else
*/
const truncate = value => {
  let maxIndex = 4

  if (value < 10.00) {
    maxIndex = 4
  } else if (value >= 10.00 && value < 100.00) {
    maxIndex = 5
  } else if (value >= 100.00) {
    maxIndex = 6
  }

  return parseFloat(value.toString().slice(0, maxIndex))
}

const pipe = (...fns) => (arg) => fns.reduce((prev, fn) => fn(prev), arg)

module.exports = { roundPipe: pipe(round, truncate), round: round, truncate: truncate }
