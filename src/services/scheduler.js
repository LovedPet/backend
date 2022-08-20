const database = require('../database')
const { BadRequestError } = require('../lib/errors')

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

const get = async (user_id, separate) => {
  try {
    const user = await User.findByPk(user_id)

    if (!user) {
      throw new BadRequestError('Errado')
    }

    let condition = { user_id: user_id }

    if (separate) {
      condition.separate = separate
    }

    const schedulers = await Scheduler.findAll({ where: condition })


    return schedulers
  } catch (error) {
    throw error
  }
}


module.exports = {
  create,
  get
}