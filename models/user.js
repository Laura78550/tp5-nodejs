'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(Role,{
        foreignKey:'role'
      });
      Role.belongsTo(User);
    }
  };
  User.init(
    {
      lastname: DataTypes.STRING,
      firstname: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      githubLink: DataTypes.STRING,
      role:  DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
