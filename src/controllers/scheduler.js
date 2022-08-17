const { BadRequestError } = require('../lib/errors')
const schedulerService = require('../services/scheduler')

const create = async (request, response, next) => {
  try {
    const { user_id } = request.params

    const {
      pet_info,
      hour,
      tag,
    } = request.body

    if (!pet_info || !tag || !hour) {
      throw new BadRequestError('Preencha todos os campos corretamente')
    }

    const schedule = await schedulerService.create({ pet_info, hour, tag, user_id })

    return response.status(201).json(schedule)

  } catch (error) {
    return next(error)
  }
}

module.exports = {
  create,
}

// {
//   pet_info: 'json',
//     hour: 'integer',
//       tag: 'string',
//         user_id: 'string'

// }