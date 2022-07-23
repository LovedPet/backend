const { UserService: service } = require('../services')
const { BadRequestError } = require('../lib/errors')
const { userSchema } = require('../schemas')

const {
  createSchema,
} = userSchema

const create = async (request, response, next) => {
  try {
    const {
      email,
      password,
      name_nursery
    } = request.body

    const { error: validationError, _ } = createSchema.validate({ email, password, name_nursery })

    if (validationError) {
      throw new BadRequestError(validationError)
    }

    const createdUser = await service.create(request.body)

    return response.status(201).json(createdUser)

  } catch (error) {
    return next(error)
  }
}

module.exports = {
  create,
}