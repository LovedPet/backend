// const { config } = require('dotenv')
const database = require('../database')
const { BadRequestError } = require('../lib/errors')
const {
  Configuration,
  User
} = database.models


const create = async (payload) => {

  try {

    const user = await User.findByPk(payload.user_id)


    if (!user) {
      throw new BadRequestError('Errado')
    }

    const config = await Configuration.create(payload)


    return config
  } catch (error) {
    throw error
  }
}

const getConfigurationByUser = async (user_id) => {
  try {
    const user = await User.findByPk(user_id)

    if (!user) {
      throw new BadRequestError('Errado')
    }

    const configByUser = await Configuration.findOne({
      where: {
        user_id: user_id
      }
    })

    if (!configByUser) {
      throw new BadRequestError('Does not exist configuration by this user')
    }

    return configByUser

  } catch (error) {
    throw error

  }
}

module.exports = {
  create,
  getConfigurationByUser
}


