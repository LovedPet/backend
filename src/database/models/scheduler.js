const cuidBuilder = require('../../lib/cuid')
const { DataTypes } = require('sequelize')

const attributes = {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    defaultValue: cuidBuilder('sc_'),
  },
  pet_info: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  hour: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tag: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}

const options = {
  tableName: 'Schedulers',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  underscored: true,
}

const create = database => database.define(
  'Scheduler',
  attributes,
  options
)


module.exports = {
  create,
}