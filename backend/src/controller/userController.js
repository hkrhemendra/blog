const { db } = require("../models");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function register(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  try {
    const User = db.user;
    const saltRound = Number(config.saltRound);
    const hashedPassword = await bcrypt.hash(password, saltRound);
    console.log("password type ", hashedPassword);
    const user = await User.create({
      username,
      password: hashedPassword,
      email,
    });
    token = jwt.sign(
      {
        user_id: user.id,
        username,
        email,
      },
      config.jwtSecret,
      {
        expiresIn: "120d",
      }
    );

    return res.json({
      status: 200,
      data: user,
      token,
    });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const User = db.user;

    const user = await User.findOne({ where: { email } });
    console.log(await bcrypt.compare(password, user.password))

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        {
          user_id: user.id,
          email: email,
          username: user.username,
          admin: user.is_admin
        },
        config.jwtSecret,
        {
          expiresIn: "120d",
        }
      );

      return res.json({
        status: 200,
        message: "Login successful",
        token,
      });
    }

    next(new Error('Invalid login credentials'))
  } catch (error) {
    next(error)
  }
}

module.exports = {
  register,
  login,
};
