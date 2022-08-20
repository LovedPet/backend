const tableName = 'Schedulers'
const columnName = 'separate'

module.exports = {
  up: (queryInterface, { DataTypes }) => queryInterface.addColumn(
    tableName, columnName, {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
  ),

  down (queryInterface) {
    return queryInterface.removeColumn(tableName, columnName)
  }
}