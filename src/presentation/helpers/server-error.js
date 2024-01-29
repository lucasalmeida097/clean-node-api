class ServerError extends Error {
  constructor (paramName) {
    super('Internal server error')
    this.name = 'ServerError'
  }
}

module.exports = ServerError
