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
    type: DataTypes.STRING,
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
  },
  separate: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
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

const associate = (Schedulers, { User }) => {
  Schedulers.belongsTo(User, {
    foreign_key: 'user_id'
  })
}

module.exports = {
  create,
  associate
}