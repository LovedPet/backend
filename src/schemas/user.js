const Joi = require('joi')
 
const createUserSchema = Joi.object.keys({
  email: Joi.string()
    .required(),
  password: Joi.string()
    .required(),
  name_nursery: Joi.string()
    .required(),
}).required()
 
module.exports = {
  createUserSchema,
}