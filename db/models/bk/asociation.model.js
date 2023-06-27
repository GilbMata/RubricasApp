const User = require("../models/User");
const Rubrica = require("../models/rubricas.model");
const Role = require("../models/role.model");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const UserRubrica = sequelize.define(
  "UserRubrica",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // useruuid: {
    //   type: DataTypes.UUID,
    //   references: {
    //     model: User,
    //     key: "uuid",
    //   },
    // },
    // rubricauuid: {
    //   type: DataTypes.UUID,
    //   references: {
    //     model: Rubrica,
    //     key: "uuid",
    //   },
    // },
    value: Sequelize.TINYINT.UNSIGNED,
    date: { type: Sequelize.DATE },
    // date: { type: Sequelize.DATE, primaryKey: true },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["UserUuid", "RubricaUuid", "date"],
      },
    ],
  }
);
User.hasMany(UserRubrica);
UserRubrica.belongsTo(User);
Rubrica.hasMany(UserRubrica);
UserRubrica.belongsTo(Rubrica);
User.belongsToMany(Rubrica, {
  through: { model: UserRubrica, unique: false, constraints: false },
});
Rubrica.belongsToMany(User, {
  through: { model: UserRubrica, unique: false, constraints: false },
});
// User.belongsToMany(Rubrica, { through: "UserRubrica" });
// Rubrica.belongsToMany(User, { through: "UserRubrica" });

Role.belongsToMany(User, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
User.belongsToMany(Role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

// initial();
function initial() {
  const data = [{ name: "user" }, { name: "admin" }];

  Role.bulkCreate(data);
}

module.exports = UserRubrica;
