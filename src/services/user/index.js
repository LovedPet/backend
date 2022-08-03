const bcrypt = require('bcrypt')
const { prop } = require('ramda')
const logger = require('../../lib/logger')
const database = require('../../database')
const {
  User
} = database.models

const filterPayload = (payload) => {
  const email = prop('email', payload)
  const password = prop('password', payload)
  const name_nursery = prop('name_nursery', payload)

  return {
    email,
    password,
    name_nursery
  }
}

const hasCredentialsInternal = async ({ email, _ }) => {
  try {
    logger.info({
      message: 'Starting to verify user credentials',
      operation: 'credentials_user',
      email,
    })

    const userAlreadyExists = await User.findOne({ raw: true, where: { email } })

    return userAlreadyExists

  } catch (error) {
    throw error
  }
}

const create = async (payload) => {

  const {
    email,
    password,
    name_nursery
  } = filterPayload(payload)

  try {
    logger.info({
      message: 'Starting to process user creation',
      operation: 'create_user',
      email,
    })

    const userAlreadyExists = await User.findOne({ raw: true, where: { email } })

    if (userAlreadyExists) {
      throw new Error('User with this email already exists')
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const createdUser = await User.create({ email, password: passwordHash, name_nursery })

    delete createdUser.dataValues.password

    return createdUser

  } catch (error) {
    logger.error({
      message: 'Failed to create user in system',
      operation: 'create_user',
      email,
      metadata: {
        error_message: error.message,
        error_stack: error.stack ? error.stack.split('\n') : null
      },
    })
  }

}

module.exports = {
  create,
  hasCredentialsInternal,
}