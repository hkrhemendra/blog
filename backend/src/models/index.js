const dbConfig = require('../config/db.config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
});


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user.model')(sequelize, Sequelize);
db.post = require('./post.model')(sequelize, Sequelize);
db.tags = require('./tags.model')(sequelize, Sequelize);

db.user.hasMany(db.post);
db.post.belongsTo(db.user);

db.post.belongsToMany(db.tags, {through: 'Post_Tags'});
db.tags.belongsToMany(db.post, {through: 'Post_Tags'});



module.exports = {
    db,
    sequelize
}