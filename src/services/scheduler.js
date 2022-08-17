const database = require('../database')
const {
  Scheduler,
  User
} = database.models

const create = async (payload) => {
  try {
    const user = await User.findByPk(payload.user_id)


    if (!user) {
      throw new BadRequestError('Errado')
    }

    const schedule = await Scheduler.create(payload)


    return schedule
  } catch (error) {
    throw error
  }
}

module.exports = {
  create,
}