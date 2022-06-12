const Joi = require('joi')

// Validação do payload de criação de um checkin 
const create = Joi.object().keys({
  pet: Joi.object().keys({
    name: Joi
      .string()
      .required(),

    owner: Joi
      .string()
      .required()
  })

})

module.exports = {
  create,
}