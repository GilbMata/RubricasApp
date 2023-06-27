"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Rubrica, {
        through: { model: User_Rubrica, unique: false, constraints: false },
      });
    }
  }
  User.init(
    {
      uuid: {
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: sequelize.STRING,
      },
      age: sequelize.TINYINT,
      gender: sequelize.ENUM("M", "F"),
      occupation: Sequelize.STRING,
      school: Sequelize.STRING,
      photo: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        default: "",
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
