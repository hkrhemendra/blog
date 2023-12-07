const { register, login } = require("../controller/userController");
const { validateAdd, validateLogin } = require("../validators/userValidator");
const { Router } = require("express");
const { checkError } = require("../middleware/checkError");
const { body } = require('express-validator')

class UserRouter {
  router = Router();

  constructor() {
    this.getRoutes();
    this.postRoutes();
    this.patchRoutes();
    this.deleteRoutes();
  }

  // sign up
  // login
  // (creates jwt token while on login success)

  getRoutes() {}

  postRoutes() {
    this.router.post("/", validateAdd() , checkError, register);
    this.router.post('/login', validateLogin(), checkError, login)
  }

  patchRoutes() {}

  deleteRoutes() {}
}

module.exports = {
  UserRouter: new UserRouter().router,
};
