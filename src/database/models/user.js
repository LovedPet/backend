const { DataTypes } = require('sequelize')
const cuidBuilder = require('../../lib/cuid')
 
const attributes = {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    defaultValue: cuidBuilder('us_'),
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name_nursery: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}
 
const options = {
  tableName: 'Users',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  underscored: true,
}
 
const create = database => database.define(
  'User',
  attributes,
  options
)
 
module.exports = {
  create,
}