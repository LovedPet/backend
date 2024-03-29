const { BadRequestError } = require("../lib/errors")
const configService = require('../services/config')


const create = async (request, response, next) => {
  try {
    const { user_id } = request.params

    const {
      pet_limits = 5,
      tags = 'CALMO',
      value_hour = 0,
      scheduler_active = true
    } = request.body

    // if (!pet_limits || !tags || !value_hour  || !user_id) {
    //   throw new BadRequestError('Preencha todos os campos corretamente')
    // }
    const data = {
      pet_limits: pet_limits,
      tags: tags,
      value_hour: value_hour,
      scheduler_active: scheduler_active,
      user_id: user_id
    }

    const config = await configService.create(data)

    return response.status(201).send(config)
  } catch (error) {
    return next(error)

  }
}

const getConfigUser = async (request, response, next) => {
  try {

    const { user_id } = request.params

    const config = await configService.getConfigurationByUser(String(user_id))

    return response.status(200).json(config)

  } catch (error) {
    return next(error)

  }
}

module.exports = {
  create,
  getConfigUser
}