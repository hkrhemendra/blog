const { Router } = require("express");
const { validateAdminLogin } = require("../validators/userValidator");
const { checkError } = require("../middleware/checkError");
const { login } = require("../controller/userController");

class AdminRoutes {
  router = Router();

  constructor() {
    this.getRoutes();
    this.postRoutes();
    this.patchRoutes();
    this.deleteRoutes();
  }

  getRoutes() {}

  postRoutes() {
    this.router.post("/login", validateAdminLogin(), checkError, login);
  }

  patchRoutes() {}

  deleteRoutes() {}
}

module.exports = {
  AdminRouter: new AdminRoutes().router,
};
