const { BadRequestError } = require("../lib/errors")
const configService = require('../services/config')


const create = async (request, response, next) => {
  try {
    const { user_id } = request.params

    const {
      pet_limits = 5,
      tags = 'CALMO',
      value_hour = 0,
      scheduler_active = false
    } = request.body

    if (!pet_limits || !tags || !value_hour || !scheduler_active || !user_id) {
      throw new BadRequestError('Preencha todos os campos corretamente')
    }
    const data = { pet_limits, tags, value_hour, scheduler_active, user_id }

    console.log('Entrou no controler ', data)

    const config = await configService.create(data)

    return response.status(201).send(config)
  } catch (error) {
    return next(error)

  }

}

module.exports = {
  create
}