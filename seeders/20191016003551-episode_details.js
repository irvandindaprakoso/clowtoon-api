'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episode_details', [
      {
        page: 1,
        image:'https://via.placeholder.com/1080',
        episode_id: 7,
        webtoon_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: 2,
        image:'https://via.placeholder.com/1080',
        episode_id: 7,
        webtoon_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: 3,
        image:'https://via.placeholder.com/1080',
        episode_id: 8,
        webtoon_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episode_details', null, {});    

  }
};
