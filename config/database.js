const Sequelize = require("sequelize");
const path = require("path");

const connection = require("./connection");

let database;

console.log("🚀 ~ process.env.NODE_ENV", process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
  case "production":
    database = new Sequelize(
      connection.production.database,
      connection.production.username,
      connection.production.password,
      {
        host: connection.production.host,
        dialect: connection.production.dialect,
        charset: "utf8mb4",
        collate: "utf8mb4_spanish2_ci",
        timezone: "-06:00",
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
      }
    );
    break;
  case "testing":
    database = new Sequelize(
      connection.testing.database,
      connection.testing.username,
      connection.testing.password,
      {
        host: connection.testing.host,
        dialect: connection.testing.dialect,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
      }
    );
    break;
  default:
    database = new Sequelize(
      connection.development.database,
      connection.development.username,
      connection.development.password,
      {
        dialect: connection.development.dialect,
        host: connection.development.host,
        charset: "utf8mb4",
        collate: "utf8mb4_spanish2_ci",
        timezone: "-06:00",
        // timezone: "America/Mexico_City",
        // logging: true,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
        // storage: path.join(process.cwd(), 'db', 'database.sqlite'),
      }
    );
}

module.exports = database;
