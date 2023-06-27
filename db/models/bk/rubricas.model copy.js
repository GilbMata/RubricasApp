const Sequelize = require("sequelize");
const DataTypes = require("sequelize");
const sequelize = require("../../config/database");

const tableName = "rubrica";

const Rubrica = sequelize.define("Rubrica", {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
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
});

module.exports = Rubrica;
