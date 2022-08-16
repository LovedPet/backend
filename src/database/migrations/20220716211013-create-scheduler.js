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
  ),

  down: queryInterface => queryInterface.dropTable(tableName),
}