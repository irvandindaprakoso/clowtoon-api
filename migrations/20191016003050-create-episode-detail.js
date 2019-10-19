'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('episode_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      page: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      episode_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'episodes',
          key:'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
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
    return queryInterface.dropTable('episode_details');
  }
};