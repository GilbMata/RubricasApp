/**
 * third party libraries
 */
const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const http = require("http");
const mapRoutes = require("express-routes-mapper");
const cors = require("cors"),
  morgan = require("morgan"),
  history = require("connect-history-api-fallback"),
  dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

/**
 * server configuration
 */
const config = require("../config/"),
  dbService = require("./services/db.service"),
  auth = require("./policies/auth.policy");

// environment: development, staging, testing, production
const environment = process.env.NODE_ENV;
console.log("🚀 ~ environment", environment);

/**
 * express application
 */
const app = express(),
  server = http.Server(app);
// const mappedOpenRoutes = mapRoutes(config.publicRoutes, "api/controllers/");
// const mappedAuthRoutes = mapRoutes(config.privateRoutes, "api/controllers/");
mappedApiRoutes = mapRoutes(config.apiRoutes, "api/controllers/");
DB = dbService(environment, config.migrate).start();

// allow cross origin requests
// configure to only allow requests from certain origins

const allowedOrigins = [
    "http://localhost:3000",
    "http://74.208.119.149",
    "http://74.208.119.149:3210",
    "http://localhost:9000",
    "http://localhost:3210",
    "http://tsubuku.duckdns.org",
  ],
  corsOptions = {
    origin: function (origin, callback) {
      console.log("🚀 ~ origin:", origin);
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };

app.use(cors(corsOptions));
app.use(morgan("dev"));
// secure express app
app.use(
  helmet({
    dnsPrefetchControl: false,
    frameguard: false,
    ieNoOpen: false,
  })
);
app.use(history());
// parsing the request bodys
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// secure your private routes with jwt authentication middleware
app.all("/private/*", (req, res, next) => auth(req, res, next));
// app.all("/api/*", (req, res, next) => auth(req, res, next));

// fill routes for express application
// app.use("/public", mappedOpenRoutes);
// app.use("/private", mappedAuthRoutes);
app.use("/api", mappedApiRoutes);
// app.get("/api/urdata", (req, res) => {
//   console.log("🚀 ~ app.get ~ req:", req.body);
//   res.send("root");
// });

const serveStatic = require("serve-static"),
  path = require("path");
app.use(serveStatic(path.join(__dirname, "../app")));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../app/build/index.html"));
// });

server.listen(config.port, () => {
  if (
    environment !== "production" &&
    environment !== "development" &&
    environment !== "testing"
  ) {
    console.error(
      `NODE_ENV is set to ${environment}, but only production and development are valid.`
    );
    process.exit(1);
  }
  console.info("--> App listening on port " + config.port);
  // return DB;
});
