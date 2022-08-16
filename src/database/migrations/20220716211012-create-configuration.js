const tableName = 'Configurations'

module.exports = {
  up: (queryInterface, { DataTypes }) => queryInterface.createTable(
    tableName,
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
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
        type: DataTypes.INTEGER,
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
  ),

  down: queryInterface => queryInterface.dropTable(tableName),
}