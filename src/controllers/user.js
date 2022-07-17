const { UserService: service } = require('../services')
const { BadRequestError } = require('../lib/errors')
const { userSchema } = require('../schemas')
 
const {
  createUserSchema,
} = userSchema
 
const create = async (request, response, next) => {
  try {
    const { error: validationError } = createUserSchema.validate(request.body, {
      allowUnknown: true,
      abortEarly: false,
    })
 
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