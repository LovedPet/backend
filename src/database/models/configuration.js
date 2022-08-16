const cuidBuilder = require('../../lib/cuid')
const { DataTypes } = require('sequelize')


const attributes = {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    defaultValue: cuidBuilder('cg_'),
  },
  pet_limits: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value_hour: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  scheduler_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}

const options = {
  tableName: 'Configurations',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  underscored: true,
}

const create = database => database.define(
  'Configuration',
  attributes,
  options
)


module.exports = {
  create,
}