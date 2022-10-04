const tableName = 'Schedulers'
const columnName = 'pet_info'

module.exports = {
  up: (queryInterface, { DataTypes }) => queryInterface.changeColumn(
    tableName, columnName, {
    type: DataTypes.STRING,
    allowNull: false,
  }
  ),

  down (queryInterface) {
    return queryInterface.removeColumn(tableName, columnName)
  }
}