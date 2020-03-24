
// this hash function does not work properly, as it has collisions wit inputs that hace the ending characters
// so it needs to be replaced. The products are named based on this in order to doesn't have logical errors
const hash = str => Array.from(str).reduce((hash, char) => ((hash << 5 - hash) + char.charCodeAt(0)) | 0, 0)
