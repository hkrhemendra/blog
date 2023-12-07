const  { validationResult } = require("express-validator");

function checkError(req, res, next) {

  const error = validationResult(req);
  console.log('Error -----> ', JSON.stringify(error))
  if (error.errors.length) {
    return next(new Error(error.array()[0].msg));
  } else {
    next();
  }
}

module.exports = {
  checkError,
};
