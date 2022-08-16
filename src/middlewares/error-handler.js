const {
  BadRequestError,
  ForbiddenError,
  NotFound,
  InternalServerError,
  UnprocessableEntityError,
} = require('../lib/errors')
const logger = require('../lib/logger')

const normalizeError = (error) => {
  if (
    error instanceof ForbiddenError
    || error instanceof NotFound
    || error instanceof UnprocessableEntityError
    || error instanceof BadRequestError
  ) {
    return error
  }

  logger.error({
    message: 'Unhandled error',
    metadata: {
      error_name: error.name,
      error_message: error.message,
      error_stack: error.stack,
    },
  })

  return new InternalServerError()
}

/* eslint-disable-next-line max-params */
const errorHandler = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error)
  }

  const normalizedError = normalizeError(error)

  return res.status(normalizedError.statusCode)
    .send(normalizedError.responseObject)
}

module.exports = errorHandler
