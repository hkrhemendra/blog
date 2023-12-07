
module.exports = (sequelize, Sequelize) => {
  // User Model
  const User = sequelize.define("user", {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    is_admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    is_verified: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });

  User.sync({alter: true})

  User.hasMany(
    require('./post.model')(sequelize, Sequelize),
    {
        foreignKey: 'user_id',
        onDelete: "Cascade"
    }
  )

  return User;
};
