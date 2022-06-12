const { BadRequestError } = require('../lib/errors')

const create = async (request, response, next) => {
  try {
    const {
      value: somevalue,
      error: validationError,
    } = createSchema.validate(request.body)

    if (validationError) {
      throw new BadRequestError(validationError)
    }
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  create,
}
