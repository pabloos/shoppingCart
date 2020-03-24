
const Generator = op => name => op + removeBlanks(name) + 'Button'

const [addGenerator, removeGenerator] = [Generator('add'), Generator('remove')]
