
const replaceAll = (char, repl) => str => str.split(char).join(repl)

const generateRemoveReplace = (char, repl) => [replaceAll(char, repl), replaceAll(repl, char)]

const [removeBlanks, restoreBlanks] = generateRemoveReplace(' ', '_')
