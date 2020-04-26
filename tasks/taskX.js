module.exports = (inputs) => {
  if (inputs.foo !== "hello" || inputs.bar !== "world") {
    throw new Error('invalid inputs')
  }
  return {
    message: 'Hello world is valid'
  }
}
