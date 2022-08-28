const database = require('../database')
const { BadRequestError } = require('../lib/errors')

const {
  Scheduler,
  User
} = database.models

const create = async (payload) => {
  try {
    console.log('Inside service with this payload >', payload)
    // const user = await User.findByPk(payload.user_id)


    // if (!user) {
    //   throw new BadRequestError('Errado')
    // }

    // console.log('Inside service with this user >', user)

    const schedule = await Scheduler.create({
      pet_info: {
        pet_name: payload.pet_name,
        pet_owner: payload.pet_owner,
      },
      tag: payload.tag,
      hour: payload.hour,
      separate: payload.separate
    })

    console.log('Inside service with this schedule >', schedule)


    return schedule
  } catch (error) {
    console.log(error)
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