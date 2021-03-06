'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   
   return queryInterface.addColumn(
     'Messages',
     'userId',
      {
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      }   
   )
   
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.removeColumn (
      'Messages',
     'userId'
    )
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
