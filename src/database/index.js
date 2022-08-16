// Adds initialization database and export
const Sequelize = require('sequelize')
const config = require('../config/database')
const rawModels = require('./models')

const initializeDatabase = () => {
  const database = new Sequelize(config)
  const createInstance = model => ({
    model,
    instance: model.create(database)
  })

  const associateModels = ({ model, instance }) => {
    if (model.associate) {
      model.associate(instance, database.models)
    }
  }

  Object.values(rawModels)
    .map(createInstance)
    .map(associateModels)


  return database
}

module.exports = initializeDatabase()