'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('episodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      cover_image: {
        type: Sequelize.STRING
      },
      webtoon_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'webtoons',
          key:'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('episodes');
  }
};