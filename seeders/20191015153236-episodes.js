'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episodes', [
      {
        title: "ep.1",
        cover_image:'https://via.placeholder.com/1080',
        webtoon_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "ep.2",
        cover_image:'https://via.placeholder.com/1080',
        webtoon_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "ep.3",
        cover_image:'https://via.placeholder.com/1080',
        webtoon_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episodes', null, {});    
    
  }
};
