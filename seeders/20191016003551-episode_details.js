'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episode_details', [
      {
        page: 1,
        image:'https://via.placeholder.com/1080',
        episode_id: 1,
        webtoon_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: 2,
        image:'https://via.placeholder.com/1080',
        episode_id: 1,
        webtoon_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: 3,
        image:'https://via.placeholder.com/1080',
        episode_id: 1,
        webtoon_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episode_details', null, {});    

  }
};
