
const getNameGenerator = element => op => id => restoreBlanks(id.replace(op, '').replace(element, ''))

const getNameOnButton = getNameGenerator('Button')
