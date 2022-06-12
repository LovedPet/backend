class BaseError extends Error {
  constructor (errorType, statusCode, message = null) {
    super(message)

    this.statusCode = statusCode

    this.responseObject = {
      error_type: errorType,
      error_message: message,
      details: null,
    }
  }
}

class ForbiddenError extends BaseError {
  constructor(message) {
    super('ForbiddenError', 403, message)
  }
}

class NotFound extends BaseError {
  constructor () {
    super('NotFound', 404)
  }
}

class InternalServerError extends BaseError {
  constructor() {
    super('InternalServerError', 500)
  }
}

class BadRequestError extends BaseError {
  constructor (rawError, isInvalidParameters = true) {
    super(
      'BadRequestError',
      400,
      isInvalidParameters ? 'Invalid parameters' : rawError
    )

    this.setDetails(rawError)
  }

  setDetails (rawError) {
    if (!rawError.details) {
      return
    }

    const buildFieldPath = (accumulator, current) => (
      `${accumulator}.${current}`)

    const formattedDetails = rawError.details.map(error => ({
      message: error.message,
      field: error.path.reduce(buildFieldPath),
    }))

    this.responseObject.details = formattedDetails
  }
}

module.exports = {
  BadRequestError,
  InternalServerError,
  NotFound,
  ForbiddenError
}