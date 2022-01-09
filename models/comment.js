'use strict';
const {
  Model
} = require('sequelize');
const{
  User
} = require('./user.js');
const{
  Post
} = require('./post.js');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.hasOne(User,{
        foreignKey:'author'
      });
      User.belongsTo(Comment);
      Comment.hasOne(Post,{
        foreignKey:'post'
      });
      Post.belongsTo(Comment);
    }
  };
  Comment.init(
    {
      content: DataTypes.TEXT,
      date: DataTypes.DATE,
      author: DataTypes.UUID,
      post:  DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};
