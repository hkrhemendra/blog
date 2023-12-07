const { body } = require("express-validator");
const { validate } = require("./index");
const { db } = require("../models");

function validateAdd() {
  const User = db.user;

  const validation = validate([
    body("username", "Username is required").isString().notEmpty(),
    body("email", "Email is required")
      .isEmail()
      .custom(async (email) => {
        const user = await User.findAll({ where: { email: email } });
        console.log("User ----> ", user);
        if (user.length) {
          throw new Error(
            "Email already in use. Please try again with different email"
          );
        }
        return true;
      }),
    body("password", "Password is required").isString().notEmpty(),
  ]);

  return validation;
}

function validateLogin() {
  const User = db.user;

  return validate([
    body("email", "Valid email is required")
      .isEmail()
      .custom(async (email) => {
        const user = await User.findAll({ where: { email } });
        if (!user.length) {
          throw new Error(`No user found for email: ${email}`);
        }
        return true;
      }),
    body("password", "Password is required").isString().notEmpty(),
  ]);
}

function validateAdminLogin() {
  const User = db.user;
  return validate([
    body("email", "Valid email is required")
      .isEmail()
      .custom(async (email) => {
        const user = await User.findOne({ where: { email } });
        if (user) {
          if (user.is_admin) {
            return true;
          }
          throw new Error(`Sorry, you are not authorized for admin login`);
        }
        throw new Error(`No user found for email: ${email}`);
      }),
    body("password", "Password is required").isString().notEmpty(),
  ]);
}

module.exports = {
  validateAdd,
  validateLogin,
  validateAdminLogin,
};
