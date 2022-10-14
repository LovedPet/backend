const { BadRequestError } = require('../lib/errors')
const schedulerService = require('../services/scheduler')

const create = async (request, response, next) => {
  try {
    const { user_id } = request.params

    const {
      pet_info,
      hour = 1,
      tag,
    } = request.body

    if (!pet_info || !tag || hour < 0) {
      throw new BadRequestError('Preencha todos os campos corretamente')
    }

    const schedule = await schedulerService.create({ pet_info, hour, tag, user_id })

    return response.status(201).json(schedule)

  } catch (error) {
    return next(error)
  }
}

const get = async (request, response, next) => {
  try {
    const { user_id } = request.params
    const { separate = null } = request.query
    const { all_pets = null }= request.query

    console.log('by Separate? ' + separate)
    if (!user_id) {
      throw new BadRequestError('Usuário não existe')
    }

    const schedulers = await schedulerService.get(user_id, separate)

    if(all_pets) {
      schedulers.filter((sc) => sc.pet_info)
    }

    return response.status(200).json(schedulers)

  } catch (error) {
    return next(error)

  }
}

module.exports = {
  create,
  get
}

// {
//   pet_info: 'json',
//     hour: 'integer',
//       tag: 'string',
//         user_id: 'string'

// }