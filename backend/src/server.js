const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
// const {cors} = require('cors')
const { UserRouter } = require("./routes/userRoutes");
const { AdminRouter } = require("./routes/adminRoutes");
const { RootRouter } = require("./routes/rootRoutes");
const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "..", ".env"),
  debug: true,
});
console.log("JWT SEcret -----> ", process.env.JWT_SECRET);

class Server {
  app = express();

  constructor() {
    this.setConfiguration();
    this.setRoutes();
    this.error404Handler();
    this.handleError();
  }

  setConfiguration() {
    this.connectToMySQL();
    this.configureBodyParser();
    // this.configureCors();
  }

  connectToMySQL() {
    sequelize.sync({ force: false }).then(() => {
      console.log("Database & tables synced successfully");
    });
  }

  configureCors() {
    this.app.use(cors);
  }

  configureBodyParser() {
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
  }

  setRoutes() {
    console.log("rest ----------------------------------");
    this.app.use(express.json());
    this.app.use("/api/v1/users", UserRouter);
    this.app.use("/api/v1/admin", AdminRouter);
  }

  error404Handler() {
    this.app.use((req, res) => [
      res.status(404).json({
        message: "Not Found",
        status: 404,
      }),
    ]);
  }

  handleError() {
    this.app.use((err, req, res, next) => {
      res.status(err.status || 500).json({
        message: err.message || "Something went wrong. Please try again.",
        error: err,
      });
    });
  }
}

module.exports = Server;
