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

    const x = {
      pet_name: payload.pet_info.pet_name,
      pet_owner: payload.pet_info.pet_owner,
      address_owner_pet: payload.pet_info.address_owner_pet,
      race_pet: payload.pet_info.race_pet,
      weight_pet: payload.pet_info.weight_pet
    }

    const final = JSON.stringify(x)

    const schedule = await Scheduler.create({
      pet_info: final,
      tag: payload.tag,
      hour: payload.hour,
      separate: payload.separate,
      user_id: payload.user_id
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