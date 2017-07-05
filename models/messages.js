'use strict';
module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define('Messages', {
    name: DataTypes.STRING,
    post: DataTypes.VARCHAR(140)
  }, {});

Messages.associate = function (models) {
    Messages.belongsTo(models.User, {foreignKey: 'id'});
  }

  return Messages;
};