'use strict';
const {
  Model
} = require('sequelize');
const{
  User
} = require('./user.js');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.hasOne(User,{
        foreignKey:'author'
      });
      User.belongsTo(Post);
    }
  };
  Post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      date: DataTypes.DATE,
      author: DataTypes.UUID
    },
    {
      sequelize,
      modelName: 'Post',
    }
  );
  return Post;
};
