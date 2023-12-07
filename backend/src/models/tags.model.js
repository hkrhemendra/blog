const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Tags = sequelize.define("Tag", {
    name: Sequelize.STRING,
  });

  Tags.sync({alter: true})

  return Tags;
};
