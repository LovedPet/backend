const jwt = require('jsonwebtoken')
const { UserService: service } = require('../services')
const { BadRequestError } = require('../lib/errors')
const { userSchema } = require('../schemas')
const {
  isNil
} = require('ramda')

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

    // const { error: validationError, _ } = createSchema.validate({ email, password, name_nursery })

    // if (validationError) {
    //   throw new BadRequestError(validationError)
    // }

    const createdUser = await service.create(request.body)

    return response.status(201).json(createdUser)

  } catch (error) {
    return next(error)
  }
}

const login = async (request, response, next) => {
  try {
    const {
      email,
      password
    } = request.body

    if (isNil(email) || isNil(password)) {
      throw new BadRequestError()
    }

    const user = await service.hasCredentialsInternal({ email, password })
    const { id } = user

    const token = jwt.sign({ id }, 'MYSECRET', {
      expiresIn: 50000
    });

    response.status(200).send({
      auth: true,
      token
    })

  } catch (error) {
    return response
      .status(401)
      .json({ message: "Username and password your provided are invalid" })

  }
}

module.exports = {
  create,
  login,
}