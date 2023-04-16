const privateRoutes = require("./routes/privateRoutes");
const publicRoutes = require("./routes/publicRoutes");
const apiRoutes = require("./routes/apiRoutes");

const config = {
  // migrate: false,
  migrate: true,
  privateRoutes,
  publicRoutes,
  apiRoutes,
  port: process.env.PORT || "3210",
};

module.exports = config;
