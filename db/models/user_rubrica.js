"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_Rubrica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  User_Rubrica.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      value: sequelize.TINYINT.UNSIGNED,
      date: { type: sequelize.DATE },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["UserUuid", "RubricaUuid", "date"],
        },
      ],
    },
    {
      sequelize,
      modelName: "User_Rubrica",
    }
  );
  return User_Rubrica;
};
