const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '..', '..', '.env') , debug: true})

module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    saltRound: process.env.SALT_ROUND
}