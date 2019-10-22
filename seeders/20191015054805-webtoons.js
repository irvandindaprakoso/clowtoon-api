'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('webtoons', [
      {
        title: 'Webtoon 1',
        genre:'drama',
        isFavourite: true,
        url: 'https://via.placeholder.com/1080',
        created_by: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Webtoon 2',
        genre:'horror',
        isFavourite: true,
        url: 'https://via.placeholder.com/1080',
        created_by: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('webtoons', null, {});
  }
};
