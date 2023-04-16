const development = {
  database: "rubricas",
  // username: "root",
  // password: "00",
  username: "rubricas",
  password: "d3v",
  host: "74.208.119.149",
  dialect: "mariadb" || "mysql" || "postgres",
};

const testing = {
  database: "rubricas",
  username: "root",
  password: "00",
  host: "localhost",
  dialect: "mariadb" || "mysql" || "postgres",
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || "localhost",
  dialect: "mariadb" || "mysql" || "postgres",
};

module.exports = {
  development,
  testing,
  production,
};
