const { config } = require('dotenv')
const database = require('../database')
const { BadRequestError } = require('../lib/errors')
const {
  Configuration,
  User
} = database.models


const create = async (payload) => {

  try {

    const user = await User.findByPk(payload.user_id)

    console.log('Procurou user  ', payload)


    if (!user) throw new BadRequestError('Errado')

    const config = await Configuration.create(payload)

    return config
  } catch (error) {
    throw error
  }
}

module.exports = {
  create,
}