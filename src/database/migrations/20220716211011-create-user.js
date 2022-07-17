const tableName = 'Users'
 
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    tableName,
    {
      id: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      name_nursery: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
    }
  ),
 
  down: queryInterface => queryInterface.dropTable(tableName),
}