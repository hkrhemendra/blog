module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    title: { type: Sequelize.STRING, allowNull: false },
    content: { type: Sequelize.TEXT, allowNull: false },
    imageUrl: { type: Sequelize.STRING, allowNull: false },
  });

  Post.sync({alter: true})

  return Post;
};
