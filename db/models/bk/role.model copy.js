const Sequelize = require("sequelize");
const sequelize = require("../../config/database");

const Role = sequelize.define("role", {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.ENUM("Admin", "User"),
    defaultValue: "User",
  },
});

module.exports = Role;
