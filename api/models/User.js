const Sequelize = require("sequelize");
const DataTypes = require("sequelize");
const bcryptService = require("../services/bcrypt.service");
const sequelize = require("../../config/database");

const hooks = {
  beforeCreate(user) {
    if (user.password) {
      user.password = bcryptService().password(user.password);
    }
  },
  // beforeUpdate(user) {
  //   console.log("🚀 ~ beforeUpdate ~ user:", user);
  //   user.password = bcryptService().password(user.previous.password);
  // },
  // afterUpdate(user) {
  //   console.log("🚀 ~ afterUpdate ~ user:", user);
  // },
};

const tableName = "users";

const User = sequelize.define(
  "User",
  {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
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
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
    },
    age: Sequelize.TINYINT,
    gender: Sequelize.ENUM("M", "F"),
    occupation: Sequelize.STRING,
    school: Sequelize.STRING,
    photo: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      default: "",
    },
  },
  { tableName, hooks }
);

User.beforeUpdate(async (user, options) => {
  return (user.password = bcryptService().password(user.password));
});

// User.prototype.toJSON = function () {
//   const values = Object.assign({}, this.get());
//   delete values.password;
//   return values;
// };

module.exports = User;
