import { Sequelize } from "sequelize";

exports = (sequelize, Sequelize) => {

    const Category = sequelize.define("category",{
        name: Sequelize.STRING,
    })

    Category.sync({alter: true})

    return Category;

}