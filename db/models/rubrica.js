"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rubrica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rubrica.belongsToMany(models.User, {
        through: { model: User_Rubrica, unique: false, constraints: false },
      });
    }
  }
  Rubrica.init(
    {
      uuid: {
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        unique: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Rubrica",
    }
  );
  return Rubrica;
};
